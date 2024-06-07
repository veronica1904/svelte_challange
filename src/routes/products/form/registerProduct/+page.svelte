<script lang='ts'>
  import { onMount } from "svelte";
  import { supabase } from "../../../../server/supabase";
  import { goto } from '$app/navigation';

  let name = '';
  let price = 0;
  let description = '';
  let category = '';
  let categories: any[] | null = [];

  onMount(async () => {
    let { data } = await supabase.from("Category").select(`*`);
    categories = data;
  });

  async function handleSubmit(event) {
    event.preventDefault();

    let { data: Category } = await supabase.from("Category").select(`*`);

    const { data, error } = await supabase
      .from('Product')
      .insert([{ name, price, description, category_id: category }])
      .select();

    name = '';
    price = 0;
    description = '';

    goto('/products');
  }
</script>

<div class="form-container bg-white rounded-lg shadow-md mx-auto max-w-md p-6 text-center">
  <h2 class="mb-6 text-2xl font-bold">Añadir Nuevo Pedido</h2>
  <form on:submit={handleSubmit} class="flex flex-col items-center">
    <label class="mb-4 w-full">
      Nombre:
      <input type="text" bind:value={name} class="mt-1 p-2 w-full border border-gray-300 rounded" />
    </label>
    <label class="mb-4 w-full">
      Precio:
      <input type="number" step="1" bind:value={price} class="mt-1 p-2 w-full border border-gray-300 rounded" />
    </label>
    <label class="mb-4 w-full">
      Descripción:
      <textarea bind:value={description} class="mt-1 p-2 w-full border border-gray-300 rounded"></textarea>
    </label>
    <label class="mb-4 w-full">
      Categoría:
      <select id="category" bind:value={category} class="mt-1 p-2 w-full border border-gray-300 rounded">
        {#each categories as category}
        <option value={category.id}>{category.name}</option>
        {/each}
      </select>
    </label>

    <button type="submit" class="bg-red-600 text-white p-2 rounded hover:bg-red-500">Agregar Pedido</button>
  </form>
</div>
