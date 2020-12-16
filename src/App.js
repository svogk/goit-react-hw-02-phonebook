import React, { Component } from 'react';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

import contacts from './data/contacts.json';

class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  handleAddNewContact = nameContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, nameContact],
    }));

  handleCheckContact = name => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find(contact => contact.name === name);
    if (isExistContact) {
      alert('Контакт с таким именем уже существует!');
    }
    return !isExistContact;
  };

  handleDeleteContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  handleFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContact();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.handleAddNewContact}
          onCheckContact={this.handleCheckContact}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilter} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
