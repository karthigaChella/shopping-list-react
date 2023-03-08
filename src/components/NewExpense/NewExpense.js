import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{

    const saveExpenseHandler= (expense) => {
        const expenseDate = 
        {
            ...expense,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseDate);
    }
    
 return <div className='new-expense'> 
 <ExpenseForm onSaveExpenseHandler={saveExpenseHandler}/></div>
}
export default NewExpense;