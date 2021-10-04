import Read from "../components/Read"; // presentational component(wrapped component)를 가져옴.
import { connect } from "react-redux";

export default connect(function (state) {
  let title, desc;
  if (state.mode === "WELCOME") {
    title = state.welcome_content.title;
    desc = state.welcome_content.desc;
  } else {
    for (let i = 0; i < state.contents.length; i++) {
      const d = state.contents[i];
      if (d.id === state.selected_content_id) {
        title = d.title;
        desc = d.desc;
        break;
      }
    }
  }

  return {
    title: title,
    desc: desc,
  };
})(Read);

/**
 * Article 컴포넌트도 재사용성을 위해
 * container component와 presentational component를
 * 서로 다른 파일로 분리시켜서 관리하기로 함.
 */

/**
 * Article 컴포넌트에서는 특별히 이벤트를 받아서
 * store에 dispatch 해주는 일이 없기 때문에
 *
 * 그냥 state만 props로 전달해주는
 * mapStateToProps(state) 함수만 사용해주면 됨!
 * 참고로 이 함수는 store의 값이 변경될 때마다 호출된다는 점 기억할 것!
 *
 * 우선, 변경된 state값이 인자로 전달되면서 mapStateToProps 함수가 호출되면,
 * state.mode가 'READ'인지, 'WELCOME'인지에 따라서 일차적으로
 * Article의 props에 어떤 state값을 넣어줄 지 결정해야 함.
 *
 * 만약 값이 'READ'라면, Article 컴포넌트에 전달하려는 props 이름과
 * 그거에 걸맞는 state 값의 key-value쌍 객체를 전달해주기 전에,
 * state.contents를 for loop로 돌려서
 * selected_content_id와 일치하는 content의 title, desc값을 찾아서 변수에 담아놓은 뒤,
 * 해당 변수를 value로 넣어줘서 리턴해야겠지!
 *
 * 이렇게 함으로써, 현재 선택된 content에 대한 state값이
 * Article 컴포넌트이 props에 각각 할당되는 셈!
 */
