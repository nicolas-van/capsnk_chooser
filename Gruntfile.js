

module.exports = function(grunt) {

  var _ = require("underscore");

  var libjsfiles = [
    "static/libs/underscore/underscore.js",
    "static/libs/jquery/jquery.js",
    "static/libs/bootstrap/dist/js/bootstrap.js",
  ];
  var myjsfiles = [
    "static/app.js",
  ];
  var jsfiles = [].concat(libjsfiles).concat(myjsfiles);

  var libcssfiles = [
  ];
  var lessfiles = [
    "static/css/style.less",
  ];
  var mycssfiles = _.map(lessfiles, function(e) { return e.replace(".less", ".css") });
  var cssfiles = [].concat(libcssfiles).concat(mycssfiles);

  grunt.initConfig({
    less: {
      dev: {
        options: {
          paths: ["."]
        },
        files: _.object(mycssfiles, lessfiles),
      }
    },
    watch: {
      less: {
        files: "static/css/**.less",
        tasks: ['less']
      },
      cssmin: {
        files: cssfiles,
        tasks: ['cssmin'],
      },
      js: {
        files: jsfiles,
        tasks: ['uglify'],
      },
    },
    cssmin: {
      dist: {
        files: {
          'static/css/style.min.css': cssfiles,
        }
      },
    },
    clean: {
      tmp: {
        src: [].concat(mycssfiles).concat(["static/css/style.min.css"]),
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: 'static/app.map.js',
          sourceMappingURL: '/static/app.map.js',
          sourceMapRoot: '/',
          mangle: false,
        },
        files: {
          'static/app.min.js': jsfiles,
        }
      }
    },
    shell: {
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('dev', ['less', 'cssmin', 'uglify']);
  grunt.registerTask('watcher', ['dev', 'watch']);

  grunt.registerTask('default', ['dev']);

};