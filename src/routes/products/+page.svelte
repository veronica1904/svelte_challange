<script>
  import Card from "../../components/Card/+Card.svelte";


  const products = [
    {
      name: "Pelota de Fútbol",
      description: "Pelota de fútbol profesional de alta calidad.",
      price: 29.99,
      category: "deporte",
    },
    {
      name: "Sofá Moderno",
      description: "Sofá cómodo y elegante para tu sala de estar.",
      price: 199.99,
      category: "hogar",
    },
    {
      name: "Pizza Margarita",
      description: "Deliciosa pizza margarita con ingredientes frescos.",
      price: 9.99,
      category: "comida",
    },
    {
      name: "Bicicleta de Montaña",
      description: "Bicicleta de montaña con suspensión y frenos de disco.",
      price: 349.99,
      category: "deporte",
    },
    {
      name: "Mesa de Comedor",
      description: "Mesa de comedor de madera para 6 personas.",
      price: 149.99,
      category: "hogar",
    },
    {
      name: "Hamburguesa Clásica",
      description: "Hamburguesa clásica con queso, lechuga y tomate.",
      price: 7.99,
      category: "comida",
    },
    {
      name: "Raqueta de Tenis",
      description: "Raqueta de tenis de alta resistencia y durabilidad.",
      price: 89.99,
      category: "deporte",
    },
  ];

  let selectedCategory = "todas";
  let filteredProducts = products;
  
  function filterProducts() {
    console.log(selectedCategory,"selectedCategory")
    if(selectedCategory === "todas") {
      filteredProducts = products
    }else{
      filteredProducts = products.filter((product) => product.category === selectedCategory);

    }
  }

 
</script>

<svelte:head>
  <title>Products</title>
  <meta name="description" content="List Products" />
</svelte:head>

<div>
  <div class="optionsForm">
    <div class="wraperform" >
      <a type="button" href="/products/form/registerOrder">Agregar Nueva Orden</a>
      <a type="button" href="/products/form/registerProduct">Agregar Nuevo Producto</a>
    </div>
    <div class="filter">
      <label for="category">Filtrar por categoría:</label>
      <select id="category" bind:value={selectedCategory} on:change={filterProducts}>
        <option value="todas">Todas</option>
        <option value="deporte">Deporte</option>
        <option value="hogar">Hogar</option>
        <option value="comida">Comida</option>
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
  .wraperform{
    display: flex;
    flex-direction: column;
  }
  .optionsForm{
    
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
