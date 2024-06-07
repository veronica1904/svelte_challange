<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../../components/Card/+Card.svelte";
  import { supabase } from "../../server/supabase";

  let products = [];
  let filteredProducts: any[] | null = [];
  let categories = [];

  async function getProducts() {
    let { data: Product, error } = await supabase
      .from("Product")
      .select(`*, Category(*)`);

    if (error) {
      console.error(error);
    } else {
      filteredProducts = Product;
      products = Product;
      categories = Product.map((item) => item.Category).filter(
        (category, index, data) =>
          data.findIndex((val) => val.id === category.id) === index,
      );
    }
  }

  onMount(() => {
    getProducts();
  });

  let selectedCategory = "all";

  function filterProducts() {
    if (selectedCategory === "all") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(
        (product) => product.Category.id === selectedCategory,
      );
    }
  }
</script>

<svelte:head>
  <title>Products</title>
  <meta name="description" content="List Products" />
</svelte:head>

<div>
  <div class="flex flex-col lg:flex-row gap-2 justify-around mb-4">
    <div class="flex flex-col">
      <a
        class="mb-2 bg-primary-main text-white p-2 rounded hover:bg-red-500"
        href="/products/form/registerOrder">Agregar Nueva Orden</a
      >
      <a
        class="bg-primary-main text-white p-2 rounded hover:bg-red-500"
        href="/products/form/registerProduct">Agregar Nuevo Producto</a
      >
    </div>
    <div class="flex items-center justify-center">
      <label for="category" class="mr-2 text-lg">Filtrar por categoría:</label>
      <select
        id="category"
        bind:value={selectedCategory}
        on:change={filterProducts}
        class="p-2 text-base border border-gray-300 rounded"
      >
        <option value="all">Todo</option>
        {#each categories as category}
          <option value={category.id}>{category.name}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="flex flex-wrap justify-center gap-4 p-4">
    {#each filteredProducts as product}
      <Card
        name={product.name}
        description={product.description}
        price={product.price}
        category={product.Category?.name}
      />
    {/each}
  </div>
</div>
