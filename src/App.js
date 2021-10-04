import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import NavContainer from "./containers/Nav"; // container component를 파일에 따로 분리한 것을 가져옴.
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavContainer></NavContainer>
      <Article></Article>
    </div>
  );
}

export default App;

/**
 * 항상 이런 예제를 만들 때 a태그 안에 들어가는 href는 그냥 가짜 주소임.
 */

/**
 * Nav 컴포넌트의 container component를 NavContainer로 가져온 이유.
 *
 * containers 폴더에 따로 분리해놓은 container component를 리턴받는 코드를
 * 가져오는 것이기 때문에, 해당 가짜 컴포넌트를 진짜 컴포넌트인 Nav와 구분해주기 위해
 * App 컴포넌트 안에서 사용할 때 NavContainer 라는 이름으로 가져온 것임.
 * -> 일반적으로 사용되는 패턴은 아니라고 함.. 그냥 본인이 구분하기 위해서 이렇게 했다고 함.
 */
