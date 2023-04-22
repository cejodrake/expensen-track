import React from "react";

interface Props {
  expenses: [];
  onDelete(id: number): void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return <p>No expenses Found</p>;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Categories</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <td>Total</td>
        <td>
          $
          {expenses
            .reduce((acc, expense) => expense.amount + acc, 0)
            .toFixed(2)}
        </td>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
