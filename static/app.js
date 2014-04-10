
(function() {
    "use strict";

    window.app = {};

    app.main = function() {
        $("#choose-button").click(choose);
    };

    function randInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var choose = function() {
        var poss = [];
        $("#possibilities > li").each(function() {
            poss.push($(this).text());
        });
        var choice = randInt(0, poss.length - 1);
        $("#game-input").val(poss[choice]);
    };


})();