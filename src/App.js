//import logo from './logo.svg';
import './App.css';
//import BSTest1 from './bs/BSTest1';
// import BSTest2 from './bs/BSTest2';
// import Home from './Home';
// import Home2 from './Home2';
import Gournet from './Gournet/Gournet';

// 따로따로 추가방법
// import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
// import CloseButton from 'react-bootstrap/CloseButton'
// import Dropdown from 'react-bootstrap/Dropdown'

// 필요한게 많으면 밑에꺼로 해서 ,넣어서 추가하면 됨
//import { Button, Table, CloseButton, Dropdown } from 'react-bootstrap';

// 리액트용 부트스트랩 사용하기
// 리액트용 부트스트랩 설치
// 기본 설치 방식
// yarn add react-bootstrap bootstrap

// CDN을 통해서 설치
// public/index.html에 bootstrap 파일을 로딩(css, js)

// 주의사항
// bootstrap.min.css를 index.js에 import해서 사용해야함
// CDN 방식으로 사용할 경우 index.js에 import를 생략

// import 'bootstrap/dist/css/bootstrap.min.css'; 필수

// 리액트용 부트스트랩 태그 로드
// import Button from 'react-bootstrap/Button';
// import {Button} from 'react-bootstrap';

// 리액트용 부트스트랩 태그 사용
// <Button>부트스트랩 버튼</Button>

function App() {
  return (
    <div className="App">
      {/* <BSTest1/> */}
      {/* <BSTest2 /> */}
      {/* <Home/> */}
      {/* <Home2/> */}
      <Gournet />
    </div>
  );
}

export default App;
