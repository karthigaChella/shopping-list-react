import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

import { useState } from 'react';
function ExpenseItem(props) {
const [title , setTitle]= useState(props.title);
const clickHandler = () =>{
  setTitle('updated');
  console.log(title);
};

    return (
      <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
        <h2 >{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Click!</button>
      </Card>
    );
  }
  
  export default ExpenseItem;