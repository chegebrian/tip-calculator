import "./App.css";

function App() {
  return (
    <div className="app">
      <Form />
      <DisplayResults />
    </div>
  );
}

function Form() {
  return (
    <form style={{width:"50%"}} className="spacing">
      <div>
        <InputEl id={"bill"} classify={"flex-col"}>
          Bill
        </InputEl>
      </div>
      <div className="margin">
        <label>Select Tip (%)</label>
        <div className="select-tip ">
          <Button classify={"btn"}>5%</Button>
          <Button classify={"btn"}>10%</Button>
          <Button classify={"btn"}>15%</Button>
          <Button classify={"btn"}>25%</Button>
          <Button classify={"btn"}>50%</Button>
          <InputEl placeholder={"Custom"} />
        </div>
      </div>
      <div>
        <InputEl id={"numberOfPeople"} classify={"flex-col"}>
          Number of People
        </InputEl>
      </div>
    </form>
  );
}

function DisplayResults() {
  return (
    <div className="dark-background spacing" style={{width:"50%"}}>
      <Results>Tip Amount</Results>
      <Results>Total</Results>
      <Button classify={"reset-btn"}>Reset</Button>
    </div>
  );
}

function Results({ children }) {
  return (
    <div className="flex margin-bottom">
      <div className="flex-col">
        <p style={{ color: "hsl(189, 41%, 97%)" }}>{children}</p>
        <span style={{ color: "hsl(185, 41%, 84%)" }}>/ person</span>
      </div>
      <span style={{ color: "hsl(172, 67%, 45%)" , fontSize:"1.5em" }}>$0.00</span>
    </div>
  );
}

function InputEl({ children, id, placeholder, classify }) {
  return (
    <div className={classify}>
      <label htmlFor={id}>{children}</label>
      <input id={id} type="number" placeholder={placeholder} />
    </div>
  );
}

function Button({ children, classify }) {
  return <button className={classify}>{children}</button>;
}
export default App;
// Bill

// Select Tip %
// 5%
// 10%
// 15%
// 25%
// 50%
// Custom

// Number of People

// Tip Amount
// / person

// Total
// / person

// Reset
