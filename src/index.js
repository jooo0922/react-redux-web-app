import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * 지난 번 예제랑 동일한 내용임.
 *
 * react-redux의 Provider 컴포넌트를 가져온 뒤,
 * 그것이 최상위 컴포넌트인 App을 감싸도록 해주고,
 *
 * store라는 props에
 * store.js에서 Redux에서 생성한 store 객체를 넣어주면
 *
 * 이제 Provider 컴포넌트 하위의 모든 컴포넌트들에서
 * store를 따로 import 하지 않아도 사용할 수 있게 됨.
 */
