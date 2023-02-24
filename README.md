### Clase 05 - Map

## Ejercicio Productos

- [Imagen de referencia ](https://cdn.dribbble.com/users/114038/screenshots/3674970/product_card_design_2x.png)
- Crear una aplicacion de react (vite)
- Limpiar el proyecto
- guardar el siguiente array de productos en su carpeta correspondiente.

```
export const products = [
    {
      id: 1,
      title: 'Coombes',
      type: "Lounge",
      price: 2600,
      rating: 4,
      img: 'https://i.imgur.com/ZAxMGG5.png',
      isAvailable: true,
      onSale: false,
    },
    {
      id: 2,
      title: 'Keeve Set',
      type: "Table & Chairs",
      price: 590,
      rating: 4,
      img: 'https://i.imgur.com/tT8sFIs.jpeg',
      isAvailable: false,
      onSale: false,
    },
    {
      id: 3,
      title: 'Nillè',
      type: "Armchair",
      price: 950,
      rating: 5,
      img: 'https://i.imgur.com/Vx1cZY0.png',
      isAvailable: false,
      onSale: true,
    },
    {
      id: 4,
      title: 'Blanko',
      type: "Side table",
      price: 90,
      rating: 4,
      img: 'https://i.imgur.com/N1Bf4ox.jpg',
      isAvailable: true,
      onSale: false,
    },
    {
      id: 5,
      title: 'Momo',
      type: "Shelves",
      price: 890,
      rating: 4,
      img: 'https://i.imgur.com/AlKxDE4.jpeg',
      isAvailable: true,
      onSale: false,
    },
    {
      id: 6,
      title: 'Penemillè',
      type: "Chair",
      price: 120,
      rating: 4,
      img: 'https://i.imgur.com/pmANPjN.jpeg',
      isAvailable: true,
      onSale: false,
    },
    {
      id: 7,
      title: 'Kappu',
      type: "Shelves",
      price: 420,
      rating: 4,
      img: 'https://i.imgur.com/s2rsPa1.jpg',
      isAvailable: true,
      onSale: false,
    },
  ];

```

- Crear los componentes necesarios para mostrar una lista con cards de productos
- Validar cuando no existe el array.
- Si el array esta vacio mostrar un mensaje `No hay productos, vuelva mas tarde.`
- Si el producto esta en oferta `onSale = true` mostrar un cartel que diga oferta
- Si el producto esta disponible `isAvailable = true ` mostrar un boton de comprar, en caso contrario el boton tiene que estar desactivado.
- Dar estilos con CSS.

## Ejercicio Tasks

- [Imagen de referencia ](https://1.bp.blogspot.com/-i78iKr_P9Pk/X9ohjXyc5eI/AAAAAAAAA_4/8UauxZaOgUshGK7MXwW1gZqts7Zrf_AewCLcBGAsYHQ/s1280/Todo%2BList%2BApp%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp)
- Crear una aplicacion de react (vite)
- Limpiar el proyecto
- guardar el siguiente array de Tareas en su carpeta correspondiente.

```
export const tasks = [
    {
      id: 1,
      title: 'Buy a new gaming laptop',
      done: false,
    },
    {
      id: 2,
      title: 'Complete a previus task',
      done: false
    },
    {
      id: 3,
      title: 'Create video for Youtube',
      done: true,
    },
    {
      id: 4,
      title: 'Create a new portfolio site',
      done: false,
    },
  ];

```

- Crear los componentes necesarios para mostrar una lista con cards de productos
- Validar cuando no existe el array.
- Si el array esta vacio mostrar un mensaje `No hay tareas, vuelva mas tarde.`
- Si la tarea esta completada `done = true` esta misma tiene que estar tachada.
- mostrar la cantidad de tareas `You have "4" pending tasks`, el 4 tiene que ser dinamico.
- Dar estilos con CSS.
