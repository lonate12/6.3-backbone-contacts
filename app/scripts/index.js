var $ = require('jquery');
var models = require('./models/contact-models.js');
var views = require('./views/contact-views.js');

$(function(){
  var contactsCollection = new models.ContactsCollection();









  contactsCollection.add([
    {
      'email': '2020g_man@gmail.com',
      'first-name': 'John',
      'last-name': 'Smith',
      'phone-number': '(864) 999-9999',
    },
    {
      'email': 'whiskey_tango_foxtrot@gmail.com',
      'first-name': 'R. L.',
      'last-name': 'Stein',
      'phone-number': '(864) 999-9999',
    },
    {
      'email': 'omg_wtf@hotmail.com',
      'first-name': 'Amy',
      'last-name': 'Pendergrass',
      'phone-number': '(864) 999-9999',
    }
  ]);

});
