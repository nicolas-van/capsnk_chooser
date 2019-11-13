

<h1>The Capcom/SNK Fighting Game Chooser</h1>
<p>
    <input class="form-control" id="game-input" type="text" placeholder='Click the "Choose a game" button' disabled></input>
</p>
<p>
    <button id="choose-button" class="btn btn-default center-block">Choose a game</button>
</p>
<p>
    <h4>Random Fighting Game Tournament Rules</h4>
    <ul>
        <li>The match is over when either player wins 2 games (2 games out of 3).</li>
        <li>Each game is played by randomly choosing a new fighting game using the chooser above. It is
            recommended to use MAME to play with these fighting games.</li>
        <li>A game should use the default number of rounds defined in the chosen fighting game (usually
            2 winning rounds out of 3).</li>
        <li>After the fighting game was selected, any player may choose to discard that fighting
            game. When this event occurs, the players simply use the random chooser a second
            time. Each player can only discard one fighting game per match.</li>
    </ul>
</p>
<p>
    <h4>Possible games</h4>
    <ul id="possibilities">
        <li>Street Fighter II: The World Warrior (Capcom, 1991)</li>
        <li>Super Street Fighter II Turbo (Capcom, 1994)</li>
        <li>Marvel Super Heroes (Capcom, 1995)</li>
        <li>Red Earth (Capcom, 1996)</li>
        <li>X-Men vs. Street Fighter (Capcom, 1996)</li>
        <li>Super Gem Fighter: Mini Mix (Capcom, 1997)</li>
        <!--<li>Rival Schools: United by Fate</li>-->
        <li>Street Fighter Alpha 3 (Capcom, 1998)</li>
        <li>Marvel vs. Capcom: Clash of Super Heroes (Capcom, 1998)</li>
        <!--<li>Plasma Sword: Nightmare of Bilstein (Capcom, 1998)</li>-->
        <!--<li>Street Fighter EX2 Plus (Capcom, 1999)</li>-->
        <li>Street Fighter III 3rd Strike: Fight for the Future (Capcom, 1999)</li>
        <li>JoJo's Bizarre Adventure (Capcom, 1999)</li>

        <li>Fatal Fury 2 (SNK, 1992)</li>
        <li>Samurai Shodown III / Samurai Spirits (SNK, 1995)</li>
        <li>The King of Fighters '94 (SNK, 1994)</li>
        <li>Kizuna Encounter - Super Tag Battle (SNK, 1996)</li>
        <li>The King of Fighters '98 - The Slugfest (SNK, 1998)</li>
        <li>The Last Blade 2 (SNK, 1998)</li>
        <li>Garou - Mark of the Wolves (SNK, 1999)</li>
        <li>Rage of the Dragons (Playmore, 2002)</li>
        <li>SNK vs. Capcom - SVC Chaos (SNK, 2003)</li>
        <li>The King of Fighters 2003 (SNK, 2003)</li>

        <li>Far East of Eden: Kabuki Klash (Hudson, 1995)</li>
        <li>Asura Buster: Eternal Warriors (Fuuki, 2000)</li>
        <li>Matrimelee (Noise Factory/Atlus, 2002)</li>
    </ul>
</p>


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
