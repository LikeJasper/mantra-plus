import * as Collections from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import RawTheme from './theme';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    LocalState: new ReactiveDict(),
    muiTheme:   getMuiTheme(RawTheme),
  };
}
