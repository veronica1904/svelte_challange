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
  <div class="optionsForm">
    <div class="wraperform">
      <a type="button" href="/products/form/registerOrder"
        >Agregar Nueva Orden</a
      >
      <a type="button" href="/products/form/registerProduct"
        >Agregar Nuevo Producto</a
      >
    </div>
    <div class="filter">
      <label for="category">Filtrar por categoría:</label>
      <select
        id="category"
        bind:value={selectedCategory}
        on:change={filterProducts}
      >
        <option value="all">Todo</option>

        {#each categories as category}
          <option value={category.id}>{category.name}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="wrapperCardProducts">
    {#each filteredProducts as product}
      <Card
        name={product.name}
        description={product.description}
        price={product.price}
        category={product.category}
      />
    {/each}
  </div>
</div>

<style>
  .wrapperCardProducts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px;
  }
  .wraperform {
    display: flex;
    flex-direction: column;
  }
  .optionsForm {
    display: flex;
    gap: 2px;
    justify-content: space-around;
  }

  .filter {
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .filter label {
    margin-right: 8px;
    font-size: 1.2em;
  }

  .filter select {
    padding: 4px 8px;
    font-size: 1em;
  }
</style>
