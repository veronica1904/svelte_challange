<script>
    let quantity = 1;
    let price = 0.0;
    let selectedProduct = '';
    let selectedOrder = '';
  
    const products = [
      { id: 1, name: 'Pelota de Fútbol' },
      { id: 2, name: 'Sofá Moderno' },
      { id: 3, name: 'Pizza Margarita' },
      { id: 4, name: 'Bicicleta de Montaña' },
      { id: 5, name: 'Mesa de Comedor' },
      { id: 6, name: 'Hamburguesa Clásica' },
      { id: 7, name: 'Raqueta de Tenis' }
    ];
  
    const orders = [
      { id: 1, name: 'Pedido 1' },
      { id: 2, name: 'Pedido 2' },
      { id: 3, name: 'Pedido 3' }
    ];
  
    function handleSubmit(event) {
      event.preventDefault();
  
      console.log('Cantidad:', quantity);
      console.log('Precio:', price);
      console.log('Producto seleccionado:', selectedProduct);
      console.log('Pedido seleccionado:', selectedOrder);
  
      // Limpia el formulario después de enviar los datos
      quantity = 1;
      price = 0.0;
      selectedProduct = '';
      selectedOrder = '';
    }
  </script>
  
  <div class="form-container">
    <h2>Añadir Nuevo Pedido</h2>
    <form on:submit={handleSubmit}>
      <label>
        Cantidad:
        <input type="number" min="1" bind:value={quantity} />
      </label>
      <label>
        Precio:
        <input type="number" step="0.01" bind:value={price} />
      </label>
      <label>
        Producto:
        <select bind:value={selectedProduct}>
          <option value="" disabled selected>Selecciona un producto</option>
          {#each products as product}
            <option value={product.id}>{product.name}</option>
          {/each}
        </select>
      </label>
      <label>
        Pedido:
        <select bind:value={selectedOrder}>
          <option value="" disabled selected>Selecciona un pedido</option>
          {#each orders as order}
            <option value={order.id}>{order.name}</option>
          {/each}
        </select>
      </label>
      <button type="submit">Agregar Pedido</button>
    </form>
  </div>
  
  <style>
    .form-container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
  
    h2 {
      margin-bottom: 20px;
    }
  
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 15px;
      width: 100%;
    }
  
    input,
    select,
    button {
      margin-top: 5px;
      padding: 10px;
      font-size: 1em;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box; 
    }
  
    button {
      background-color: #ff3e00;
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #d1dce9;
    }
  </style>
  