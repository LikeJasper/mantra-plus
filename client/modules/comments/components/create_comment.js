import React, { PropTypes } from 'react';
import { RaisedButton, TextField } from 'material-ui';

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this._create = this._create.bind(this);
  }

  _create() {
    const text = this.refs.text;
    const { create, postId } = this.props;
    create(postId, text.getValue());
    text.input.value = '';
    text.setState({ hasValue: false });
  }

  _renderError(error) {
    return (
      <div className="error">
        {error}
      </div>
    );
  }

  render() {
    const { error } = this.props;
    return (
      <div>
        {error ? this._renderError(error) : null}
        <TextField
          ref="text"
          hintText="Enter your comment here."
        />
        <RaisedButton
          onClick={this._create}
          label="Add Comment"
          primary
        />
      </div>
    );
  }
}

CreateComment.propTypes = {
  create: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  error:  PropTypes.string,
};

export default CreateComment;
