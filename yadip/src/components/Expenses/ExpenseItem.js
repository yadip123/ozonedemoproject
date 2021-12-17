import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }

    var datavalue = '';
    props.name === 'expiry' ? datavalue = secondsToDhms(props.value) : datavalue =  props.value;
    
  return (
    <Card className='expense-item'>      
      <div className='expense-item__description'>
        <h2>{props.name}</h2>        
        <TextField varient="outlined"  margin="normal" fullwidth="true"  style = {{width: 400}} value={datavalue} />
      </div>
    </Card>
  );
}
export default ExpenseItem;