import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    let tags = [];
    for (let i = 0; i < this.props.data.length; i++) {
      const d = this.props.data[i];
      tags.push(
        <li key={d.id}>
          <a
            href="#"
            data-id={d.id}
            onClick={function (e) {
              this.props.onClick(e.target.dataset.id);
            }.bind(this)}
          >
            {d.title}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ol>{tags}</ol>
      </nav>
    );
  }
}

/**
 * 주!)
 * 위와 같이 redux store의 state로부터 가져온 값을 이용해서
 * 해당 컴포넌트에서 그려줄 list elements 들을 for loop로 생성할 때,
 *
 * <li> 요소에 key라고 하는 약속된 props를 반드시 할당해줘야 하며,
 * 해당 props의 값들은 각각 고유의 값을 가지도록 해야 함.
 *
 * 이렇게 안해주면 콘솔에 계속 에러메시지가 출력됨.
 */

/**
 * for loop를 통해서 생성하는 리스트의 각 a 태그에는
 * onClick 속성에 어떤 이벤트 핸들러 함수가 할당되어 있음.
 *
 * 이 함수는 Nav 컴포넌트의 onClick 이벤트 props에 할당된 이벤트 핸들러 함수를 호출시킴.
 *
 * 이 때, 클릭된 target인 a태그의 data-id값 (즉, e.target.dataset.id)을 인자로 전달해 줌.
 * 이 id값은 store의 state.contents의 각 id값이 할당되어 있는데,
 * 즉 몇 번째 content에 해당하는 리스트가 클릭되었는지, 그 id값을 store에 전달해서 알리는 역할을 하려는 것!
 *
 * 아마 이 Nav 컴포넌트를 감싸는 container component에서
 * connect 함수에서 전달되는 인자로 mapDispatchToProps() 함수를 이용해서
 * Nav의 onClick props에 dispatch()를 사용해서 id값을 보내주는 이벤트 핸들러 함수를 할당해줄거임!
 */
