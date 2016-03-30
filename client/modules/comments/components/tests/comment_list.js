const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import CommentList from '../comment_list';

describe('comments.components.comment_list', () => {
  const comments = [
    { author: 'c-one', text: 't-one', saving: true, _id: 'one' },
    { author: 'c-two', text: 't-two', saving: false, _id: 'two' },
    { author: 'c-three', text: 't-three', saving: true, _id: 'three' },
    { author: 'c-four', text: 't-four', saving: false, _id: 'four' },
  ];

  it('should list given number of items', () => {
    const el = shallow(<CommentList comments={comments} />);
    expect(el.find('ListItem').length).to.be.equal(comments.length);
  });

  it('should list comment author for each item', () => {
    const el = shallow(<CommentList comments={comments} />);
    const items = el.find('ListItem');
    items.forEach((item, index) => {
      const author = item.prop('secondaryText');
      expect(author).to.have.string(comments[index].author);
    });
  });

  it('should list comment text for each item', () => {
    const el = shallow(<CommentList comments={comments} />);
    const items = el.find('ListItem');
    items.forEach((item, index) => {
      const text = item.prop('primaryText');
      expect(text).to.have.string(comments[index].text);
    });
  });

  it('should list saving status for each item', () => {
    const el = shallow(<CommentList comments={comments} />);
    const items = el.find('ListItem');
    items.forEach((item, index) => {
      const text = item.prop('secondaryText');
      if (comments[index].saving) {
        expect(text).to.match(/\.\.\.$/);
      } else {
        expect(text).not.to.match(/\.\.\.$/);
      }
    });
  });
});
