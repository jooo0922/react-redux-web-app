import React, { Component } from "react";

export default class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

/**
 * Article 컴포넌트의 경우
 * 내부의 h2 태그 및 본문의 내용이 가변적이게 되어야 함.
 * -> 즉, Redux store에서 가져온 값을 props에 할당하고, 그 props에 할당된 값으로
 * 내용을 채워줘야 한다는 뜻! 그래서 위 코드처럼 this.props를 이용해서 내용을 채워준 것
 *
 * 즉, wrapping component인 ArticleContainer로 하여금
 * Redux store에서 state 값들을 가져와야 하는데,
 * 아마 container component 파일에서 이 작업을
 * connect() 함수의 인자로 들어갈 mapStateToProps(state) 함수로 해주게 될 거임.
 */
