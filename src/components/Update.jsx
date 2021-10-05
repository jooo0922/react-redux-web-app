import React, { Component } from "react";

export default class Update extends Component {
  // container component에서 mapStateToProps 함수를 통해 전달받은 props 값들을 일단 Update 컴포넌트의 state에 초기화해놓음.
  state = {
    id: this.props.id,
    title: this.props.title,
    desc: this.props.desc,
  };

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value, // 변경할 state의 key를 동적으로 코딩한 것. 각 input의 name이 state key값과 동일하니까!
    });
  }

  render() {
    return (
      <form
        onSubmit={function (e) {
          e.preventDefault();
          this.props.onSubmit(
            Number(e.target.id.value), // id값을 쌩으로 넘기면 문자열을 넘기는 셈. 이러면 redux store의 state가 오작동하므로, 강제로 숫자로 변환해서 넘김.
            e.target.title.value,
            e.target.desc.value
          );
        }.bind(this)}
      >
        <input type="hidden" name="id" value={this.state.id} />
        <p>
          <input
            type="text"
            name="title"
            onChange={this.onChangeHandler.bind(this)} // jsx의 input 태그는 값을 수정하려면 onChange 속성에 이벤트핸들러를 지정해줘야 함...
            placeholder="title"
            value={this.state.title}
          />
        </p>
        <p>
          <textarea
            type="text"
            name="desc"
            onChange={this.onChangeHandler.bind(this)}
            placeholder="description"
            value={this.state.desc} // 리액트에서는 참고로 textarea가 value값을 가짐. -> HTML과 정확히 일치하는 게 아님. 유사 HTML!
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
 * Create 컴포넌트와 구조가 유사하기 때문에
 * Create에서 사용하던 jsx를 거의 그대로 가져와서 사용함.
 *
 * 이 때, Update는 '수정'이기 때문에
 * 기존에 있었던 '어떤 content를 수정해줄 것이냐' 를 알려줘야 함.
 * 그래서 그 정보를 보통 서버쪽에 전달할 때 <input type="hidden"> 을 주로 사용함.
 *
 * 참고로 hidden 타입의 input은 실제로 화면에는 보이지 않음.
 */

/**
 * Update가 Create와 다른 점
 *
 * Update는 입력폼이 화면에 그려질 때,
 * 기존에 있었던 값이 미리 입력되어 있어야 함.
 *
 * 그러려면 store로부터 데이터를 가져와서 폼에 주입해줘야 함.
 * -> container component에서 mapStateToProps() 함수를 이용하겠군!
 *
 * 일단 그래서 mapStateToProps()를 통해서 가져온 props를
 * Update 컴포넌트의 state에 넣어서 초기화해주고,
 * state값들을 각 입력폼의 기본값으로 할당해주기 위해 value 속성값에 할당함.
 *
 * -> 이렇게 하면, update 모드로 전환되었을 때
 * 현재 선택된 selected_content_id 에 해당하는 content 값들이
 * 입력폼에 기본값으로 쓰여있게 됨.
 */

/**
 * 입력값을 수정하고 나서 해야 할 일
 *
 * 입력값을 수정하고 나면 submit 버튼을 클릭함으로써,
 * form 태그의 submit 속성에 할당된 이벤트핸들러 함수를 작동시켜야 함.
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
 * state에 저장된 id, title, desc 전부다 실어서 보내보리면 됨.
 *
 * 그러니 onSubmit 이벤트 props에 할당된 이벤트핸들러 호출 시
 * 인자로 this.state.id, title, desc를 모두 전달해줘야 하는 거임.
 */

/**
 * 리액트의 특성상 jsx의 input 태그는
 * 기본값 value를 수정해주려면 onChange 속성에 이벤트핸들러를 할당하여
 * 그 안에서 this.setState()로 state값을 수정해줄 수 있도록 해야 함.
 *
 * 왜냐하면 각 input 태그의 value에 state값을 넣어놓은 상태니까
 * 이벤트핸들러를 통해서 state값을 변경해야 입력폼에 value를 바꿔주겠다는거임.
 *
 * -> 이렇게 안하면 콘솔에 자꾸 에러가 찍힘.
 */
