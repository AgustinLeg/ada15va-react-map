### Clase 05 - Map

## Ejercicio

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
