import { createStore } from "redux";

const initState = {
  mode: "WELCOME",
  welcome_content: {
    title: "WEB",
    desc: "Hello, WEB",
  },
  selected_content_id: 1,
  max_content_id: 3, // 'CREATE_PROCESS' mode에서 새로운 content를 추가할 때마다 +1을 한 다음 새로 생긴 content의 고유한 id값으로 넣어주기 위해 만든 값.
  contents: [
    { id: 1, title: "HTML", desc: "HTML is ..." },
    { id: 2, title: "CSS", desc: "CSS is ..." },
    { id: 3, title: "JS", desc: "JS is ..." },
  ],
};
function reducer(state = initState, action) {
  if (action.type === "WELCOME") {
    // action 객체가 들어와서 reducer 함수가 호출되면, type을 확인한 뒤 'WELCOME' 이라는 게 체크되면
    // 현재의 원본 state를 spread syntax로 복사한 뒤, mode값만 'WELCOME'으로 바꿔서 리턴해 줌.
    // 항상 state를 바꿀 땐 Immutable 하게! 원본은 건드리지 말 것!
    return { ...state, mode: "WELCOME" };
  }
  if (action.type === "READ") {
    // type이 'READ'라는 게 확인되면, NavContainer로부터 dispatch된 action 객체가 왔구나! 라고 인지하고,
    // mode를 'READ'로 변경해준 뒤, action객체에 실려온 id값을 selected_content_id에 할당된 복사&수정된 state를 리턴해 줌!
    return {
      ...state,
      mode: "READ",
      selected_content_id: action.id,
    };
  }
  if (action.type === "CREATE") {
    // ControlContainer로부터 dispatch된 action 객체의 type이 CREATE면 모드를 CREATE로 변경
    return {
      ...state,
      mode: "CREATE",
    };
  }
  if (action.type === "CREATE_PROCESS") {
    const newId = state.max_content_id + 1; // 새로운 content 객체의 id값으로 지정해줄 값을 미리 구해놓음.
    const newContents = [
      ...state.contents,
      {
        id: newId,
        title: action.title,
        desc: action.desc,
      },
    ]; // state.contents의 원본 배열을 복제한 뒤, 여기에 덮어쓸 새로운 content 객체를 만들어서 추가해 줌!

    return {
      ...state,
      contents: newContents,
      max_content_id: newId,
      mode: "READ", // 이게 아이디어가 좋은 게, state를 변경하는 김에 mode도 'READ'로 바꾸고, selected_content_id도 방금 추가된 content의 id(newId)로 바꾸면,
      // content가 추가되자마자 READ모드로 넘어가서 추가된 content를 Read 컴포넌트가 보여주도록 하는거지!
      selected_content_id: newId,
    }; // 이번에는 state 원본 전체를 복사한 뒤, contents 부분과 max_content_id 부분만 덮어쓸 내용을 추가하여 리턴해 줌!
  }
  if (action.type === "UPDATE") {
    // ControlContainer로부터 dispatch된 action 객체의 type이 UPDATE면 모드를 UPDATE로 변경
    return {
      ...state,
      mode: "UPDATE",
    };
  }
  if (action.type === "UPDATE_PROCESS") {
    const newContents = [...state.contents]; // state.contents의 원본 배열을 복제함.

    for (let i = 0; i < newContents.length; i++) {
      if (newContents[i].id === action.id) {
        newContents[i].title = action.title;
        newContents[i].desc = action.desc;
      }
    } // 수정된 content의 id값(action에 실려옴)과 동일한 content를 찾은 뒤, title, desc 값을 action의 title, desc로 수정함.

    return {
      ...state,
      contents: newContents,
      mode: "READ", // state의 특정 content를 수정하는 김에 mode도 'READ'로 바꿔서
      // 해당 content가 수정되자마자 READ모드로 넘어가서 수정된 content를 Read 컴포넌트가 보여주도록 하는거지!
      selected_content_id: action.id, // selected_content_id를 action에 실려온 id값으로 지정해서 방금 수정된 content를 가리키도록 함.
      // 이렇게 해야 Read의 container component가 방금 수정된 content를 화면에 보여주도록 mapStateToProps() 함수에서 props값을 할당해 줌.
    };
  }

  // if (state === undefined) { 이 조건문은 항상 reducer 최초 실행을 의미.
  //   return initState;
  // }
  // 위에 처럼 조건문을 달 수도 있지만, 처음 인자로 state를 전달할 때, state = initState로 쓰면,
  // 'state값이 딱히 전달되지 않는다면, initState로 해줘' 라는 뜻. 즉, 최초 실행 시에는 state가 당연히 없으니 initState로 들어가겠지!
  return state;
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * reducer()
 *
 * Redux로부터 store를 생성하려면 항상 reducer 함수가 필요하다.
 * reducer 함수는 store를 어떻게 변경시킬 것인가에 대한 정책을 정하는 코드.
 *
 * Redux app 에서는 일을 처리하는 대부분의 작업들은
 * 거의 Redux에서 한다고 보면 됨.
 *
 * 이번 예제에서는 reducer 함수를 따로 만들어놓은 다음 인자로 전달함.
 */

/**
 * initState 객체는 뭘까?
 *
 * reducer 함수는 store가 생성될 때 최초 1회에 한해서 무조건 실행이 되는데
 * 이 때, state의 최초값으로 리턴해주기 위해 작성해놓은 객체
 */

/**
 * window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 *
 * 이거는 createStore() 함수의 두 번째 인자로 넣어주면
 * 크롬 웹 브라우저에서 Redux devtools를 사용할 수 있게 해줌.
 */
