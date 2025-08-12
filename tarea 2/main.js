const ProductManager = require('./ProductManager');

const manager = new ProductManager();

// Agregar productos válidos
manager.addProduct({id: 1, name: 'Teclado', description: 'Teclado Mecánico', price: 25000, stock: 25});
manager.addProduct({id: 2, name: 'Mouse', description: 'Mouse Inalámbrico', price: 15000, stock: 40});

// Intentar agregar producto con campo faltante
manager.addProduct({id: 3, name: 'Monitor', description: 'Monitor LED', price: 35000});

// Intentar agregar producto con id repetido
manager.addProduct({id: 1, name: 'Teclado2', description: 'Otro teclado', price: 26000, stock: 10});

// Mostrar todos los productos
console.log('Todos los productos:', manager.getProducts());

// Buscar producto por id existente
console.log('Producto con id 2:', manager.getProductById(2));

// Buscar producto por id no existente
console.log('Producto con id 10:', manager.getProductById(10));
