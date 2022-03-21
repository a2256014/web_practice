import './App.css';
import React, { useState } from "react"
import Subject from './components/Toc';
import Setlist from './components/List';
import Bodycontents from './components/Contents';
import Create from './components/Create';
import Update from './components/Update';
import Control from './components/Control';

function App() {
  let 제목 = "My_web"
  let [contents, v_contents] = useState([
    { id: 1, titles: 'HTML', desc: '너무 어려워' },
    { id: 2, titles: 'CSS', desc: '너무 진짜 어려워' },
    { id: 3, titles: 'React', desc: '너무 완전 어려워' }
  ])
  var max_contents_id = 3;
  let [mode, setmode] = useState('create')
  let [change_id, setchange_id] = useState(0)
  let [matter] = useState([
    "0 : My Home Page",
    "1st : jwndausicbaskdbawk",
    "2rd : wijdncajsduawhdijc",
    "3rd : ijuefyabhjasnkcnakl"
  ])

  var d_title, d_desc, _article = null;

  if (mode === 'welcome') {
    d_title = 제목
    d_desc = matter[0]
    _article = <Bodycontents _title={d_title} _desc={d_desc}></Bodycontents>
  }
  else if (mode === 'read') {
    var i = 0;
    while (i < contents.length) {
      var data = contents[i];
      if (data.id === change_id) {
        d_title = data.titles;
        d_desc = data.desc;
        break
      }
      i = i + 1;
    }
    _article = <Bodycontents _title={d_title} _desc={d_desc}></Bodycontents>
  }
  else if (mode === 'create') {
    _article = <Create onSubmit={function (_title, _desc) {
      max_contents_id = max_contents_id + 1;
      v_contents(
        contents = contents.concat({ id: max_contents_id, titles: _title, desc: _desc }));
      setmode(mode = 'read');
      setchange_id(change_id = max_contents_id);
    }}></Create>
  }
  else if (mode === 'update') {
    _article = <Update data={contents[change_id - 1]}
      onSubmit={function (_id, _title, _desc) {
        var _content = Array.from(contents);
        var i = 0;
        while (i < _content.length) {
          if (_content[i].id === _id) {
            _content[i] = { id: _id, titles: _title, desc: _desc };
            break;
          }
          i = i + 1;
        }
        v_contents(_content);
        setmode('read');
      }}></Update>
  }

  return (
    <div className="App">
      <Subject title={제목} onChangeMode={function (_mode) {
        setmode(mode = _mode);
      }}></Subject>
      <Setlist data={contents} onChangePage={function (id) {
        setchange_id(change_id = Number(id));
      }} onChangeMode={function (_mode) {
        setmode(mode = _mode);
      }}></Setlist>
      <Control onChangeMode={function (a) {
        if (a === 'delete') {
          if (window.confirm('really?')) {
            var _content = Array.from(contents);
            var i = 0;
            while (i < contents.length) {
              if (_content[i].id === change_id) {
                _content.splice(i, 1);
                break;
              }
              i = i + 1;
            }
            v_contents(_content);
            setmode('welcome');
          }
        }
        else {
          setmode(mode = a);
        }
      }}></Control>
      {_article}
    </div>
  );
}

export default App;
