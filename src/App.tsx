import AddTransaction from "./components/AddTransaction"
import Balance from "./components/Balance"
import Header from "./components/Header"
import TransactionList from "./components/TransactionList"
import './App.css'
import IncomeExpense from "./components/IncomeExpense"

const App = () => {
    return (
        <>
            <Header />
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
        </>
    )
}

export default App
