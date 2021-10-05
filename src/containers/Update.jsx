import Update from "../components/Update"; // presentational component(wrapped component)를 가져옴.
import { connect } from "react-redux";

export default connect(
  function (state) {
    let title, desc, id;
    for (let i = 0; i < state.contents.length; i++) {
      const d = state.contents[i];
      if (d.id === state.selected_content_id) {
        title = d.title;
        desc = d.desc;
        id = d.id;
        break;
      }
    }

    return {
      title, // title: title을 이렇게 쓸 걸 title로 축약해서 쓴거임.
      desc, // desc도 마찬가지
      id, // Update에서는 content에 해당하는 id값도 필요하기 때문에 추가로 Update 컴포넌트의 props에 때려넣어 줌.
    };
  },
  function (dispatch) {
    return {
      onSubmit: function (id, title, desc) {
        dispatch({ type: "UPDATE_PROCESS", id, title, desc }); // id: id, title: title, ... 이렇게 쓸 거를 줄여쓴거임.
      },
    };
  }
)(Update);

/**
 * Update가 Create와 다른 점
 *
 * Update는 입력폼이 화면에 그려질 때,
 * 기존에 있었던 값이 미리 입력되어 있어야 함.
 *
 * 그러려면 store로부터 데이터를 가져와서 폼에 주입해줘야 함.
 * -> container component에서 mapStateToProps(state) 함수를 이용하겠군!
 *
 * 게다가, 사용자가 수정한 값을 store에 직접 쏴줘야 하니까
 * mapDispatchToProps(dispatch) 함수도 반드시 필요함!
 */

/**
 * mapStateToProps(state) 함수에서
 * 현재 선택된, 수정하고자 하는 content를 가져오려면 어떻게 해야할까?
 *
 * Redux store의 state에 selected_content_id와 동일한 id값을 갖는 content를 가져오면 됨.
 * 이게 Read 컴포넌트의 container component에서 해줬던 작업이지?
 *
 * 그래서 containers/Read.jsx 파일에서
 * mapStateToProps(state) 함수에서 작성한 코드를 그대로 가져와서 쓰면 됨.
 */

/**
 * mapDispatchToProps(dispatch) 에서는 뭘 해줘야 하나?
 *
 * 사용자가 입력값을 수정하고 나면 submit 버튼을 클릭함으로써,
 * Update 컴포넌트의 form 태그의 submit 속성에 할당된 이벤트핸들러 함수가 작동될거임.
 *
 * 그 함수 안에서는 container component 에서 mapDispatchToProps 함수를 통해
 * Update의 onSubmit 이라는 이벤트 props에 할당된 이벤트핸들러 함수가 호출될 수 있도록 함.
 *
 * 이 함수에서는 뭐 당연히 selected_content_id에 해당하는 content의
 * id, title, desc 모두의 값들을 수정해줘야 하니까
 * Redux store로 dispatch를 이용해서 action 객체를 쏴줘야 함.
 * 그러면 reducer 함수가 선택된 content를 수정해주겠지.
 *
 * 그럼 이 action 객체에는 뭐뭐를 실어주면 되나?
 * Update 컴포넌트에서 전달해 준 state값들인 id, title, desc 전부다 실어서 보내보리면 됨.
 */
