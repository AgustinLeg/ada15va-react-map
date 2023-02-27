import { tasks } from '../../data/tasks';
import { TaskCard } from './TaskCard';

export const TaskList = () => {
	const taksPending = tasks.filter((task) => !task.done);

	return (
		<div>
			<h1>Ejercicio Tasks</h1>
			<div>
				{tasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</div>
			<p>You have {taksPending.length} pending tasks</p>
		</div>
	);
};
