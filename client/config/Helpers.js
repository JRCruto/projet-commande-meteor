UI.registerHelper('setAuthor', function(){
	return '<b>Un auteur inconnu</b>';
});

UI.registerHelper('getGlobal', function(varName)){
	return Globals[varName];
});
