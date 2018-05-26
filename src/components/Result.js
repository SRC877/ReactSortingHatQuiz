import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import PropTypes from "prop-types";

export class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        className="container result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div>
          Congratulations! You are a <strong>{this.props.quizResult}</strong>!
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
