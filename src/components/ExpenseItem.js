import React from "react";

const ExpenseItem = ({ title, amount, date }) => {
  //   const expenseDate = new Date();
  //   const weekList = ["일", "월", "화", "수", "목", "금", "토"];

  //   const nowDate = `${expenseDate.getFullYear()}.${
  //     expenseDate.getMonth() + 1
  //   }.${expenseDate.getDate()}(${weekList[expenseDate.getDay()]})`;

  return (
    <div className="expense-item clearfix">
      <div className="expense-itembox">
        <div className="expense-info">
          <h1>{date}</h1>
          <p>{title}</p>
        </div>
        <p className="expense-price">{amount}원</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
