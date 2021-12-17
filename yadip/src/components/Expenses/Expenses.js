import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    return (
    <div>
      <Card className='expenses'>        
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            value={expense.value}            
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;