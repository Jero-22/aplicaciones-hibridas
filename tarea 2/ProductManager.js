class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Validar que todos los campos existan y no sean nulos/undefined
    const requiredFields = ['id', 'name', 'description', 'price', 'stock'];
    for (const field of requiredFields) {
      if (!product.hasOwnProperty(field) || product[field] === undefined || product[field] === null) {
        console.error(`Error: El campo ${field} es obligatorio`);
        return;
      }
    }

    // Verificar que no exista otro producto con el mismo id
    const exists = this.products.some(p => p.id === product.id);
    if (exists) {
      console.error('Error: Ya existe un producto con ese id');
      return;
    }

    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      console.error('Not found');
      return null;
    }
    return product;
  }
}

// Exportar con CommonJS
module.exports = ProductManager;
