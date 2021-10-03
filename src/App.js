import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;

/**
 * 항상 이런 예제를 만들 때 a태그 안에 들어가는 href는 그냥 가짜 주소임.
 */
