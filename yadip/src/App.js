import React from 'react';
import Expenses from './components/Expenses/Expenses';

const DUMMY_DATA = [
  {
    id: '1',
    name: 'account_name',
    value: 'demo',
  },
  {
    id: '2',
    name: 'email',
    value: 'admin@ozone.one',
  },
  {
    id: '3',
    name: 'expiry',
    value: 1622876555,    
  },
];

const App = () => {  
  return (    
   <div>      
      <Expenses items={DUMMY_DATA} />
    </div>
  );
};

export default App;