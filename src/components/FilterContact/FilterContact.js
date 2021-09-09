import React, { Component } from 'react';
import s from './FilterContact.module.css';
import { AiOutlineSearch } from '../../../node_modules/react-icons/ai';

class FilterContact extends Component {
  render() {
    const { value, onchangeFilter } = this.props;
    return (
      <div className={s.conteiner}>
        <label className={s.FilterLabel}>
          <span className={s.iconFilter}>
            <AiOutlineSearch />
          </span>
          <span className={s.FilterTitle}>Find contacts by name:</span>
          <input
            className={s.inputFilter}
            type="text"
            value={value}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={onchangeFilter}
          />
        </label>
      </div>
    );
  }
}

export default FilterContact;
