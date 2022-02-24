import React from 'react';
import './App.css';
import { Answers } from './answers';
import { Game } from './game';
import { Controls } from './controls';
import logo from "./img.png";
import { Text } from "@audi/audi-ui-react";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return (
    <div className="wrapper">
      <div className="grid">
        <Answers />
        <Game />
        <img className="audi-logo" src={logo} alt={"audi logo"}/>
        <div className="game-title-wrapper">
          <Text className="game-title" variant="order1" weight="bold">myAudi memory</Text>
        </div>
        <Controls />
      </div>
    </div>
  );
})

export default App;
