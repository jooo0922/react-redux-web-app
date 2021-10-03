import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>WEB</h1>
        World Wide WEB
      </header>
      <nav>
        <ol>
          <li>
            <a href="html.html">HTML</a>
          </li>
          <li>
            <a href="css.html">CSS</a>
          </li>
          <li>
            <a href="javascript.html">JavaScript</a>
          </li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, WEB.
      </article>
    </div>
  );
}

export default App;

/**
 * 항상 이런 예제를 만들 때 a태그 안에 들어가는 href는 그냥 가짜 주소임.
 */