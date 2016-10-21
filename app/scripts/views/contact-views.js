window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var $ = require('jquery');
var Backbone = require('backbone');
var contactListTemplate = require('../../templates/contact-list-template.hbs');
var contactHomeTemplate = require('../../templates/contact-list-template.hbs');
var contactFormTemplate = require('../../templates/contact-form-template.hbs');


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
  events: {
    'click': 'toggleShow'
  },
  render: function(){
    var contextObject = this.model.toJSON();
    var renderedContactTemplate = this.template(contextObject);

    this.$el.html(renderedContactTemplate);

    return this;
  },
  toggleShow: function(e){
    e.preventDefault();
    var id = this.model.get('_id');
    this.$el.children('.additional-contact-info').slideToggle();
  }
});

var NewContactForm = Backbone.View.extend({
  tagName: 'form',
  className: 'new-contact-form',
  events: {
    'submit': 'addContact'
  },
  template: contactFormTemplate,
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  addContact: function(e){
    e.preventDefault();
    var newContact = {
      'first-name': $('#first-name').val(),
      'last-name': $('#last-name').val(),
      'email': $('#email').val(),
      'phone-number': $('#phone-number').val()
    };

    this.collection.create(newContact);
    // Then clear form inputes

    $('#first-name').val('');
    $('#last-name').val('');
    $('#email').val('');
    $('#phone-number').val('');
  },
});

module.exports = {
  ContactListView: ContactListView,
  ContactItemView: ContactItemView,
  NewContactForm: NewContactForm
};
