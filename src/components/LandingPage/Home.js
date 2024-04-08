import React from 'react';
import classes from './Home.css';

const home = (props) => {
    return (
        <div className={classes.Home}>
            <div className={classes.Greeting}>Hey! Thanks for checking out my contacts application</div>
            <div className={classes.LoginNotice}>To continue please login with a Google Account above</div>
            <p  className={classes.Notice}>This is a WIP so there may be some bugs... <br/> if you notice any please email workingonittogetbetter[at]gmail.com</p>

            <img className={classes.React} src={require('../../assets/react-redux.png')} alt="react and redux"/>
            <img className={classes.React} src={require('../../assets/node.png')} alt="react and redux"/>
            <img className={classes.React} src={require('../../assets/mongodb-logo.png')} alt="react and redux"/>
            <img className={classes.React} src={require('../../assets/passport.png')} alt="react and redux"/>
            <img className={classes.React} src={require('../../assets/express.png')} alt="react and redux"/>
        </div>
    )
}
 
export default home;