import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Form from "./components/Form";
import ExpenseList from "./expensetracker/components/ExpenseList";
import ExpenseFilter from "./expensetracker/components/ExpenseFilter";
import ExpenseForm from "./expensetracker/components/ExpenseForm";

function App() {
  const [selectCategory, setSelectCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utilities" },

    { id: 2, description: "vv", amount: 10, category: "Utilities" },

    { id: 3, description: "abb", amount: 10, category: "Utilities" },

    { id: 4, description: "cc", amount: 10, category: "Groceries" },
  ]);

  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category == selectCategory)
    : expenses;

  return (
    <div className="container mt-4">
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
