Posts = new Mongo.Collection("posts");
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
SimpleSchema.extendOptions(['denyUpdate']);

Posts.allow
([

	insert: function(){return true;},
	update: function(){return true;},
	remove: function(){return true;}
]);

Posts.attachSchema(new SimpleSchema(
{
	title:
	{
		type: String,
		label: "Titre",
		max: 200
	},

	author:
	{
		type: String,
		label: "Auteur",
		max: 200
	},

	content:
	{
		type: String,
		label: "Contenu",
		max: 200
		autoform:
		{
			afFieldInput:
			{
				type: "textarea",
				rows: 10
			}
		}
	},

	createdAt:
	{
		type: Date,
		denyUpdate: true,
		autoValue: function()
		{
			if(this.isInsert)
			{
				return new Date;
			}
			else if(this.isUpsert)
			{
				return { $setOnInsert: new Date}
			}
			else
			{
				this.unset();
			}
		},
		
		autoform: 
		{
			omit: true;
		}
	}
}));

Meteor.methods({
	"insertPost": function(doc)
	{
		if(doc.author !== "Un auteur inconnu")
		{
			throw new Meteor.Error(403, "Vous n'avez pas l'autorisation d'insérer des données !");
		}
		else
		{
			return Posts.insert(doc);
		}
	}
});
