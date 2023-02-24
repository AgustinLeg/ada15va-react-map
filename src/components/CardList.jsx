import { Card } from './Card';

// La prop "key" en React ayuda al motor de renderizado a identificar elementos de forma única y optimizar la actualización de la interfaz de usuario. Esto mejora el rendimiento y evita errores en la renderización de listas dinámicas.

export const CardList = ({ list }) => {
	if (!list) {
		return <span>no hay una lista...</span>;
	}

	const numeros = [1, 2, 3, 4, 5];

	// const numerosDoble = numeros.map((n) => {
	// 	if (n % 2 === 0) return n * 2;

	// 	return n;
	// });

	// const numerosDoble = numeros.map((n) => (n * 2));

	// console.log(numeros);
	// console.log(numerosDoble);

	// ❌ Nunca usar el index como key

	return (
		<div>
			{list.map((gato) => (
				<Card key={`${gato.name}-${gato.sexo}`} gato={gato} />
			))}
		</div>
	);
};
