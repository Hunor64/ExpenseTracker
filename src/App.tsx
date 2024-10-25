import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionList from './components/TransactionList';

const App = () => {
    return (
        <>
            <Header/>
            <Balance/>
            <TransactionList/>
            <AddTransaction/>
        </>
    );
}

export default App;
