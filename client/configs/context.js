import * as Collections from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import muiTheme from './muiTheme';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    muiTheme,
    LocalState: new ReactiveDict(),
  };
}
