<script>
  export let name;
  export let description;
  export let price;
  export let category;
</script>

<style>
  .card {
    max-width: 300px;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    transition: box-shadow 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card h2 {
    margin: 0 0 8px;
    font-size: 1.5em;
    color: #333333;
  }

  .card p {
    margin: 0 0 16px;
    color: #666666;
  }

  .card .price {
    font-size: 1.2em;
    color: #27ae60;
    font-weight: bold;
  }
   .category {
    font-size: 0.9em;
    padding: 4px 8px;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 8px;
    color: #ff3e00;
  }
</style>

<div class="card">
    <div class="category">{category}</div>
        <h2>{name}</h2>
        <p>{description}</p>
    <div class="price">${price}</div>
</div>
