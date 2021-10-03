import { createStore } from "redux";

const initState = {
  mode: "WELCOME",
  welcome_content: {
    title: "WEB",
    desc: "Hello, WEB",
  },
  selected_content_id: 1,
  contents: [
    { id: 1, title: "HTML", desc: "HTML is ..." },
    { id: 2, title: "CSS", desc: "CSS is ..." },
    { id: 3, title: "JS", desc: "JS is ..." },
  ],
};
function reducer(state = initState, action) {
  // if (state === undefined) { 이 조건문은 항상 reducer 최초 실행을 의미.
  //   return initState;
  // }
  // 위에 처럼 조건문을 달 수도 있지만, 처음 인자로 state를 전달할 때, state = initState로 쓰면,
  // 'state값이 딱히 전달되지 않는다면, initState로 해줘' 라는 뜻. 즉, 최초 실행 시에는 state가 당연히 없으니 initState로 들어가겠지!
  return state;
}

export default createStore(reducer);

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
