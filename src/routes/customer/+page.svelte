<script>
  
  const clients = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', created_at: '2022-06-01' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', created_at: '2022-06-05' },
    { id: 3, name: 'Alice Johnson', phone: '555-123-4567', email: 'alice@example.com', created_at: '2022-06-10' }
  ];

  
  function getTotalOrders(clientId) {
    return Math.floor(Math.random() * 10);
  }
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
    word-wrap: break-word;
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
      padding: 12px;
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
      content: attr(data-label);
    }
  }
</style>

<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Fecha de Registro</th>
        <th>Nombre</th>
        <th>Teléfono</th>
        <th>Email</th>
        <th>Total de Pedidos</th>
      </tr>
    </thead>
    <tbody>
      {#each clients as client}
        <tr>
          <td data-label="Fecha de Registro">{client.created_at}</td>
          <td data-label="Nombre">{client.name}</td>
          <td data-label="Teléfono">{client.phone}</td>
          <td data-label="Email">{client.email}</td>
          <td data-label="Total de Pedidos">{getTotalOrders(client.id)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
