const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Post from '../post';

describe('core.components.post:', () => {
  it('should display the post title', () => {
    const post = { title: 'Nice One' };
    const el = shallow(<Post post={post} />);
    const title = el.find('CardTitle').first();
    expect(title.prop('title')).to.equal('Nice One');
  });

  it('should display the post content', () => {
    const post = { content: 'Nice content' };
    const el = shallow(<Post post={post} />);
    const content = el.find('CardText').first();
    expect(content.children().text()).to.equal('Nice content');
  });

  it('should display saving indicator if saving prop is there', () => {
    const post = { saving: true };
    const el = shallow(<Post post={post} />);
    const title = el.find('CardTitle').first();
    expect(title.prop('subtitle')).to.be.match(/saving/i);
  });
});
