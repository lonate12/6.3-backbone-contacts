window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var Backbone = require('backbone');
var contactListTemplate = require('../../templates/contact-list-template.hbs');
var contactHomeTemplate = require('../../templates/contact-list-template.hbs');


var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'contact-list col-md-6 list-group',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderContactItem);
  },
  renderContactItem: function(contact){
    var contactItem = new ContactItemView({model: contact});
    this.$el.append(contactItem.render().el);
  }
});

var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: contactListTemplate,
  render: function(){
    var contextObject = this.model.toJSON();
    var renderedContactTemplate = this.template(contextObject);

    this.$el.html(renderedContactTemplate);

    return this;
  },
});

module.exports = {
  ContactListView: ContactListView,
  ContactItemView: ContactItemView
};
