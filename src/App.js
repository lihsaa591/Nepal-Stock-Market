import './App.css';
import StockData from './components/GetStockData';
import AppHeader from './components/Heading';

function App() {
  return (
    <div className="App">
    	<AppHeader />
	  <StockData />
    </div>
  );
}

export default App;
