import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, RaisedButton, TextField } from 'material-ui';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.createPost = this.createPost.bind(this);
  }

  createPost(event) {
    // Because the test cannot get event argument
    // so call preventDefault() on undefined cause an error
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const { create } = this.props;
    const { titleRef, contentRef } = this.refs;

    create(titleRef.getValue(), contentRef.getValue());
  }

  render() {
    const { error } = this.props;
    return (
      <Card>
        <CardTitle
          title="Add New Post"
          subtitle={error ? <span style={{ color: 'red' }}>{error}</span> : null}
        />
        <CardText>
          <form className="new-post" onSubmit={ this.createPost }>
            <TextField
              ref="titleRef"
              hintText="Enter your post title."
            />
            <br />
            <TextField
              ref="contentRef"
              hintText="Enter your post content."
              rows={2}
            />
            <br />
            <RaisedButton type="submit" primary label="Add New" />
          </form>
        </CardText>
      </Card>
    );
  }
}

NewPost.propTypes = {
  error: PropTypes.string,
  create: PropTypes.func.isRequired,
};

export default NewPost;
