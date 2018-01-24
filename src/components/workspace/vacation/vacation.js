import React, { Component } from 'react';
import './vacation.css';

import VacationForm from'./vacation-form.js';
import VacationTable from './vacation-table.js';

class Vacation extends Component {
  render() {
    return (
      <div>
        <VacationForm/>
        <VacationTable/>
      </div>
    );
  }
}
export default Vacation;