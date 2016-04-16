import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing,
  zIndex,
  fontFamily: 'Poppins, sans-serif',
  palette:    {
    // http://www.material-ui.com/#/customization/colors
    primary1Color:      Colors.blueGrey500,
    primary2Color:      Colors.blueGrey400,
    primary3Color:      Colors.blueGrey300,
    accent1Color:       Colors.orange900,
    accent2Color:       Colors.orange800,
    accent3Color:       Colors.orange700,
    textColor:          Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor:        Colors.white,
    borderColor:        Colors.blueGrey300,
    disabledColor:      ColorManipulator.fade(Colors.blueGrey500, 0.3),
    pickerHeaderColor:  Colors.blueGrey500,
  },
};
