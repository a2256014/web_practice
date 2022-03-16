import './App.css';
import React, { useState } from "react"

function App() {

  let [글제목, 글제목변경] = useState(["리엑트 공부2", "리엑트 공부1"]);
  let [좋아요, 좋아요변경] = useState(0);

  let my_size = { fontSize: "30px" }
  let posts = 'React study'
  // function 함수() {
  //   return 100
  // }

  function 제목바꾸기() {
    var newlist = [...글제목];
    newlist = newlist.sort();
    글제목변경(newlist);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={my_size}>개발 Blog</div>
      </div>
      {/* <h4>{posts}</h4> */}
      {/* <img src={logo} /> */}
      {/* <h4>{함수()}</h4> */}
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h3>{posts} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>😍</span> {좋아요} </h3>
        <p>3월 15일</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>3월 15일</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>3월 15일</p>
        <hr />
      </div>
      <Modal />
    </div >
  );
}


function Modal() {
  return (
    <>
      <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )
}

export default App;
