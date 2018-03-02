Template.login.events({
	"submit form": function(event, template)
	{
		event.preventDefault();

		var user = $("input[name = 'username']").val();
		var password = $("input[name = 'password']").val();

		Meteor.loginWithPassword({
			username: user
		}, password, function(err){
			if(err)
			{
				alert(err.reason)
			}
		});

		Meteor.loginWithPassword({
			email: user
		}, password, function(err){
			if(err)
			{
				alert(err.reason)
			}
		});

		Meteor.loginWithPassword({
			user,
			password,
			function(err)
			{
				if(err)
				{
					alert(err.reason)
				}
			}
		};
	}
});
