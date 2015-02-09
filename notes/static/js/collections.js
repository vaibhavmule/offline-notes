// Collections for offline notes app

var App = App || {}

(function(){
	'use strict';

	App.LOCAL_STORAGE_NAME = 'offline-notes';

	var NoteCollection = Backbone.Collection.extend({
		model: App.NoteModel,
		localStorage: new Backbone.localStorage(App.LOCAL_STORAGE_NAME),
	});
	App.notes = new NoteCollection;
})();