import React, { Component } from 'react';
import s from './Contacts.module.css';
import { MdDeleteForever } from '../../../node_modules/react-icons/md';

class Contacts extends Component {
  render() {
    return (
      <ul className={s.ContactsList}>
        {this.props.stateApp.map(({ id, name, number }) => (
          <li className={s.ContactsItem} key={id} id={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button
              className={s.BtnDeletContact}
              type="button"
              onClick={() => this.props.onDeleteContact(id)}
            >
              <span className="">
                <MdDeleteForever />
              </span>
              <span>Delete</span>
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
