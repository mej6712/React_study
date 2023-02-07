import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: "다이소", amount: 9500, date: "2023.02.04(토)" },
    { title: "GS25", amount: 4500, date: "2023.02.05(일)" },
    { title: "두껍삼", amount: 74200, date: "2023.02.06(월)" },
    { title: "서울갈비", amount: 13000, date: "2023.02.06(월)" },
    { title: "뚜레쥬르", amount: 6700, date: "2023.02.07(화)" },
  ];
  return (
    <>
      <div className="header">
        <div className="container">
          <h1>Expense Items</h1>
        </div>
      </div>
      <div className="container">
        {expense.map((items, index) => (
          <ExpenseItem
            key={index}
            title={items.title}
            amount={items.amount}
            date={items.date}
          />
        ))}
      </div>
    </>
  );
}

export default App;
