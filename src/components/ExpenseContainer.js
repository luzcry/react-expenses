import { Fragment } from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseContainer({expenses}) {
  const loop = expenses.map((expense) =>
  <ExpenseItem
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
  )
  return (
    <Fragment>
     {loop}
    </Fragment>
        );
}


export default ExpenseContainer;

