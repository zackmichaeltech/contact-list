const mongoose = require('mongoose');
      Schema   = mongoose.Schema

const contactsSchema = new Schema({

    _user         : { type: String},
    name          : {type: String},
    email         : {type: String},
    phoneNumber   : {type: String},
    streetAddress : {type: String},
    postalCode    : {type: String},

})

const ContactsModel = mongoose.model("Contactsdb", contactsSchema);

module.exports = ContactsModel