import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      {/* header */}
      <div className="bg-primary text-white text-center p-5">
        <h1>My First Bootstrap5 Page</h1>
        <p>반응형 웹 지원됨</p>
      </div>
      {/* nav */}
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* main */}
      <div className="container mt-5">
        <div className="row">
          {/* sidebar */}
          <div className="col-sm-4">
            <h2>About me</h2>
            <h5>Photo of me:</h5>
            <div className="fakeimg">Fake Image</div>
            <p>아무런 글자나 입력하시면 됩니다.</p>
            <h3 className="mt-4">Some Links</h3>
            <p>아무 글자나 입력</p>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <hr className="d-sm-none"></hr>
          </div>
          {/* main content */}
          <div className="col-sm-8">
            <h2>Title Heading</h2>
            <h5>Title description, 2022.4.27</h5>
            <div className="fakeimg">Fake Image</div>
            <p>아무런 글자 입력...</p>
            <p>
              이런 했던 아이들의 봅니다. 하나에 때 북간도에 봅니다. 마디씩 풀이 겨울이 사람들의
              위에도 같이 지나고 말 계십니다. 애기 패, 가을 흙으로 청춘이 위에 없이 한 듯합니다.
              무엇인지 한 릴케 겨울이 봄이 아이들의 아름다운 내린 밤을 계십니다. 어머니, 라이너 파란
              멀듯이, 버리었습니다.
            </p>

            <h2 className="mt-5">제목.</h2>
            <h5>글 설명.. 2022.4.27</h5>
            <div className="fakeimg">Fake Image</div>
            <p>아무런 글자 입력...</p>
            <p>
              이런 했던 아이들의 봅니다. 하나에 때 북간도에 봅니다. 마디씩 풀이 겨울이 사람들의
              위에도 같이 지나고 말 계십니다. 애기 패, 가을 흙으로 청춘이 위에 없이 한 듯합니다.
              무엇인지 한 릴케 겨울이 봄이 아이들의 아름다운 내린 밤을 계십니다. 어머니, 라이너 파란
              멀듯이, 버리었습니다.
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default Home;
