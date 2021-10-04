import React, { Component } from "react";

export default class Create extends Component {
  render() {
    return (
      <form
        onSubmit={function (e) {
          e.preventDefault();
          this.props.onSubmit(e.target.title.value, e.target.desc.value);
        }.bind(this)}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea
            type="text"
            name="desc"
            placeholder="description"
          ></textarea>
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    );
  }
}

/**
 * submit 타입의 input 버튼을 클릭함으로써 발생하는 submit 이벤트에 대한 처리는
 * form 태그의 onSubmit 이라는 속성값에 이벤트핸들러 함수를 할당해 줌으로써 가능해 짐.
 *
 * 이때, submit 버튼을 클릭해도 다른 페이지로 이동하는 게 default 정의 동작이므로,
 * 이벤트핸들러 함수에서 e.preventDefault()를 먼저 해줘야 함.
 */

/**
 * form 태그의 onSubmit의 이벤트핸들러 함수에서
 * 입력창으로부터 입력된 값을 가져오려면,
 *
 * e.target.[input 또는 textarea의 name 속성값].value
 *
 * 요렇게 가져오면 됨.
 *
 *
 * 이 값들을 onSubmit 이벤트 props에 할당된 이벤트핸들러 함수를 호출하면서 전달해주면,
 * container component의 mapDispatchToProps() 함수에서
 * 저 값들을 action 객체에 담아서 Redux store에 쏴주겠지!
 */
