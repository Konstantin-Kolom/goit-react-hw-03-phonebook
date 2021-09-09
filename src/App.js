import React, { Component } from 'react';
import shortid from 'shortid';

import Section from './components/Section/Section';
import DataRecordForm from './components/DataRecordForm/DataRecordForm';
import Contacts from './components/Contacts/Contacts';
import FilterContact from './components/FilterContact/FilterContact';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = data => {
    const contact = { id: shortid.generate(data.name), name: data.name, number: data.number };

    if (this.state.contacts.find(el => el.name.toLowerCase() === contact.name.toLowerCase())) {
      return alert(`${contact.name} is alresdy in contacts`);
    } else
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parselContacts = JSON.parse(contacts);
    if (parselContacts) {
      this.setState({ contacts: parselContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const normalizeFilter = this.state.filter.toLowerCase();

    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    return (
      <>
        <Section title="Phonebook">
          <DataRecordForm onFormSubmit={this.formSubmit} />
          <h2>Contacts</h2>
          <FilterContact value={filter} onchangeFilter={this.changeFilter} />
          <Contacts stateApp={visibleContact} onDeleteContact={this.deleteContact} />
        </Section>
      </>
    );
  }
}

export default App;
