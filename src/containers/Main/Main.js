import React, { Component } from "react";
import AddContactButton from "../../components/UI/Navigation/Button/AddContact";
import Layout from "../../hoc/Layout/Layout";
import ContactModal from "../../components/UI/Modal/ContactModal";
import AddContactsInfo from "../contacts/Contacts";

class Main extends Component {
  state = {
    addContactClicked: false
  };

  addContactHandler = () => {
    this.setState({ addContactClicked: true });
  };

  modalClosedHandler = () => {
    this.setState({ addContactClicked: false });
  };

  render() {

    return (
      <Layout>
        <ContactModal
          show={this.state.addContactClicked}
          closed={this.modalClosedHandler}
        >
          <AddContactsInfo
            closed={this.modalClosedHandler}
            history={this.props.history}
          />
        </ContactModal>
        <AddContactButton addContactInputModalShow={this.addContactHandler} />
      </Layout>
    );
  }
}

export default Main;
