const { describe, it } = global;
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navigation, { NavigationMenu } from '../navigation';

describe('core.components.navigation', () => {
  describe('Navigation component', () => {
    it('should contain a NavigationMenu component', () => {
      const el = shallow(<Navigation />);
      const appBar = el.find('AppBar');
      const iconElementLeft = appBar.prop('iconElementLeft');
      expect(appBar.prop('title')).to.equal('Mantra Voice');
      expect(iconElementLeft.type).to.equal(NavigationMenu);
    });
  });

  describe('NavigationMenu component', () => {
    it('should contain a link to home', () => {
      const el = shallow(<NavigationMenu />);
      const homeLink = el.find('MenuItem').at(0);
      expect(homeLink.prop('primaryText')).to.be.equal('Home');
      expect(homeLink.prop('href')).to.be.equal('/');
      // eslint-disable-next-line no-unused-expressions
      expect(homeLink.prop('linkButton')).to.be.true;
    });

    it('should contain a link to create a new post', () => {
      const el = shallow(<NavigationMenu />);
      const newPostLink = el.find('MenuItem').at(1);
      expect(newPostLink.prop('primaryText')).to.be.equal('New Post');
      expect(newPostLink.prop('href')).to.be.equal('/new-post');
      // eslint-disable-next-line no-unused-expressions
      expect(newPostLink.prop('linkButton')).to.be.true;
    });
  });
});
