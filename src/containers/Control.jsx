import Control from "../components/Control"; // presentational component(wrapped component)를 가져옴.
import { connect } from "react-redux";

export default connect(null, function (dispatch) {
  return {
    onClick: function (mode) {
      dispatch({ type: mode });
    },
  };
})(Control);

/**
 * Control 컴포넌트는
 * 각각의 버튼을 클릭했을 때 이벤트가 실행이 되면,
 * 이벤트핸들러 함수를 실행시켜서 store에게 mode값이 변경되었다는 것을 알려야 함.
 *
 * -> dispatch가 하는 일!
 * 그럼 container component로 분리해놓은 파일에서
 * mapDispatchToProps(dispatch) 함수를 이용해서
 * store에 action 객체를 보내야겠지!
 *
 * 이를 위해 container component 에서는 뭘 해줘야 할까?
 *
 * 먼저 두번째 인자에 mapDispatchToProps(dispatch) 함수를 전달해줘야겠지!
 * 이 함수에서는
 * return {onClick: 이벤트핸들러 함수}
 * 요런 식으로 wrapped component인 Control 컴포넌트의 이벤트 props를 전달해주겠지.
 *
 * 마지막으로 이벤트핸들러 함수에서
 * action 객체에 인자로 전달받은 mode값을 담은 뒤에 store에 쏴주겠지.
 * 뭘 이용해서? mapDispatchToProps 함수가 인자로 가져온 dispatch를 이용해서!
 */
