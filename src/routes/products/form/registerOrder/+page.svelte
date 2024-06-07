<script>
  import { afterUpdate, onMount } from "svelte";
  import { supabase } from "../../../../server/supabase";
  import { goto } from "$app/navigation";

  // customer
  let customer = "";
  let selectedOrder = "";
  let name = "";
  let dataCustomers = [];
  let idOrder= ''
  let stepOrder = false;
  // products
  let quantity = 0;
  let price = 0;
  let orders = []
  let products = []
  let productId = ''
  let orderId = ''
  

  async function handleSubmitOrder(event) {
    event.preventDefault();
    const { data, error } = await supabase
      .from("Order")
      .insert([{ name, client_id: customer }])
      .select();
    if (error) {
      console.log(error);
    } else {
      name = "";
      customer = "";
      selectedOrder = "";
      idOrder = data[0].client_id
      stepOrder = true;
      getOrders()
    }
  }
  async function  handleSubmitOrderProducts(event){
    const { data, error } = await supabase
  .from('Order_Product')
  .insert([
    { order_id: orderId , product_id: productId, quantity, price },
  ])
  .select()
    if(error){
      
    }else{
      goto('/orders')
    }
  }

  async function getCustomers() {
    let { data: Customer, error } = await supabase.from("Customer").select("*");
    if (error) {
      console.error(error);
    } else {
      dataCustomers = Customer;
    }
  }


  async function getOrders() {
    let { data: Order, error } = await supabase
  .from('Order')
  .select('*')
  .eq('client_id', idOrder)
    if (error) {
      console.error(error);
    } else {
      orders = Order;
    }
  }

  async function getProducts() {
    let { data: Product, error } = await supabase
  .from('Product')
  .select('*')
    if (error) {
      console.error(error);
    } else {
      products = Product;
    }
  }

  onMount(() => {
      getCustomers();
      getProducts()
  });


</script>

{#if !stepOrder}
  <div class="max-w-xs mx-auto p-4 bg-white rounded-lg shadow-md text-center">
    <h2 class="mb-4">Añadir Nueva Orden</h2>
    <form on:submit={handleSubmitOrder} class="flex flex-col items-center">
      <label class="flex flex-col items-start mb-4 w-full">
        Cliente:
        <select bind:value={customer} class="mt-1 p-2 w-full border rounded-md">
          <option value="" disabled selected>Selecciona un cliente</option>
          {#each dataCustomers as customer}
            <option value={customer.id}>{customer.name}</option>
          {/each}
        </select>
      </label>
      <label class="flex flex-col items-start mb-4 w-full">
        Nombre del pedido:
        <input
          type="text"
          bind:value={name}
          class="mt-1 p-2 w-full border rounded-md"
        />
      </label>

      <button
        type="submit"
        class="bg-primary-main text-white p-2 rounded hover:bg-red-500"
        >Agregar Pedido</button
      >
    </form>
  </div>
{/if}
{#if stepOrder}
  <div class="max-w-xs mx-auto p-4 bg-white rounded-lg shadow-md text-center">
    <h2 class="mb-4">Añadir Nueva Orden</h2>
    <form on:submit={handleSubmitOrderProducts} class="flex flex-col items-center">
      <label class="flex flex-col items-start mb-4 w-full">
        Cantidad:
        <input
          type="number"
          min="1"
          bind:value={quantity}
          class="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <label class="flex flex-col items-start mb-4 w-full">
        Precio:
        <input
          type="number"
          step="0.01"
          bind:value={price}
          class="mt-1 p-2 w-full border rounded-md"
        />
      </label>
      <label class="flex flex-col items-start mb-4 w-full">
        Productos:
        <select bind:value={productId} class="mt-1 p-2 w-full border rounded-md">
          <option value="" disabled selected>Selecciona un producto</option>
          {#each products as product}
            <option value={product.id}>{product.name}</option>
          {/each}
        </select>
      </label>
      <label class="flex flex-col items-start mb-4 w-full">
        Pedido:
        <select
          id="order"
          bind:value={orderId}
          class="mt-1 p-2 w-full border rounded-md"
        >
          <option value="" disabled selected>Selecciona un pedido</option>
          {#each orders as order}
            <option value={order.id}>{order.name}</option>
          {/each}
        </select>
      </label>

      <button
        type="submit"
        class="bg-primary-main text-white p-2 rounded hover:bg-red-500"
        >Agregar Pedido</button
      >
    </form>
  </div>
{/if}
