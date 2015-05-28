// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {

  },

  // sets the model to the current song that is passed in from from when a song is changed in AppView.js
  setSong: function(song){
    this.model = song;
    this.render();
  },

  // loads the current song into the HTML 5 player
  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  // listens to the 'ended' event broadcasted by the HTML 5 player when a song finishes
  events: {
    // and we execute handleEnded when the 'ended' is broadcasted
    'ended': 'handleEnded',
  },

  // when we receive the 'ended' broadcast, call the 'ended()' method on the Song Model
  handleEnded: function(){
    this.model.ended();
  },

});
