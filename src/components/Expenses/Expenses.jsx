import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import "./Expenses.css";

const Expenses = (props) => (
  <Card className="expenses">
    {props.item.map((expense, index) => {
      return (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={index}
        />
      );
    })}
  </Card>
);

export default Expenses;
