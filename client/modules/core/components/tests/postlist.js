const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PostList from '../postlist';

describe('core.components.postlist', () => {
  const posts = [
    { title: 't-one', _id: 'one' },
    { title: 't-two', _id: 'two' },
  ];

  it('should list given number of items', () => {
    const el = shallow(<PostList posts={posts} />);
    expect(el.find('ListItem').length).to.be.equal(posts.length);
  });

  it('should list post title for each item', () => {
    const el = shallow(<PostList posts={posts} />);
    const items = el.find('ListItem');
    items.forEach((item, index) => {
      expect(item.prop('primaryText')).to.be.equal(posts[index].title);
    });
  });

  it('shallow list post link for each items', () => {
    const el = shallow(<PostList posts={posts} />);
    const items = el.find('ListItem');
    items.forEach((item, index) => {
      expect(item.prop('href')).to.be.equal(`/post/${posts[index]._id}`);
    });
  });
});
