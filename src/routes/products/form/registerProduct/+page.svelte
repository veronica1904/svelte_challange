<script lang='ts'>
  import { onMount } from "svelte";
  import { supabase } from "../../../../server/supabase";
  import { goto } from '$app/navigation';

    let name = '';
    let price = 0;
    let description = '';
    let category = ''
    let categories: any[] | null = []

    onMount(async () => {
      let { data } = await supabase.from("Category").select(`*`);
      categories = data
    })
  
    async function handleSubmit(event) {
      event.preventDefault();

      let { data: Category } = await supabase.from("Category").select(`*`);

      const { data, error } = await supabase
        .from('Product')
        .insert([
          { name, price, description, category_id: category },
        ])
        .select()

      // Limpia el formulario después de enviar los datos
      name = '';
      price = 0;
      description = '';

      goto('/products')
    }
  </script>
  
  <div class="form-container">
    <h2>Añadir Nuevo Pedido</h2>
    <form on:submit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" bind:value={name} />
      </label>
      <label>
        Precio:
        <input type="number" step="1" bind:value={price} />
      </label>
      <label>
        descripción:
        <textarea bind:value={description} />
      </label>
      <label>
        Categoria:
        <select
        id="category"
        bind:value={category}
      >
        {#each categories as category}
        <option value={category.id}>{category.name}</option>
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
    textarea,
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
  