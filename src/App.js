import React, { useState } from 'react'

const games = [
  'Street Fighter II: The World Warrior (Capcom, 1991)',
  'Super Street Fighter II Turbo (Capcom, 1994)',
  'Marvel Super Heroes (Capcom, 1995)',
  'Red Earth (Capcom, 1996)',
  'X-Men vs. Street Fighter (Capcom, 1996)',
  'Super Gem Fighter: Mini Mix (Capcom, 1997)',
  // "Rival Schools: United by Fate",
  'Street Fighter Alpha 3 (Capcom, 1998)',
  'Marvel vs. Capcom: Clash of Super Heroes (Capcom, 1998)',
  // "Plasma Sword: Nightmare of Bilstein (Capcom, 1998)",
  // "Street Fighter EX2 Plus (Capcom, 1999)",
  'Street Fighter III 3rd Strike: Fight for the Future (Capcom, 1999)',
  "JoJo's Bizarre Adventure (Capcom, 1999)",
  'Fatal Fury 2 (SNK, 1992)',
  'Samurai Shodown III / Samurai Spirits (SNK, 1995)',
  "The King of Fighters '94 (SNK, 1994)",
  "The King of Fighters '98 - The Slugfest (SNK, 1998)",
  'Kizuna Encounter - Super Tag Battle (SNK, 1996)',
  'The Last Blade 2 (SNK, 1998)',
  'Garou - Mark of the Wolves (SNK, 1999)',
  'Rage of the Dragons (Playmore, 2002)',
  'SNK vs. Capcom - SVC Chaos (SNK, 2003)',
  'The King of Fighters 2003 (SNK, 2003)',
  'Far East of Eden: Kabuki Klash (Hudson, 1995)',
  'Asura Buster: Eternal Warriors (Fuuki, 2000)',
  'Matrimelee (Noise Factory/Atlus, 2002)'
]

function randInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function App () {
  const lis = games.map((el, i) => (
    <li key={i}>{el}</li>
  ))
  const [selected, setSelected] = useState(null)
  const choose = () => {
    setSelected(games[randInt(0, games.length - 1)])
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 pt-3">
          <h1 className="text-center h3">The Capcom/SNK Fighting Game Chooser</h1>
          <p>
            <input className="form-control" id="game-input" type="text" placeholder='Click the "Choose a game" button' disabled
              value={selected || ''}
            />
          </p>
          <p className="text-center">
            <button className="btn btn-primary btn-lg" onClick={choose}>Choose a game</button>
          </p>
          <h2 className="h5">Random Fighting Game Tournament Rules</h2>
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
          <h2 className="h5">Random Fighting Game Tournament Rules</h2>
          <ul id="possibilities">
            {lis}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
