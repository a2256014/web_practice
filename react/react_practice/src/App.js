import './App.css';
import React, { useState } from "react"
import Subject from './components/Toc';
import Setlist from './components/List';
import Bodycontents from './components/Contents';

function App() {
  let [제목, 제목바꾸기] = useState("my_web")
  let [contents, v_contents] = useState([
    { id: 1, titles: 'HTML', desc: '너무 어려워' },
    { id: 2, titles: 'CSS', desc: '너무 진짜 어려워' },
    { id: 3, titles: 'React', desc: '너무 완전 어려워' }
  ])
  let [mode, modechange] = useState("welcome")
  let [matter] = useState([
    "1st : jwndausicbaskdbawk",
    "2rd : wijdncajsduawhdijc",
    "3rd : ijuefyabhjasnkcnakl"
  ])

  if (mode === 'welcome') {
    return (
      <Bodycontents _title="첫번째" _desc={matter[0]}></Bodycontents>
    );
  }


  return (
    <div className="App">
      <Subject title={제목} sub="공부"></Subject>
      <Setlist data={contents}></Setlist>
    </div>
  );
}

export default App;
