export const Card = ({ gato }) => {
	const { name, img, colores, longDesc, sexo } = gato;

	return (
		<div>
			<h1>
				{name} - <span> {sexo}</span>
			</h1>
			<img src={img} alt={name} />
			<p>{longDesc}</p>

			<h2>Colores</h2>
			<ul>
				{colores.map((color) => (
					<div key={`${name}-${color}`}>
						<li>{color}</li>
					</div>
				))}
			</ul>
		</div>
	);
};
