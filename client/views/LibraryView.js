// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    // append the Library table header
    this.$el.html('<th>Library</th>').append(
      // map over the Songs Collection
      this.collection.map(function(song){
        // create New LibraryEntryView for each Song Model and invoke it's render method.
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
