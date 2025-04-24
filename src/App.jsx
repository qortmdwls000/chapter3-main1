import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-b.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">백승진의 리액트 🐣</h1>

      <ProfileCard
        image={profileImg}
        name="백승진"
        description=" 부트캠프 10기"
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://6-teal.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🎙️ 마이크🎚️
        </a>
        <a
          className="link-button"
          href="https://1-blond-ten.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🎲 트렌드🧩
        </a><a
          className="link-button"
          href="https://3-bay-rho.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🧸곰도리🧸
        </a><a
          className="link-button"
          href="https://2-blush-iota.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🏞️여행🏞️
        </a><a
          className="link-button"
          href="https://5-two-nu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🍎사과🍎
        </a>
        <a
          className="link-button"
          href="https://home-plum-delta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         💻 개발지원서💻
        </a>
        <a
          className="link-button"
          href="https://8-three-rouge.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🖖 안녕🖖
        </a>
        <a
          className="link-button"
          href="https://9-eight-sepia.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🐈 고양이🐈‍⬛
        </a>
        <a
          className="link-button"
          href="https://10-ecru.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🏁패턴도형🏁
        </a>
        <a
          className="link-button"
          href="https://11-jet-xi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🟨 노란도형🟨
        </a>
        <a
          className="link-button"
          href="https://12-brown-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         ⌨️ 웹 개발🖱️
        </a>
        <a
          className="link-button"
          href="https://13-gamma-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         👨🏻‍💻 가상 클래스👨🏻‍💻
        </a>
        <a
          className="link-button"
          href="https://16-gamma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         ⛹️농구공⛹️
        </a>
        <a
          className="link-button"
          href="https://15-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         🟥 움직이는 사각형🟦
        </a>
      </div>
    </div>
  );
}

export default App;
