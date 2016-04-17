import {
  blueGrey500,
  blueGrey400,
  blueGrey300,
  orange900,
  orange800,
  orange700,
  darkBlack,
  white,
} from 'material-ui/styles/colors';
import {
  fade,
} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';

const rawTheme = {
  spacing,
  zIndex,
  fontFamily: 'Poppins, sans-serif',
  palette:    {
    // http://www.material-ui.com/#/customization/colors
    primary1Color:      blueGrey500,
    primary2Color:      blueGrey400,
    primary3Color:      blueGrey300,
    accent1Color:       orange900,
    accent2Color:       orange800,
    accent3Color:       orange700,
    textColor:          darkBlack,
    alternateTextColor: white,
    canvasColor:        white,
    borderColor:        blueGrey300,
    disabledColor:      fade(blueGrey500, 0.3),
    pickerHeaderColor:  blueGrey500,
  },
};

export default rawTheme;
