// Models for Notes as per models defined 
// Django app

var App = App || {}

(function() {
    'use strict';

    App.NoteModel = Backbone.model.extends({
        defaults: {
            note: 'emptyNotes'
        },
        idAttribute: 'id'
    });

})();
