import React from "react";
import PropTypes from "prop-types";

export class QuestionCount extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="questionCount">
        Question <span>{this.props.counter}</span> of{" "}
        <span>{this.props.total}</span>
      </div>
    );
  }
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;