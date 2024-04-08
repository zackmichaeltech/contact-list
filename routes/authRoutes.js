const passport       = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
        scope: ['profile', 'email']
        }),    
    );
    
    app.get('/auth/google/callback',
         passport.authenticate('google', { failureRedirect: '/' }),
        (req, res) => {
            //console.log(req.user.id)
            req.session.save
            req.user.save
            res.redirect('/contactsList');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/')
    })
    

    app.get('/api/current_user', (req, res) => {
        req.session.save
        res.send(req.user);
    });
}

