import './App.css';
import { CardList } from './components/CardList';
import { gatos } from './data/gatos';

function App() {
	return (
		<div className="App">
			<CardList list={gatos} />
		</div>
	);
}

export default App;
