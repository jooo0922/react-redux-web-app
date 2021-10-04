import Create from "../components/Create"; // presentational component(wrapped component)를 가져옴.
import { connect } from "react-redux";

export default connect(null, function (dispatch) {
  return {
    onSubmit: function (title, desc) {
      dispatch({ type: "CREATE_PROCESS", title, desc });
    },
  };
})(Create);

/**
 * Create 컴포넌트는 그 안에 주입해줄 정보는 필요없으니까 mapStateToProps()는 필요없음.
 *
 * 대신 submit 이벤트가 발생할 시 dispatch를 통해서 입력받은 값을
 * Redux store로 보내줘야겠지? -> mapDispatchToProps(dispatch) 함수가 필요하겠네!
 *
 * 이 때, Create 컴포넌트의 onSubmit props에 주입해주는 이벤트핸들러 함수는
 * title, desc라는 입력값을 인자로 받아오고, 얘내들을 action 객체에 담아서
 * dispatch로 쏴줘야 함.
 *
 *
 * 주1)
 * type을 'CREATE_PROCESS'라고 해주는 이유는,
 * type이 'CREATE'로 해서 reducer 함수를 실행시키면 mode를 'CREATE'로 바꾸는 작업을 해주기 떄문임.
 *
 * 그런데 우리가 모드를 바꿔주는 작업을 하려는 게 아니잖아!
 * contents에 입력받은 값들을 이용해서 새로운 content 객체를 create 해주려는 거니까
 * type 이름을 좀 다르게 구분지어줄 필요가 있는거지!
 *
 *
 * 주2)
 * 또, title: title, desc: desc 이렇게 key-value 이름이 동일하게 할당해줄 경우
 * 그냥 title, desc 로 해줘도 됨.
 */
