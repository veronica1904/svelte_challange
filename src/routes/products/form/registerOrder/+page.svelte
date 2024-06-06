<script lang="ts">
  import { onMount } from "svelte";
  import { supabase } from "../../../../server/supabase";
  import { goto } from "$app/navigation";

  interface Product {
    id: number;
    name: string;
  }

  interface Order {
    id: number;
    name: string;
  }

  let quantity: string = "";
  let price: number = 0;
  let selectedProduct: string = "";
  let selectedOrder: string = "";
  let products: Product[] = [];
  let orders: Order[] = [];

  onMount(async () => {
    const { data: productData, error: productError } = await supabase
      .from<Product>("Product")
      .select("id, name");
    if (productError) {
      console.error("Error fetching products:", productError);
    } else {
      products = productData || [];
    }

    const { data: orderData, error: orderError } = await supabase
      .from<Order>("Order")
      .select("id, name");
    if (orderError) {
      console.error("Error fetching orders:", orderError);
    } else {
      orders = orderData || [];
    }
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const { data, error } = await supabase
      .from("Order")
      .insert([
        {
          quantity: parseInt(quantity),
          price,
          product_id: parseInt(selectedProduct),
          order_id: parseInt(selectedOrder),
        },
      ]);

    if (error) {
      console.error("Error inserting data:", error);
      return;
    }

    quantity = "";
    price = 0;
    selectedProduct = "";
    selectedOrder = "";

    goto("/orders");
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
      <select id="order" bind:value={selectedOrder}>
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
