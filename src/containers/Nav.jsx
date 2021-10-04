import Nav from "../components/Nav"; // presentational component(wrapped component)를 가져옴.
import { connect } from "react-redux";

export default connect(
  function (state) {
    return { data: state.contents };
  }, // mapStateToProps(state)에 해당하는 함수
  function (dispatch) {
    return {
      onClick: function (id) {
        dispatch({ type: "READ", id: id });
      },
    };
  }
)(Nav);

/**
 * Header 컴포넌트와 다르게 Nav 컴포넌트는
 * container component와 presentational component를
 * 서로 다른 파일로 분리시켜서 관리하고 있음.
 *
 * Nav 컴포넌트는 Header와 다르게 다른 코드에서도 사용될 가능성이 있는,
 * 즉 재사용성이 있다고 가정하고 다른 곳에서도 사용할 수 있도록 하기 위해
 * Redux와 관련된 작업을 처리하는 코드를 아예 containers 라는 폴더 안에
 * 파일을 따로 생성해서 관리하려는 것임.
 */

/**
 * Nav 컴포넌트를 감싸는 wrapping component를
 * connect()() 함수로 만들 때, connect() 안에는 2개의 함수가 모두 필요함.
 *
 * 1. mapStateToProps(state)
 * 이 함수는 redux store의 state값이 변경될 때마다 호출되고,
 * 변경된 store의 state를 인자로 받음.
 * 또한 presentational component(여기서는 Nav)에 전달해 줄 props 객체를 리턴해 줌.
 *
 * 여기서는 Nav.props.data 라는 props에다가
 * Redux store 안에 state값 중에서 contents라는 바로 떼려주고 있음.
 *
 * 이 함수를 여기서 왜 사용하냐면, Nav 컴포넌트의 ol 리스트 항목들이
 * store의 state.contents 값이 바뀌거나 추가될 때마다 다시 Nav 컴포넌트의 render 함수를 호출해서
 * 다시 그려주도록 구조를 짜기 위해서 저 함수를 사용해준 것!
 *
 *
 * 2. mapDispatchToProps(dispatch)
 * 이 함수는 인자로 전달받은 dispatch 함수를 이용해서
 * Redux store의 state에 action 객체를 보내주는 이벤트 핸들러 함수를 만들고,
 * 그거를 wrapped component인 Nav의 onClick이라는 이벤트 props에
 * 할당해주는 객체를 리턴하기 위해 사용한 것!
 *
 * 이 때, 이벤트 핸들러 함수에서 받는 id값은
 * Nav 컴포넌트안의 각각의 a태그에 등록된 이벤트핸들러 함수가 전달해준 e.target.dataset.id 이며,
 *
 * 이 함수에서 이제 이 id값을 action 객체에 실어서 store에 보내는거지!
 *
 * 이 때, action 객체에 항상 type을 지정해주는 걸 명심해야 함.
 * 이 type값이 뭐냐에 따라 store의 reducer 함수가 어떤 작업을 해줄 것인지 결정되니까!
 */
