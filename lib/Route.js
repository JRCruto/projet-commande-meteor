Router.configure({

    layoutTemplate: "mainLayout"

});

Router.route('/post/:_id', {

	name: "post",
	data: function()
	{
		return { id: this.params._id}
	}
});

Router.route('/posts', {

	name: "posts",
	data: function(){
		return {
			posts: [
				{
					title: "Premier Post",
					hide: true
				},
				{
					title: "Second Post",
					hide: false
				},
				{
					title: "Troisième Post",
					hide: false
				},
			]};
	}
});



Router.route('/', {

    name: "home",
	data: function(){
		var posts = Posts.find();
		return { posts: posts};
	},
	waitOn: function()
	{
		return Meteor.subscribe("allPostHeaders");
	}
});

Router.route('/register', {
	
	name: "register",
});

Router.route('/login', {

	name: "login",
});
