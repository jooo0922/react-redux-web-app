import Control from "../components/Control"; // presentational component(wrapped component)를 가져옴.
import { connect } from "react-redux";

export default connect(null, function (dispatch) {
  return {
    onClick: function (mode) {
      if (mode === "DELETE_PROCESS") {
        // 이벤트핸들러가 호출되면서 전달된 인자 mode가 만약 DELETE_PROCESS라면, 이 if block에서 삭제와 관련된 작업을 바로 처리해주도록 하려는 것!
        if (!window.confirm("Really?")) {
          return; // window.confirm() 이 false로 리턴됬다는 뜻은, 삭제하지 않겠다는 거니까 암것도 안해주고 if block을 나와야겠지!
        }
        // 그리고 만약 '예'를 클릭해서 true가 리턴됬다면, 'DELETE_PROCESS' type을 action 객체에 실어서
        // Redux store에 쏴줘야곘지. 그리고 실제 DELETE 작업을 reducer 함수에서 처리해주면 될거임.
      }
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

/**
 * Window.confirm(message)
 *
 * 확인, 취소 두 버튼을 가지며, 인자로 전달한 string을 메시지로 표시해주는 모달창을 띄움.
 * 이 모달창에서 사용자가 확인을 누르면 true를, 취소를 누르면 false를 리턴해 줌.
 *
 * 위에서는 delete 버튼을 눌렀을 때, 정말 삭제할 것인지 확인하는 용도로 사용한 것!
 *
 * react-practice의 App.js 파일에서 해당 내용을 한 번 정리했었음!
 * 여기서도 이런 방식으로 DELETE 기능을 구현했군!
 */
