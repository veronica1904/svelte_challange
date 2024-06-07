<script>
  import { onMount } from "svelte";
  import { supabase } from "../../server/supabase";
  import { formatDate } from "../../utils/formatDate";

    let ordersProducts = []
    const orders = [
      {
        id: 1,
        date: '2023-06-01',
        customerName: 'John Doe',
        customerPhone: '123-456-7890',
        customerEmail: 'john@example.com',
        items: [
          { productName: 'Pelota de Fútbol', quantity: 2 },
          { productName: 'Raqueta de Tenis', quantity: 1 }
        ]
      },
      {
        id: 2,
        date: '2023-06-05',
        customerName: 'Jane Smith',
        customerPhone: '987-654-3210',
        customerEmail: 'jane@example.com',
        items: [
          { productName: 'Sofá Moderno', quantity: 1 },
          { productName: 'Mesa de Comedor', quantity: 1 }
        ]
      },
      {
        id: 3,
        date: '2023-06-10',
        customerName: 'Alice Johnson',
        customerPhone: '555-123-4567',
        customerEmail: 'alice@example.com',
        items: [
          { productName: 'Pizza Margarita', quantity: 3 },
          { productName: 'Hamburguesa Clásica', quantity: 4 }
        ]
      }
    ];
  


          
  async function getOrderProducts() {
    let { data: Order_Product, error } = await supabase
      .from('Order_Product')
      .select(`*,Order (*), Product(*)`)

  console.log(Order_Product,"Order_Product")
    if (error) {
      console.error(error);
    } else {
      ordersProducts= Order_Product
    }
  }

  onMount(() => {
    getOrderProducts();
  });



  </script>
  
  <style>
    .table-container {
      width: 85%;
      max-width: 100%;
      margin: 0 auto;
      overflow-x: auto;
      padding: 1rem;
    }
  
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }
  
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
  
    th {
      background-color: #f2f2f2;
    }
  
    tr:hover {
      background-color: #f2f2f2;
    }
  
    @media screen and (max-width: 600px) {
      table, thead, tbody, th, td, tr {
        display: block;
      }
  
      thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
      }
  
      tr {
        border: 1px solid #ccc;
        margin-bottom: 1rem;
      }
  
      td {
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
        text-align: right;
      }
  
      td:before {
        position: absolute;
        top: 12px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        text-align: left;
        font-weight: bold;
      }
  
      td:before {
        content: attr(data-label);
      }
    }
  </style>
  
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Fecha del Pedido</th>
          <th>Nombre del Orden</th>
          <th>Nombre del Producto</th>
          <th>Precio de la orden</th>
          <th>Cantidad de productos</th>
        </tr>
      </thead>
      <tbody>
        {#each ordersProducts as order}
          <tr>
            <td data-label="Fecha del Pedido">{formatDate(order.created_at) }</td>
            <td data-label="Nombre de la orden">{order.Order.name}</td>
            <td data-label="Nombre del Producto">{order.Product.name}</td>
            <td data-label="Precio de la orden">{order.price}</td>
            <td data-label="Cantidad de productos">{order.quantity}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  