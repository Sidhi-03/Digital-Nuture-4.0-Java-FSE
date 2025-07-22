import React from "react";
import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import ListofIndianPlayers from "./ListofIndianPlayers";

function App() {
  const flag = true;

  const players = [
    { name: "Mr. Jack", score: 50 },
    { name: "Mr. Michael", score: 70 },
    { name: "Mr. John", score: 40 },
    { name: "Mr. Ann", score: 61 },
    { name: "Mr. Elisabeth", score: 61 },
    { name: "Mr. Sachin", score: 95 },
    { name: "Mr. Dhoni", score: 100 },
    { name: "Mr. Virat", score: 84 },
    { name: "Mr. Jadeja", score: 64 },
    { name: "Mr. Raina", score: 75 },
    { name: "Mr. Rohit", score: 80 }
  ];

  const IndianTeam = ["Sachin", "Dhoni", "Virat", "Rohit", "Yuvaraj", "Raina"];

  const T20Players = ["Mr. First Player", "Mr. Second Player", "Mr. Third Player"];
  const RanjiTrophyPlayers = ["Mr. Fourth Player", "Mr. Fifth Player", "Mr. Sixth Player"];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        <OddPlayers team={IndianTeam} />
        <hr />
        <h1>Even Players</h1>
        <EvenPlayers team={IndianTeam} />
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers players={IndianPlayers} />
      </div>
    );
  }
}

export default App;
