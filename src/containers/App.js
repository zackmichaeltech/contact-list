import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import ContactList from "./contacts/ContactList";
import Aux from '../hoc/Aux/Aux';
import TopNav from "../components/UI/Navigation/NavBar/TopNav";
import Home from "../components/LandingPage/Home";

class App extends Component {
  state = {
    addContactClicked: false
  };

  componentDidMount() {
    //console.log(this.props._user)
    this.props.onFetchUsers();
  }


  render() {

    const contactAdded = props => {
      return <ContactList _user={this.props._user} />;
    };

    const home = props => {
      return <Home />;
    };

    return (
      <Aux>
        <TopNav /> 
         <Route path={"/"} exact component={home} />   
        <Route path={"/contactsList"} component={contactAdded} />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    _user: state.auth._id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
