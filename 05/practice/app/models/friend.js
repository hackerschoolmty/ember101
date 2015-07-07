import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  email: DS.attr("string"),
  twitter: DS.attr("string"),
  articles: DS.hasMany("article"),

  totalArticles: function(){
    return this.get("articles.length");
  }.property("articles"),

  fullName: function(){
    return this.get("firstName") + " " + this.get("lastName");
  }.property("firstName", "lastName")
});
