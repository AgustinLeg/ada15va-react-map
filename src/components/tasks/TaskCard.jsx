import './Task.css';

export const TaskCard = ({ task }) => {
	const { title, done } = task;

	// return (
	// 	<div>
	// 		<p style={{ textDecoration: done && 'line-through' }}>{title}</p>
	// 	</div>
	// );

	// if (done) {
	// 	return (
	// 		<li className="itemList" style={{ textDecoration: 'line-through' }}>
	// 			{title}{' '}
	// 		</li>
	// 	);
	// }

	// return <li className="itemList">{title} </li>;

	return <li className={done ? 'done' : ''}>{title} </li>;
};
