export default {
  create({ Meteor, LocalState, FlowRouter }, title, content) {
    if (!title || !content) {
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('posts.create', id, title, content, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
      return null;
    });
    FlowRouter.go(`/post/${id}`);
    return null;
  },

  clearErrors({ LocalState }) {
    return LocalState.set('SAVING_ERROR', null);
  },
};
