var $ = require('jquery');
var models = require('./models/contact-models.js');
var views = require('./views/contact-views.js');

$(function(){
  var contactsCollection = new models.ContactsCollection();

  var myContactList = new views.ContactListView({collection: contactsCollection});
  $('.contact-list-container').append(myContactList.render().el);

  var newContactForm = new views.NewContactForm({collection: contactsCollection});
  $('.new-contact-form-container').append(newContactForm.render().el);








  contactsCollection.fetch();

});
