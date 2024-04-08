import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [lunchCredit, setLunchCredit] = useState(0)
  const [lunchCash, setLunchCash] = useState(0)
  const [lunchKitchenTip, setLunchKitchenTip] = useState(0)

  const [dinnerCredit, setDinnerCredit] = useState(0)
  const [dinnerCash, setDinnerCash] = useState(0)
  const [dinnerKitchenTip, setDinnerKitchenTip] = useState(0)

  const [lunchTotal, setLunchTotal] = useState(0)
  const [dinnerTotal, setDinnerTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [totalKitchenTip, setTotalKitchenTip] = useState(0)

  const getValue = (e) => {
    if (e.target.name == "lunchCredit") {
      setLunchCredit(parseFloat(e.target.value))
    } else if (e.target.name == "lunchCash") {
      setLunchCash(parseFloat(e.target.value))
    } else if (e.target.name == "dinnerCredit") {
      setDinnerCredit(parseFloat(e.target.value))
    } else if (e.target.name == "dinnerCash") {
      setDinnerCash(parseFloat(e.target.value))
    }
  }

  const calculateLunchTotal = () => {
    setLunchTotal(Number(lunchCredit + lunchCash))
  }
  useEffect(calculateLunchTotal, [lunchCredit, lunchCash])

  const calculateDinnerTotal = () => {
    setDinnerTotal(Number(dinnerCredit + dinnerCash))
  }
  useEffect(calculateDinnerTotal, [dinnerCredit, dinnerCash])

  const calculateTotal = () => {
    setTotal(Number(lunchTotal + dinnerTotal).toFixed(2))
  }
  useEffect(calculateTotal, [lunchTotal, dinnerTotal])

  const calculateKitchenTip = () => {
    const lunchTemp = Math.round(.05 * lunchTotal)
    setLunchKitchenTip(lunchTemp)
    const dinnerTemp = Math.round(.05 * dinnerTotal)
    setDinnerKitchenTip(dinnerTemp)
  }

  useEffect(calculateKitchenTip, [lunchTotal, dinnerTotal])

  useEffect(() => {
    setTotalKitchenTip(lunchKitchenTip + dinnerKitchenTip)
  }, [lunchKitchenTip, dinnerKitchenTip])

  const [worker1LunchPercent, setWorker1LunchPercent] = useState(1)
  const [worker2LunchPercent, setWorker2LunchPercent] = useState(1)
  const [worker3LunchPercent, setWorker3LunchPercent] = useState(1)

  const setLunchWorkerPercent = (e) => {
    if (e.target.name == "worker1") {
      setWorker1LunchPercent(Number(e.target.value)/100)
    } else if (e.target.name == "worker2") {
      setWorker2LunchPercent(Number(e.target.value)/100)
    }
  }

  const [worker1LunchCredit, setWorker1LunchCredit] = useState()
  const [worker2LunchCredit, setWorker2LunchCredit] = useState()
  const [worker3LunchCredit, setWorker3LunchCredit] = useState()
  
  console.log("worker percents" + worker1LunchPercent, worker2LunchPercent, worker3LunchPercent)
  
  const calculateLunchCreditDistribution = () => {
    const tempLunchCredit = lunchCredit / 3
    
    const p1 = (tempLunchCredit)*worker1LunchPercent
    const p2 = (tempLunchCredit)*worker2LunchPercent
    const p3 = (tempLunchCredit)*worker3LunchPercent

    let sump = 0
    let count = 0

    const arr2 = [p1, p2, p3]
    for (let i = 0; i < arr2.length; i ++) {
      if (arr2[i] < tempLunchCredit) {
        sump += arr2[i]
      } else {
        count += 1
      }
    }

    const fullPercent = (lunchCredit - (sump))/count

    if (worker1LunchPercent == 1) {
      setWorker1LunchCredit(fullPercent.toFixed(2))
    } else {
      setWorker1LunchCredit(p1.toFixed(2))
    }
    if (worker2LunchPercent == 1) {
      setWorker2LunchCredit(fullPercent.toFixed(2))
    } else {
      setWorker2LunchCredit(p2.toFixed(2))
    }
    setWorker3LunchCredit(fullPercent.toFixed(2))

  }
  useEffect(calculateLunchCreditDistribution, [lunchCredit, worker1LunchPercent, worker2LunchPercent, worker3LunchPercent])

  const [worker1DinnerPercent, setWorker1DinnerPercent] = useState(1)
  const [worker2DinnerPercent, setWorker2DinnerPercent] = useState(1)
  const [worker3DinnerPercent, setWorker3DinnerPercent] = useState(1)
  const [worker4DinnerPercent, setWorker4DinnerPercent] = useState(1)

  const setDinnerWorkerPercent = (e) => {
    if (e.target.name == "worker1") {
      setWorker1DinnerPercent(Number(e.target.value)/100)
    } else if (e.target.name == "worker2") {
      setWorker2DinnerPercent(Number(e.target.value)/100)
    } else if (e.target.name == "worker3") {
      setWorker3DinnerPercent(Number(e.target.value)/100)
    }
  }

  const [worker1DinnerCredit, setWorker1DinnerCredit] = useState()
  const [worker2DinnerCredit, setWorker2DinnerCredit] = useState()
  const [worker3DinnerCredit, setWorker3DinnerCredit] = useState()
  const [worker4DinnerCredit, setWorker4DinnerCredit] = useState()

  const calculateDinnerCreditDistribution = () => {
    const tempDinnerCredit = dinnerCredit / 4
    
    const p1 = (tempDinnerCredit)*worker1DinnerPercent
    const p2 = (tempDinnerCredit)*worker2DinnerPercent
    const p3 = (tempDinnerCredit)*worker3DinnerPercent
    const p4 = (tempDinnerCredit)*worker4DinnerPercent

    let sump = 0
    let count = 0

    const arr2 = [p1, p2, p3, p4]
    for (let i = 0; i < arr2.length; i ++) {
      if (arr2[i] < tempDinnerCredit) {
        sump += arr2[i]
      } else {
        count += 1
      }
    }

    const fullPercent = (dinnerCredit - (sump))/count

    if (worker1DinnerPercent == 1) {
      setWorker1DinnerCredit(fullPercent.toFixed(2))
    } else {
      setWorker1DinnerCredit(p1.toFixed(2))
    }
    if (worker2DinnerPercent == 1) {
      setWorker2DinnerCredit(fullPercent.toFixed(2))
    } else {
      setWorker2DinnerCredit(p2.toFixed(2))
    }
    if (worker3DinnerPercent == 1) {
      setWorker3DinnerCredit(fullPercent.toFixed(2))
    } else {
      setWorker3DinnerCredit(p3.toFixed(2))
    }
    setWorker4DinnerCredit(fullPercent.toFixed(2))
  }
  useEffect(calculateDinnerCreditDistribution, [dinnerCredit, worker1DinnerPercent, worker2DinnerPercent, worker3DinnerPercent, worker4DinnerPercent])

  const [worker1LunchCash, setWorker1LunchCash] = useState(0)
  const [worker2LunchCash, setWorker2LunchCash] = useState(0)
  const [worker3LunchCash, setWorker3LunchCash] = useState(0)
  const [lunchCashRemainder, setLunchCashRemainder] = useState(0)

  const calculateLunchCashDistribution = () => {
    const tempLunchCashAfterKitchen = (lunchCash - lunchKitchenTip)
    const tempLunchCashAfterKitchenPerPerson = tempLunchCashAfterKitchen/3

    const p1 = worker1LunchPercent*tempLunchCashAfterKitchenPerPerson
    const p2 = worker2LunchPercent*tempLunchCashAfterKitchenPerPerson
    const p3 = worker3LunchPercent*tempLunchCashAfterKitchenPerPerson

    let sump = 0
    let count = 0

    const arr2 = [p1, p2, p3]
    for (let i = 0; i < arr2.length; i ++) {
      if (arr2[i] < tempLunchCashAfterKitchenPerPerson) {
        sump += arr2[i]
      } else {
        count += 1
      }
    }

    const fullPercent = (tempLunchCashAfterKitchen - (sump))/count

    if (worker1LunchPercent == 1) {
      setWorker1LunchCash(Math.floor(fullPercent))
    } else {
      setWorker1LunchCash(p1.toFixed())
    }
    if (worker2LunchPercent == 1) {
      setWorker2LunchCash(Math.floor(fullPercent))
    } else {
      setWorker2LunchCash(p2.toFixed())
    }
    setWorker3LunchCash(Math.floor(fullPercent))
  }
  useEffect(calculateLunchCashDistribution, [lunchCash, lunchKitchenTip, worker1LunchPercent, worker2LunchPercent, worker3LunchPercent])

  const [worker1DinnerCash, setWorker1DinnerCash] = useState(0)
  const [worker2DinnerCash, setWorker2DinnerCash] = useState(0)
  const [worker3DinnerCash, setWorker3DinnerCash] = useState(0)
  const [worker4DinnerCash, setWorker4DinnerCash] = useState(0)
  const [dinnerCashRemainder, setDinnerCashRemainder] = useState(0)

  const calculateDinnerCashDistribution = () => {
    const tempDinnerCashAfterKitchen = (dinnerCash - dinnerKitchenTip)
    const tempDinnerCashAfterKitchenPerPerson = tempDinnerCashAfterKitchen/4
    console.log("dinner cash after kitchen" + tempDinnerCashAfterKitchen)

    const p1 = worker1DinnerPercent*tempDinnerCashAfterKitchenPerPerson
    const p2 = worker2DinnerPercent*tempDinnerCashAfterKitchenPerPerson
    const p3 = worker3DinnerPercent*tempDinnerCashAfterKitchenPerPerson
    const p4 = worker4DinnerPercent*tempDinnerCashAfterKitchenPerPerson
    console.log("p1, p2, p3, p4" + p1, p2, p3, p4)

    let sump = 0
    let count = 0

    const arr2 = [p1, p2, p3, p4]
    for (let i = 0; i < arr2.length; i ++) {
      if (arr2[i] < tempDinnerCashAfterKitchenPerPerson) {
        sump += arr2[i]
      } else {
        count += 1
      }
    }

    const fullPercent = (tempDinnerCashAfterKitchen - (sump))/count

    if (worker1DinnerPercent == 1) {
      setWorker1DinnerCash(Math.floor(fullPercent))
    } else {
      setWorker1DinnerCash(p1.toFixed())
    }
    if (worker2DinnerPercent == 1) {
      setWorker2DinnerCash(Math.floor(fullPercent))
    } else {
      setWorker2DinnerCash(p2.toFixed())
    }
    if (worker3DinnerPercent == 1) {
      setWorker3DinnerCash(Math.floor(fullPercent))
    } else {
      setWorker3DinnerCash(p3.toFixed())
    }
    setWorker4DinnerCash(Math.floor(fullPercent))
  }
  useEffect(calculateDinnerCashDistribution, [dinnerCash, dinnerKitchenTip, worker1DinnerPercent, worker2DinnerPercent, worker3DinnerPercent, worker4DinnerPercent])

  const calculateRemainders = () => {
    setLunchCashRemainder((Number(lunchCash) - Number(lunchKitchenTip)) - (Number(worker1LunchCash) + Number(worker2LunchCash) + Number(worker3LunchCash)))
    setDinnerCashRemainder((Number(dinnerCash) - Number(dinnerKitchenTip)) - (Number(worker1DinnerCash) + Number(worker2DinnerCash) + Number(worker3DinnerCash) + Number(worker4DinnerCash)))
  }
  useEffect(calculateRemainders, [lunchCash, dinnerCash, worker1LunchCash, worker1DinnerCash, worker2LunchCash, worker2DinnerCash, worker3LunchCash, worker3DinnerCash, worker4DinnerCash, dinnerKitchenTip, lunchKitchenTip])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Nerd Land</h1>

          <div className="first-part">
            <div className="money-input">
              <div>
                <h3>Lunch</h3>
                <input type="number" mode="numeric" placeholder="Lunch Credit" name="lunchCredit" onChange={getValue}></input>
                <input type="number" mode="numeric" placeholder="Lunch Cash" name="lunchCash" onChange={getValue}></input>
                <p>Lunch Total: ${lunchTotal}</p>
              </div>
              <div>
                <h3>Dinner</h3>
                <input type="number" mode="numeric" placeholder="Dinner Credit" name="dinnerCredit" onChange={getValue}></input>
                <input type="number" mode="numeric" placeholder="Dinner Cash" name="dinnerCash" onChange={getValue}></input>
                <p>Dinner Total: ${dinnerTotal}</p>
              </div>
            </div>
            <p>Lunch + Dinner Total: ${total}</p>
          </div>
          
          <div className="kitchen-tip">
            <h3>Kitchen Tip</h3>
            <div>
              <p>Lunch Kitchen Tip: ${lunchKitchenTip}</p>
              <p>Dinner Kitchen Tip: ${dinnerKitchenTip}</p>
              <p>Total Kitchen Tip: ${totalKitchenTip}</p>
            </div>
          </div>

          <div className="worker-percent">
            <div className="lunch-percent">
              <h3>Lunch</h3>
              <input type="number" mode="numeric" placeholder="Worker 1 %" name="worker1" onChange={setLunchWorkerPercent} ></input>
              <input type="number" mode="numeric" placeholder="Worker 2 %" name="worker2" onChange={setLunchWorkerPercent}></input>
              <div className="tip-results">
                <div className="tip-results-specific">
                  <h4>Credit</h4>
                  <p>{worker1LunchPercent*100}%: ${worker1LunchCredit}</p>
                  <p>{worker2LunchPercent*100}%: ${worker2LunchCredit}</p>
                  <p>{worker3LunchPercent*100}%: ${worker3LunchCredit}</p>
                </div>
                <div className="tip-results-specific">
                  <h4>Cash</h4>
                  <p>{worker1LunchPercent*100}%: ${worker1LunchCash}</p>
                  <p>{worker2LunchPercent*100}%: ${worker2LunchCash}</p>
                  <p>{worker3LunchPercent*100}%: ${worker3LunchCash}</p>
                </div>
                <div className="tip-results-specific">
                  <h4>Total</h4>
                  <p>{worker1LunchPercent*100}%: ${(Number(worker1LunchCash) + Number(worker1LunchCredit)).toFixed(2)}</p>
                  <p>{worker2LunchPercent*100}%: ${(Number(worker2LunchCash) + Number(worker2LunchCredit)).toFixed(2)}</p>
                  <p>{worker3LunchPercent*100}%: ${(Number(worker3LunchCash) + Number(worker3LunchCredit)).toFixed(2)}</p>
                </div>
              </div>
              <p>Winnerz: ${lunchCashRemainder}</p>
            </div>
            <div className="dinner-percent">
              <h3>Dinner</h3>
              <input type="number" mode="numeric" placeholder="Worker 1 %" name="worker1" className="dinner-input" onChange={setDinnerWorkerPercent}></input>
              <input type="number" mode="numeric" placeholder="Worker 2 %" name="worker2" className="dinner-input" onChange={setDinnerWorkerPercent}></input>
              <input type="number" mode="numeric" placeholder="Worker 3 %" name="worker3" className="dinner-input" onChange={setDinnerWorkerPercent}></input>
              <div className="tip-results">
                <div className="tip-results-specific">
                  <h4>Credit</h4>
                  <p>{worker1DinnerPercent*100}%: ${worker1DinnerCredit}</p>
                  <p>{worker2DinnerPercent*100}%: ${worker2DinnerCredit}</p>
                  <p>{worker3DinnerPercent*100}%: ${worker3DinnerCredit}</p>
                  <p>{worker4DinnerPercent*100}%: ${worker4DinnerCredit}</p>
                </div>
                <div className="tip-results-specific">
                  <h4>Cash</h4>
                  <p>{worker1DinnerPercent*100}%: ${worker1DinnerCash}</p>
                  <p>{worker2DinnerPercent*100}%: ${worker2DinnerCash}</p>
                  <p>{worker3DinnerPercent*100}%: ${worker3DinnerCash}</p>
                  <p>{worker4DinnerPercent*100}%: ${worker4DinnerCash}</p>
                </div>
                <div className="tip-results-specific">
                  <h4>Total</h4>
                  <p>{worker1DinnerPercent*100}%: ${Number(worker1DinnerCash) + Number(worker1DinnerCredit)}</p>
                  <p>{worker2DinnerPercent*100}%: ${Number(worker2DinnerCash) + Number(worker2DinnerCredit)}</p>
                  <p>{worker3DinnerPercent*100}%: ${Number(worker3DinnerCash) + Number(worker3DinnerCredit)}</p>
                  <p>{worker4DinnerPercent*100}%: ${Number(worker4DinnerCash) + Number(worker4DinnerCredit)}</p>
                </div>
              </div>
              <p>Winnerz: ${dinnerCashRemainder}</p>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
