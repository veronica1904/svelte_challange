<script>
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
  
    function getOrderDetails(order) {
      return order.items.map(item => `${item.quantity} x ${item.productName}`).join(', ');
    }
  </script>
  
  <style>
    .table-container {
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
          <th>Nombre del Cliente</th>
          <th>Teléfono del Cliente</th>
          <th>Email del Cliente</th>
          <th>Detalles del Pedido</th>
        </tr>
      </thead>
      <tbody>
        {#each orders as order}
          <tr>
            <td data-label="Fecha del Pedido">{order.date}</td>
            <td data-label="Nombre del Cliente">{order.customerName}</td>
            <td data-label="Teléfono del Cliente">{order.customerPhone}</td>
            <td data-label="Email del Cliente">{order.customerEmail}</td>
            <td data-label="Detalles del Pedido">{getOrderDetails(order)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  