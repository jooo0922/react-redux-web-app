import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import NavContainer from "./containers/Nav"; // container component를 파일에 따로 분리한 것을 가져옴.
import ReadContainer from "./containers/Read"; // container component를 파일에 따로 분리한 것을 가져옴.
import ControlContainer from "./containers/Control"; // container component를 파일에 따로 분리한 것을 가져옴.
import UpdateContainer from "./containers/Update"; // container component를 파일에 따로 분리한 것을 가져옴.
import CreateContainer from "./containers/Create"; // container component를 파일에 따로 분리한 것을 가져옴.
import { connect } from "react-redux";
import { Component } from "react";

class App extends Component {
  render() {
    let article = null;
    if (this.props.mode === "READ") {
      article = <ReadContainer></ReadContainer>;
    } else if (this.props.mode === "WELCOME") {
      article = <ReadContainer></ReadContainer>; // WELCOME 모드여도 결국에는 ReadContainer 컴포넌트에서 welcome_content.title, welcome_content.desc값만 store로부터 가져와서 변경되니까!
    } else if (this.props.mode === "CREATE") {
      article = <CreateContainer></CreateContainer>;
    } else if (this.props.mode === "UPDATE") {
      article = <UpdateContainer></UpdateContainer>;
    }

    return (
      <div className="App">
        <Header></Header>
        <NavContainer></NavContainer>
        <ControlContainer></ControlContainer>
        {article}
      </div>
    );
  }
}

export default connect(function (state) {
  return {
    mode: state.mode,
  };
})(App);

/**
 * 항상 이런 예제를 만들 때 a태그 안에 들어가는 href는 그냥 가짜 주소임.
 */

/**
 * Nav, Article 컴포넌트의 container component를 NavContainer, ArticleContainer로 가져온 이유.
 *
 * containers 폴더에 따로 분리해놓은 container component를 리턴받는 코드를
 * 가져오는 것이기 때문에, 해당 가짜 컴포넌트를 진짜 컴포넌트인 Nav, Article와 구분해주기 위해
 * App 컴포넌트 안에서 사용할 때 NavContainer, ArticleContainer 라는 이름으로 가져온 것임.
 * -> 일반적으로 사용되는 패턴은 아니라고 함.. 그냥 본인이 구분하기 위해서 이렇게 했다고 함.
 */

/**
 * Control 컴포넌트에서 클릭 이벤트 발생 시,
 * action 객체가 store로 dispatch 되면서 mode가 변경되는 걸 구현했음.
 *
 * 그 다음에는 mode값이 변경됨에 따라 App 컴포넌트에서 ArticleContainer가
 * 다른 컴포넌트로 변경되는 방식으로 모드를 변경해주려고 함.
 *
 * 그러기 위해서 Article -> Read 라는 이름으로 컴포넌트 이름을 변경해줬음.
 *
 *
 * 그 다음, mode값이 뭐냐에 따라서 ReadContainer를 놔줄지,
 * 아니면 그 자리에 CreateContainer 및 다른 container component를 놔줄지 결정할거임.
 *
 * 이렇게 하려면, App이라는 컴포넌트도 Redux store에서 mode값을 읽어올 수 있어야 하므로,
 * react-redux의 connect 함수를 이용해서 Redux store에 연결시켜줘야 겠지!
 * -> 이렇게 하면 결과적으로 App 컴포넌트를 감싸는 container component가 export default로 지정되서,
 * index.js에서는 이 container component를 가져가게 되겠지
 *
 * 이렇게 connect까지 시켜줬으면 그 다음엔 뭘 해야할까?
 * App 컴포넌트는 store의 state가 변경될 때마다 mode값을 받아와서 App의 props에 주입해줘야 겠지!
 * 그러려면 mapStateToProps(state) 함수를 사용해야겠군..
 */

/**
 * App 컴포넌트를 함수형에서 클래스형으로 바꿔준 이유
 *
 * mapStateToProps() 함수로부터 props를 받아오는 작업을 구현하기가
 * 함수형 컴포넌트에서는 좀 까다롭기 때문에...
 *
 * 좀 더 쉽게 가기 위해서 그냥 클래스형 컴포넌트로 바꿨다고 보면 됨.
 */
