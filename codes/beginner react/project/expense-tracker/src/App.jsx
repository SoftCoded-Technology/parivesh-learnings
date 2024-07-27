import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ExpensesList from "./componenets/ExpensesList";
import ExpensesFilter from "./componenets/ExpensesFilter";
import ExpensesForm from "./componenets/ExpensesForm";

export const category = ["Expense", "Savings", "Income"];

function App() {
  const [expenses, setexpenses] = useState([
    { id: 1, desc: "Food", amount: 500, category: "Expense" },
    { id: 2, desc: "Transportation", amount: 50, category: "Expense" },
    { id: 3, desc: "Shopping", amount: 200, category: "Expense" },
    { id: 4, desc: "Entertainment", amount: 100, category: "Expense" },
    { id: 5, desc: "Salary", amount: 3000, category: "Income" },
    { id: 6, desc: "Utilities", amount: 150, category: "Expense" },
    { id: 7, desc: "Rent", amount: 1000, category: "Expense" },
    { id: 8, desc: "Healthcare", amount: 300, category: "Expense" },
    { id: 9, desc: "Investment", amount: 800, category: "Savings" },
    { id: 10, desc: "Gifts", amount: 50, category: "Expense" },
    { id: 11, desc: "Food", amount: 500, category: "Expense" },
    { id: 12, desc: "Transportation", amount: 50, category: "Expense" },
    { id: 13, desc: "Shopping", amount: 200, category: "Expense" },
    { id: 14, desc: "Entertainment", amount: 100, category: "Expense" },
    { id: 15, desc: "Salary", amount: 3000, category: "Income" },
    { id: 16, desc: "Utilities", amount: 150, category: "Expense" },
    { id: 17, desc: "Rent", amount: 1000, category: "Expense" },
    { id: 18, desc: "Healthcare", amount: 300, category: "Expense" },
    { id: 19, desc: "Investment", amount: 800, category: "Savings" },
    { id: 20, desc: "Gifts", amount: 50, category: "Expense" },
  ]);

  const [selectedCategory, setselectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handlesubmit = (expense) => {
    setexpenses([
      ...expenses,
      { ...expense, id: expenses.length + 1, amount: parseInt(expense.amount) },
    ]);

    
  };
  return (
    <>
      <ExpensesFilter
        onSelectCategory={(category) => {
          setselectedCategory(category);
        }}
      />
      <ExpensesList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setexpenses(expenses.filter((e) => e.id !== id));
        }}
      />

      <ExpensesForm onSubmit={(data) => handlesubmit(data)} />
    </>
  );
}

export default App;
