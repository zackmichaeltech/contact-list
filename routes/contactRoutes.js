const mongoose = require('mongoose');
const requireLogin = require('../middlewares/loginRequired');

const Contactsdb = mongoose.model('Contactsdb');

module.exports = app => {
    app.post('/contactsList', (req, res) => {
        const {name, email, phoneNumber, streetAddress, postalCode, _user}  = req.body;

        const contactsdb = new Contactsdb({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            streetAddress: streetAddress,
            postalCode: postalCode,
            _user: _user
        }).save()
        .then(addedContact => {
            res.json(addedContact);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500).send("We have encountered an error")
        })
    });

    app.get('/contactsList/:id', (req, res) => {
        
        Contactsdb.find({_user: req.params.id})
            .then(contact => {    
                res.json(contact)
            })
            .catch(err => {
                console.log(err)
                res.sendStatus(500).send("We have encountered an issue");
            })
    })
    
    app.delete('/contactsList/:contactId', (req, res) => {
        Contactsdb.findOneAndRemove({ _id: req.params.contactId })
            .then(removedContact => {
                res.json(removedContact);
            })
            .catch(error => {
                res.send(error);
                console.log(error);
            })
    })
    
}

