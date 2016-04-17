const { describe, it } = global;
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import NewPost from '../newpost';

chai.use(chaiEnzyme());

describe('core.components.newpost', () => {
  it('should show the error if there are any', () => {
    const error = 'TheError';
    const el = shallow(<NewPost error={error} />);
    expect(el.find('CardTitle').first())
      .to.have.prop('subtitle', error);
  });

  it('should display the create post form', () => {
    const el = shallow(<NewPost />);
    const title = el.find('TextField').at(0);
    const content = el.find('TextField').at(1);
    const form = el.find('form').first();

    expect(title.node.ref).to.be.equal('titleRef');
    expect(content.node.ref).to.be.equal('contentRef');
    expect(form.prop('onSubmit')).to.be.a('function');
  });

  it('should create a new post when click on the button', done => {
    const title = 'the-title';
    const content = 'the-content';

    const onCreate = (t, c) => {
      expect(t).to.be.equal(title);
      expect(c).to.be.equal(content);
      done();
    };

    const el = shallow(<NewPost create={onCreate} />);
    const instance = el.instance();

    instance.refs = {
      titleRef:   { getValue: () => title },
      contentRef: { getValue: () => content },
    };

    el.find('form').simulate('submit');
  });
});
