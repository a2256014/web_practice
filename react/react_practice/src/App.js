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
  let [change_id, setchange_id] = useState(0)
  let [matter] = useState([
    "1st : jwndausicbaskdbawk",
    "2rd : wijdncajsduawhdijc",
    "3rd : ijuefyabhjasnkcnakl",
    "0 : My Home Page"
  ])

  var d_title, d_desc = null;

  if (change_id === 0) {
    d_title = 제목;
    d_desc = matter[3];
  }
  else if (change_id === 1) {
    d_title = contents[0].titles;
    d_desc = matter[0];
  }
  else if (change_id === 2) {
    d_title = contents[1].titles;
    d_desc = matter[1];
  }
  else if (change_id === 3) {
    d_title = contents[2].titles;
    d_desc = matter[2];
  }


  return (
    <div className="App">
      <Subject title={제목} sub="공부"></Subject>
      <Setlist data={contents} onChangePage={function (id) {
        setchange_id(change_id = Number(id));
      }}></Setlist>
      <Bodycontents _title={d_title} _desc={d_desc}></Bodycontents>
    </div>
  );
}

export default App;
