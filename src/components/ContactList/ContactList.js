import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default ContactList;
