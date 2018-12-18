import React, { Component } from 'react';
import Clock from './Clock';

import style from './App.module.scss';
import { Top, Bottom, Middle } from './Layout';
import Date from './Date';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <Top height={4} width={3}>
          <Date />
          <Clock />
        </Top>

        <Top height={4} width={3} />

        <Top height={4} width={3}>
          <Date />
          <Clock />
        </Top>

        <Middle>
          <h2>This is the Middle</h2>
          <h4>My name is Malcom</h4>
        </Middle>

        {/*
        <TopRight height={2} width={3}>
          <h1>Some message</h1>
        </TopRight>
        */}

        <Bottom>
          <h1>Bottom message</h1>
        </Bottom>
      </div>
    );
  }
}

export default App;
