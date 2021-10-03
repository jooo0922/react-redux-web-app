import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <a
            href="#welcome"
            onClick={function () {
              this.props.onClick(); // 해당 a태그 클릭 시 Header 컴포넌트의 이벤트 props인 onClick에 전달된 핸들러 함수를 호출시키는 것!
            }.bind(this)}
          >
            WEB
          </a>
        </h1>
        World Wide WEB
      </header>
    );
  }
}

export default connect(null, function (dispatch) {
  return {
    onClick: function () {
      dispatch({ type: "CHANGE_MODE", mode: "WELCOME" });
    },
  };
})(Header);

/**
 * 꿀팁!
 *
 * 이전에 깔았던 리액트 snippets 익스텐션 덕분에
 * 'rcc' 라고 단축키를 치면 리액트와 관련된 기본 코드들
 * (리액트, 컴포넌트 클래스 import, 컴포넌트 클래스 기본 코드)등을
 * 알아서 자동으로 세팅해 줌.
 *
 * 리액트로 애플리케이션 만들 때 참고할 것!
 */

/**
 * 이전 예제랑 구조가 살짝 다른 부분
 *
 * 이전 react-redux-with-redux 예제에서는
 * 가짜 컴포넌트(wrappingComponent, container component)와
 * 진짜 컴포넌트(wrappedComponent, presentational component)가 나눠진
 * 폴더 구조로 정리되어 각각의 파일 안에 존재했음.
 *
 * 그러나 이번 구조에서는 하나의 파일 안에서
 * 진짜 컴포넌트를 만들고, 그 진짜 컴포넌트를 export 하는 것이 아니라,
 * connect()(진짜 컴포넌트)를 통해서 리턴받는
 * 진짜 컴포넌트를 감싸는 가짜 컴포넌트를 export default로 지정해준 것.
 *
 * 이렇게 하면 부모 컴포넌트이자 최상위 컴포넌트인 App 에서는
 * 진짜 컴포넌트를 감싸는 가짜 컴포넌트들을 import 하게 되는 셈.
 */

/**
 * 지금 이 Header 컴포넌트의 onClick props에 전달되는 핸들러 함수에서는 어떤 일을 하지?
 *
 * 어떤 클릭 이벤트가 발생했을때 store에 action 객체를 전달해주는 일을 하게 되겠지!
 * 그렇게 함으로써 store의 값을 수정하거나 뭐 그럴테지!
 *
 * 그렇다면 dispatch가 하는 일을 대신 해줄 무언가가 필요함.
 *
 * 그럴 때 사용하는 게
 * react-redux의 connect() 함수에 두 번째 인자로 전달하는 'mapDispatchToProps(dispatch)'
 * 위의 코드에서 지금 connect의 두 번째 익명 함수가 바로 그것임.
 *
 * 그리고 이 함수는 dispatch 함수를 직접 인자로 전달받기 때문에 이걸 사용해줘야 함.
 *
 * 이 때, mapDispatchToProps 함수가 return 해주는 객체의
 * key는 wrappedComponent의 이벤트 props인 onClick과 이름이 동일해야 하고,
 * value는 그 이벤트 props에 할당해주는 이벤트 핸들러 함수와 동일해야 함.
 *
 * -> 다 이전 예제에서 정리했던 내용이니까 참고하면 됨!
 */
