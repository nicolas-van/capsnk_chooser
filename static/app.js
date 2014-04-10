
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
        var choice = poss[randInt(0, poss.length - 1)];
        if (choice === $("#game-input").val())
            return choose();
        $("#game-input").val(choice);
    };


})();