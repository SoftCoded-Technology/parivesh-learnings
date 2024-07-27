import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ExpensesList = ({ expenses, onDelete }) => {
  return (
    <>
      <table className="table table-bordered table-hover mt-3 text-center w-75 mx-auto">
        <thead>
          <tr>  
            <th>Desc</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

            
          {expenses.map((e) => (
            <tr key={e.id}>
              <td>{e.desc}</td>
              <td>{e.amount}</td>
              <td>{e.category}</td>
              <td>
                <button
                  onClick={() => onDelete(e.id)}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              ${expenses.reduce((acc, e) => acc + e.amount, 0).toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpensesList;
