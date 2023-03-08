import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [title, setTitle]=useState('');
  const [amount, setAmount]=useState('');
  const [date, setDate]=useState('');

  //Alternative
  const [userInput, setUserInput]=useState({
    title: '',
    amount:'',
    date:''
  });

  const titleEventListener = (event) =>{
    setTitle(event.target.value);
    // setUserInput((prevState)=>{
    //   return {
    //     ...prevState,
    //     title: event.target.value
    //   }
    // });
  };

  const amountEventListener = (event) =>{
    setAmount(event.target.value);
  };

  const dateEventListener = (event) =>{
    setDate(event.target.value);
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    console.log("submitted!");
    const expenseData ={
      title: title,
      amount: amount,
      date: new Date(date)
    }
    setTitle('');
    setAmount('');
    setDate('');
    props.onSaveExpenseHandler(expenseData);
  }
  
  

  return (<form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleEventListener} value={title}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountEventListener} value={amount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateEventListener} value={date}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
  </form>);
};
export default ExpenseForm;
