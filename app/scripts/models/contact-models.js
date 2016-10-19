var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
  idAttribute: '_id'
});

var ContactsCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/renes-contacts'
});

module.exports = {
  Contact: Contact,
  ContactsCollection: ContactsCollection
};
