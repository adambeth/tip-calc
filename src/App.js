import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [ownTip, setOwnTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <>
      <p>Tip Calculator</p>
      <TotalAmount amount={amount} onChange={setAmount} />
      <TipSelector onChange={setOwnTip}>
        How did you like your service?
      </TipSelector>
      <TipSelector onChange={setFriendTip}>
        How did your friend like your service?
      </TipSelector>
      <TotalDisplay amount={amount} ownTip={ownTip} friendTip={friendTip} />
    </>
  );
}

export default App;

function TotalDisplay({ amount, ownTip, friendTip }) {
  let tipAverage = ((ownTip + friendTip) / 2).toFixed(2);
  let tip = amount * tipAverage;
  return (
    <>
      <h1>
        You pay {amount + tip} (${amount} + ${tip} tip){" "}
      </h1>
    </>
  );
}
function TipSelector({ children, onChange }) {
  function handleOnChange(e) {
    onChange(+e.target.value);
  }

  return (
    <>
      <div className="input-container">
        <p>{children}</p>
        <select onChange={(e) => handleOnChange(e)}>
          <option value="0">Dissatisfied (0%)</option>
          <option value="0.05">It was Ok (5%)</option>
          <option value="0.10">It was good (10%)</option>
          <option value="0.20">Excellent (20%)</option>
        </select>
      </div>
    </>
  );
}

function TotalAmount({ amount, onChange }) {
  function handleOnChange(e) {
    onChange(+e.target.value);
  }
  return (
    <>
      <div className="input-container">
        <p>Total Bill Amount</p>
        <input
          type="text"
          placeholder="Total Bill Amount"
          onChange={(e) => handleOnChange(e)}
        ></input>
      </div>
    </>
  );
}
