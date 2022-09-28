import React, { useState } from "react";

import ExpenseList from "./ExpensesList/ExpensesList";
import Card from "../UI/Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expenses;
