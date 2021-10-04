import React, { Component } from "react";

export default class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onClick("CREATE");
            }.bind(this)}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="update"
            onClick={function (e) {
              e.preventDefault();
              this.props.onClick("UPDATE");
            }.bind(this)}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={function () {
              this.props.onClick("DELETE");
            }.bind(this)}
          />
        </li>
      </ul>
    );
  }
}

/**
 * 주!)
 * 위에 컨트롤 버튼들 중에서
 * 'delete(삭제)' 기능은 a태그같은 링크로 구현하면 안됨!
 *
 * 자동으로 링크를 클릭하는 기능이 실행되면서 사고가 날 수 있음.
 * 이 부분은 React 강의에서 설명한 것 같은데 필요 시 해당 강의 또는 필기 내용을 찾아볼 것
 */

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
 * 일단 현재 이 wrapped component인 Control 컴포넌트에서 할 일은,
 * 각 버튼의 onClick 속성에 각각 이벤트핸들러 함수를 할당해줘야 함.
 *
 * 이 함수에서는 Control 컴포넌트가 container component로부터 할당받은
 * onClick 이벤트 props 안에 들어있는 이벤트핸들러 함수를 호출해 줌.
 * 이 때, 각 버튼이 의미하는 mode 값을 인자로 전달해줘야 함
 */

/**
 * a태그로 버튼 만들 때 주의점
 *
 * a태그는 기본적으로 클릭 이벤트 발생하면 다른 페이지로 이동시키려는 속성을 갖고 있음.
 * 이게 a태그의 default로 정의된 동작인거임.
 *
 * 근데 버튼을 클릭한다고 페이지가 이동하면 Single Page App이 아니잖아!
 * 그니까 a태그를 버튼으로 만들거면 항상 e.preventDefault()를 호출해서
 * 기본 정의된 동작을 막아줘야 함.
 */
