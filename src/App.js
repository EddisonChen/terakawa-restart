import cat from './images/cat.png'
import fish from './images/fish-border-transparent-highres.png'
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [lunchCredit, setLunchCredit] = useState(0)
  const [lunchCash, setLunchCash] = useState(0)
  const [lunchSnackpass, setLunchSnackpass] = useState(0)
  const [lunchDoordash, setLunchDoordash] = useState(0)
  const [lunchCreditSnackpassDoordash, setLunchCreditSnackpassDoordash] = useState(0)
  const [lunchKitchenTip, setLunchKitchenTip] = useState(0)
  const [lunchTotal, setLunchTotal] = useState(0)

  const [dinnerCredit, setDinnerCredit] = useState(0)
  const [dinnerCash, setDinnerCash] = useState(0)
  const [dinnerSnackpass, setDinnerSnackpass] = useState(0)
  const [dinnerDoordash, setDinnerDoordash] = useState(0)
  const [dinnerCreditSnackpassDoordash, setDinnerCreditSnackpassDoordash] = useState(0)
  const [dinnerKitchenTip, setDinnerKitchenTip] = useState(0)
  const [dinnerTotal, setDinnerTotal] = useState(0)

  const [total, setTotal] = useState(0)
  const [totalKitchenTip, setTotalKitchenTip] = useState(0)

  const [worker1DinnerCash, setWorker1DinnerCash] = useState(0)
  const [worker2DinnerCash, setWorker2DinnerCash] = useState(0)
  const [worker3DinnerCash, setWorker3DinnerCash] = useState(0)
  const [worker4DinnerCash, setWorker4DinnerCash] = useState(0)
  const [dinnerCashRemainder, setDinnerCashRemainder] = useState(0)

  const [worker1LunchPercent, setWorker1LunchPercent] = useState(1)
  const [worker2LunchPercent, setWorker2LunchPercent] = useState(1)
  const [worker3LunchPercent, setWorker3LunchPercent] = useState(1)

  const [worker1LunchCredit, setWorker1LunchCredit] = useState()
  const [worker2LunchCredit, setWorker2LunchCredit] = useState()
  const [worker3LunchCredit, setWorker3LunchCredit] = useState()

  const [worker1DinnerPercent, setWorker1DinnerPercent] = useState(1)
  const [worker2DinnerPercent, setWorker2DinnerPercent] = useState(1)
  const [worker3DinnerPercent, setWorker3DinnerPercent] = useState(1)
  const [worker4DinnerPercent, setWorker4DinnerPercent] = useState(1)
  
  const [worker1DinnerCredit, setWorker1DinnerCredit] = useState()
  const [worker2DinnerCredit, setWorker2DinnerCredit] = useState()
  const [worker3DinnerCredit, setWorker3DinnerCredit] = useState()
  const [worker4DinnerCredit, setWorker4DinnerCredit] = useState()

  const [worker1LunchCash, setWorker1LunchCash] = useState(0)
  const [worker2LunchCash, setWorker2LunchCash] = useState(0)
  const [worker3LunchCash, setWorker3LunchCash] = useState(0)
  const [lunchCashRemainder, setLunchCashRemainder] = useState(0)

  const getValue = (e) => {
    if (e.target.name == "lunchCredit") {
      if (e.target.value == "") {
        setLunchCredit(0)
      } else {
        setLunchCredit(parseFloat(e.target.value))
      }
    } else if (e.target.name == "lunchCash") {
        if (e.target.value == "") {
          setLunchCash(0)
        } else {
          setLunchCash(parseFloat(e.target.value))
        }
    } else if (e.target.name == "lunchSnackpass") {
        if (e.target.value == "") {
          setLunchSnackpass(0)
        } else {
          setLunchSnackpass(parseFloat(e.target.value))
        }
    } else if (e.target.name == "lunchDoordash") {
        if (e.target.value == "") {
          setLunchDoordash(0)
        } else {
          setLunchDoordash(parseFloat(e.target.value))
        }
    } else if (e.target.name == "dinnerCredit") {
        if (e.target.value == "") {
          setDinnerCredit(0)
        } else {
          setDinnerCredit(parseFloat(e.target.value))
        }
    } else if (e.target.name == "dinnerCash") {
        if (e.target.value == "") {
          setDinnerCash(0)
        } else {
          setDinnerCash(parseFloat(e.target.value))
        }
    } else if (e.target.name == "dinnerSnackpass") {
        if (e.target.value == "") {
          setDinnerSnackpass(0)
        } else {
          setDinnerSnackpass(parseFloat(e.target.value))
        }
    } else if (e.target.name == "dinnerDoordash") {
        if (e.target.value == "") {
          setDinnerDoordash(0)
        } else {
          setDinnerDoordash(parseFloat(e.target.value))
        }
    }
  }

  const calculateLunchCreditSnackpassDoordash = () => {
    setLunchCreditSnackpassDoordash(Number((lunchCredit + lunchSnackpass + lunchDoordash).toFixed(2)))
  }
  useEffect(calculateLunchCreditSnackpassDoordash, [lunchCredit, lunchSnackpass, lunchDoordash])

  const calculateDinnerCreditSnackpassDoordash = () => {
    setDinnerCreditSnackpassDoordash(Number((dinnerCredit + dinnerSnackpass + dinnerDoordash).toFixed(2)))
  }
  useEffect(calculateDinnerCreditSnackpassDoordash, [dinnerCredit, dinnerSnackpass, dinnerDoordash])

  const calculateLunchTotal = () => {
    setLunchTotal(Number((lunchCreditSnackpassDoordash + lunchCash).toFixed(2)))
  }
  useEffect(calculateLunchTotal, [lunchCreditSnackpassDoordash, lunchCash])

  const calculateDinnerTotal = () => {
    setDinnerTotal(Number((dinnerCreditSnackpassDoordash + dinnerCash).toFixed(2)))
  }
  useEffect(calculateDinnerTotal, [dinnerCreditSnackpassDoordash, dinnerCash])

  const calculateTotal = () => {
    setTotal(Number((lunchTotal + dinnerTotal).toFixed(2)))
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

  const setLunchWorkerPercent = (e) => {
    if (e.target.name == "worker1") {
      if (e.target.value == "") {
        setWorker1LunchPercent(1)
      } else {
        setWorker1LunchPercent(Number(e.target.value)/100)
      }
    } else if (e.target.name == "worker2") {
        if (e.target.value == "") {
          setWorker2LunchPercent(1)
        } else {
          setWorker2LunchPercent(Number(e.target.value)/100)
        }
    }
  }
  
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

  const setDinnerWorkerPercent = (e) => {
    if (e.target.name == "worker1") {
      if (e.target.value == "") {
        setWorker1DinnerPercent(1)
      } else {
        setWorker1DinnerPercent(Number(e.target.value)/100)
      }
    } else if (e.target.name == "worker2") {
        if (e.target.value == "") {
          setWorker2DinnerPercent(1)
        } else {
          setWorker2DinnerPercent(Number(e.target.value)/100)
        }
    } else if (e.target.name == "worker3") {
      if (e.target.value == "") {
        setWorker3DinnerPercent(1)
      } else {
        setWorker3DinnerPercent(Number(e.target.value)/100)
      }
    }
  }

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

    if (lunchCash !== 0) {
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
  }
  useEffect(calculateLunchCashDistribution, [lunchCash, lunchKitchenTip, worker1LunchPercent, worker2LunchPercent, worker3LunchPercent])

  const calculateDinnerCashDistribution = () => {
    const tempDinnerCashAfterKitchen = (dinnerCash - dinnerKitchenTip)
    const tempDinnerCashAfterKitchenPerPerson = tempDinnerCashAfterKitchen/4

    const p1 = worker1DinnerPercent*tempDinnerCashAfterKitchenPerPerson
    const p2 = worker2DinnerPercent*tempDinnerCashAfterKitchenPerPerson
    const p3 = worker3DinnerPercent*tempDinnerCashAfterKitchenPerPerson
    const p4 = worker4DinnerPercent*tempDinnerCashAfterKitchenPerPerson

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

    if (dinnerCash !== 0) {
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
  }
  useEffect(calculateDinnerCashDistribution, [dinnerCash, dinnerKitchenTip, worker1DinnerPercent, worker2DinnerPercent, worker3DinnerPercent, worker4DinnerPercent])

  const calculateRemainders = () => {
    setLunchCashRemainder((Number(lunchCash) - Number(lunchKitchenTip) - Number(worker1LunchCash) - Number(worker2LunchCash) - Number(worker3LunchCash)).toFixed())
    setDinnerCashRemainder((Number(dinnerCash) - Number(dinnerKitchenTip) - Number(worker1DinnerCash) - Number(worker2DinnerCash) - Number(worker3DinnerCash) - Number(worker4DinnerCash)).toFixed())
  }
  useEffect(calculateRemainders, [lunchCash, dinnerCash, worker1LunchCash, worker1DinnerCash, worker2LunchCash, worker2DinnerCash, worker3LunchCash, worker3DinnerCash, worker4DinnerCash, dinnerKitchenTip, lunchKitchenTip])

  const divideRemainder = () => {
    const lunchPercentages = [worker1LunchPercent, worker2LunchPercent, worker3LunchPercent]
    let lunchCount = 0
    for  (let i = 0; i < lunchPercentages.length; i ++) {
      if (lunchPercentages[i] == 1) {
        lunchCount ++
      }
    }
    if (lunchCashRemainder > 0 && lunchCashRemainder % lunchCount == 0) {
      console.log("lunch remainder running")
      console.log(lunchCashRemainder, lunchCount)
      const dividedAmount = lunchCashRemainder / lunchCount
      if (worker1LunchPercent == 1) {
        setWorker1LunchCash(worker1LunchCash + dividedAmount)
      }
      if (worker2LunchPercent == 1) {
        setWorker2LunchCash(worker2LunchCash + dividedAmount)
      }
      if (worker3LunchPercent == 1) {
        setWorker3LunchCash(worker3LunchCash + dividedAmount)
      }
      setLunchCashRemainder(0)
    }

    const dinnerPercentages = [worker1DinnerPercent, worker2DinnerPercent, worker3DinnerPercent, worker4DinnerPercent]
    let dinnerCount = 0
    for  (let i = 0; i < dinnerPercentages.length; i ++) {
      if (dinnerPercentages[i] == 1) {
        dinnerCount ++
      }
    }

    if (dinnerCashRemainder > 0 && dinnerCashRemainder % dinnerCount == 0) {
      console.log("dinner remainder running")
      console.log(dinnerCashRemainder, dinnerCount)
      const dividedAmount = dinnerCashRemainder / dinnerCount
      if (worker1DinnerPercent == 1) {
        setWorker1DinnerCash(worker1DinnerCash + dividedAmount)
      }
      if (worker2DinnerPercent == 1) {
        setWorker2DinnerCash(worker2DinnerCash + dividedAmount)
      }
      if (worker3DinnerPercent == 1) {
        setWorker3DinnerCash(worker3DinnerCash + dividedAmount)
      }
      if (worker4DinnerPercent == 1) {
        setWorker4DinnerCash(worker4DinnerCash + dividedAmount)
      }
      setDinnerCashRemainder(0)
    }
  }
  useEffect(divideRemainder, [worker1LunchPercent, worker2LunchPercent, worker3LunchPercent, worker1DinnerPercent, worker2DinnerPercent, worker3DinnerPercent, worker4DinnerPercent, lunchCashRemainder, dinnerCashRemainder])

  return (
    <div className="App">
      <header className="App-header"><title>Terakawa Math</title></header>
        <article>
          <div className="heading-line">
            <h1>TawaTawa Mafs</h1>
            <img src={cat} className="cat-image" alt="cat"/>
          </div>
          <div className="titles">
              <h2 className="title">Lunch</h2>
              <h2 className="title">Dinner</h2>
            </div>
          <div className="inputs">
            
            <div className="input-labels">
              <h3>Credit Tip</h3>
              <h3>Snackpass</h3>
              <h3>Doordash</h3>
              <h3>Cash Tip</h3>
            </div>
            <div className="lunch-inputs">
              <input type="number" mode="numeric" placeholder="Lunch Credit" name="lunchCredit" onChange={getValue}></input>
              <input type="number" mode="numeric" placeholder="Lunch Snackpass" name="lunchSnackpass" onChange={getValue}></input>
              <input type="number" mode="numeric" placeholder="Lunch Doordash" name="lunchDoordash" onChange={getValue}></input>
              <input type="number" mode="numeric" placeholder="Lunch Cash" name="lunchCash" onChange={getValue}></input>
            </div>
            <div className="dinner-inputs">
              <input type="number" mode="numeric" placeholder="Dinner Credit" name="dinnerCredit" onChange={getValue}></input>
              <input type="number" mode="numeric" placeholder="Dinner Snackpass" name="dinnerSnackpass" onChange={getValue}></input>
              <input type="number" mode="numeric" placeholder="Dinner Doordash" name="dinnerDoordash" onChange={getValue}></input>
              <input type="number" mode="numeric" placeholder="Dinner Cash" name="dinnerCash" onChange={getValue}></input>
            </div>
          </div>

          <div className="results">
            <div className="result-label">
              <h3 className="result">CC + DEL: </h3>
              <h3 className="result">Tip Total: </h3>
            </div>
            <div className="lunch-results">
              <p className="result">${lunchCreditSnackpassDoordash}</p>
              <p className="result">${lunchTotal}</p>
            </div >
            <div className="dinner-results">
              <p className="result">${dinnerCreditSnackpassDoordash}</p>
              <p className="result">${dinnerTotal}</p>
            </div>
          </div>

          <div className="section-splitter">
            <p className="lunch-dinner-credit-total">Lunch + Dinner Credit Total: ${(lunchCredit + dinnerCredit).toFixed(2)}</p>
          </div>

          <div className="fish-border-container">
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
          </div>
          
          <div>
            <h3 className="kitchen-tip-header">Kitchen Tip</h3>
          </div>
          <div className="kitchen-tip-container">
            <div className="kitchen-tip-subcontainer">
              <p>Lunch: ${lunchKitchenTip}</p>
              <p>Dinner: ${dinnerKitchenTip}</p>
            </div>
            <div className="kitchen-tip-subcontainer">
              <p>Remaining: ${(lunchCash - lunchKitchenTip).toFixed()}</p>
              <p>Remaining: ${(dinnerCash - dinnerKitchenTip).toFixed()}</p>
            </div>
          </div>
          <div className="section-splitter">
            <p className="kitchen-tip-footer">Total Kitchen Tip: ${totalKitchenTip}</p>
          </div>

          <div className="fish-border-container">
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
          </div>

          <div className="section-splitter">
            <h3 className="percentage-header">Lunch Servers</h3>
          </div>
          <div className = "percentage-inputs">
            <input type="number" className="percent-input" mode="numeric" placeholder="Worker 1 %" name="worker1" onChange={setLunchWorkerPercent} ></input>
            <input type="number" className="percent-input" mode="numeric" placeholder="Worker 2 %" name="worker2" onChange={setLunchWorkerPercent}></input>
          </div>
          <div className="server-results">
            <div className="server">
              <h4>Percent</h4>
              <p>{(worker1LunchPercent*100).toFixed()}%</p>
              <p>{(worker2LunchPercent*100).toFixed()}%</p>
              <p>{(worker3LunchPercent*100).toFixed()}%</p>
            </div>
            <div className="server">
              <h4>Credit</h4>
              <p>${worker1LunchCredit}</p>
              <p>${worker2LunchCredit}</p>
              <p>${worker3LunchCredit}</p>
            </div>
            <div className="server">
              <h4>Cash</h4>
              <p>${worker1LunchCash}</p>
              <p>${worker2LunchCash}</p>
              <p>${worker3LunchCash}</p>
            </div>
            <div className="server">
              <h4>Total</h4>
              <p>${(Number(worker1LunchCash) + Number(worker1LunchCredit)).toFixed(2)}</p>
              <p>${(Number(worker2LunchCash) + Number(worker2LunchCredit)).toFixed(2)}</p>
              <p>${(Number(worker3LunchCash) + Number(worker3LunchCredit)).toFixed(2)}</p>
            </div>
          </div>
          <div className="section-splitter">
            <p className="winners">Winners: {lunchCashRemainder}</p>
          </div>

          <div className="fish-border-container">
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
            <img className="fish-border" src={fish} alt="fish border"/>
          </div>

          <div className="section-splitter">
            <h3 className="percentage-header">Dinner Servers</h3>
          </div>
          <div className="percentage-inputs">
            <input type="number" className="percent-input" mode="numeric" placeholder="Worker 1 %" name="worker1" onChange={setDinnerWorkerPercent}></input>
            <input type="number" className="percent-input" mode="numeric" placeholder="Worker 2 %" name="worker2" onChange={setDinnerWorkerPercent}></input>
            <input type="number" className="percent-input" mode="numeric" placeholder="Worker 3 %" name="worker3" onChange={setDinnerWorkerPercent}></input>
          </div>
          <div className="server-results">
            <div className="server">
              <h4>Percent</h4>
              <p>{(worker1DinnerPercent*100).toFixed()}%</p>
              <p>{(worker2DinnerPercent*100).toFixed()}%</p>
              <p>{(worker3DinnerPercent*100).toFixed()}%</p>
              <p>{(worker4DinnerPercent*100).toFixed()}%</p>
            </div>
            <div className="server">
              <h4>Credit</h4>
              <p>${worker1DinnerCredit}</p>
              <p>${worker2DinnerCredit}</p>
              <p>${worker3DinnerCredit}</p>
              <p>${worker4DinnerCredit}</p>
            </div>
            <div className="server">
              <h4>Cash</h4>
              <p>${worker1DinnerCash}</p>
              <p>${worker2DinnerCash}</p>
              <p>${worker3DinnerCash}</p>
              <p>${worker4DinnerCash}</p>
            </div>
            <div className="server">
              <h4>Total</h4>
              <p>${(Number(worker1DinnerCash) + Number(worker1DinnerCredit)).toFixed(2)}</p>
              <p>${(Number(worker2DinnerCash) + Number(worker2DinnerCredit)).toFixed(2)}</p>
              <p>${(Number(worker3DinnerCash) + Number(worker3DinnerCredit)).toFixed(2)}</p>
              <p>${(Number(worker4DinnerCash) + Number(worker4DinnerCredit)).toFixed(2)}</p>
            </div>
          </div>
          <div>
            <p className="winners">Winners: {dinnerCashRemainder}</p>
          </div>
        </article>
    </div>
  );
}

export default App;
