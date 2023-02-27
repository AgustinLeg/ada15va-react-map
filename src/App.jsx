import './App.css';
import { CardList } from './components/CardList';
import { ProductList } from './components/products/ProductList';
import { TaskList } from './components/tasks/TaskList';
import { gatos } from './data/gatos';

function App() {
	return (
		<div className="App">
			{/* <CardList list={gatos} /> */}
			{/* <ProductList /> */}
			<TaskList />
		</div>
	);
}

export default App;
