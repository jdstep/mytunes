// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  // When you click on a song in the Song Queue View window, trigger 'click' to 'handleDequeue'
  events: {
    'click': 'handleDequeue'
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  // When received the 'click' trigger, invoke the song Model's dequeue method
  handleDequeue: function(){
    this.model.dequeue();
  }

});
