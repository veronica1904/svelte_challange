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

<div class="max-w-xs mx-auto p-4 bg-white rounded-lg shadow-md text-center">
  <h2 class="mb-4">Añadir Nuevo Pedido</h2>
  <form on:submit={handleSubmit} class="flex flex-col items-center">
    <label class="flex flex-col items-start mb-4 w-full">
      Cantidad:
      <input type="number" min="1" bind:value={quantity} class="mt-1 p-2 w-full border rounded-md" />
    </label>
    <label class="flex flex-col items-start mb-4 w-full">
      Precio:
      <input type="number" step="0.01" bind:value={price} class="mt-1 p-2 w-full border rounded-md" />
    </label>
    <label class="flex flex-col items-start mb-4 w-full">
      Producto:
      <select bind:value={selectedProduct} class="mt-1 p-2 w-full border rounded-md">
        <option value="" disabled selected>Selecciona un producto</option>
        {#each products as product}
          <option value={product.id}>{product.name}</option>
        {/each}
      </select>
    </label>
    <label class="flex flex-col items-start mb-4 w-full">
      Pedido:
      <select id="order" bind:value={selectedOrder} class="mt-1 p-2 w-full border rounded-md">
        <option value="" disabled selected>Selecciona un pedido</option>
        {#each orders as order}
          <option value={order.id}>{order.name}</option>
        {/each}
      </select>
    </label>

    <button type="submit" class="mt-2 py-2 px-4 bg-[#ff3e00] text-white rounded-md border border-transparent hover:bg-[#d1dce9] transition duration-300 ease-in-out">Agregar Pedido</button>
  </form>
</div>

