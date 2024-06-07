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

<div class="overflow-x-auto p-4">
  <table class="w-full border-collapse">
    <thead>
      <tr>
        <th class="bg-gray-200 p-4">Fecha de Registro</th>
        <th class="bg-gray-200 p-4">Nombre</th>
        <th class="bg-gray-200 p-4">Teléfono</th>
        <th class="bg-gray-200 p-4">Email</th>
        <th class="bg-gray-200 p-4">Total de Pedidos</th>
      </tr>
    </thead>
    <tbody>
      {#each clients as client}
        <tr class="hover:bg-gray-200">
          <td class="p-4" data-label="Fecha de Registro">{client.created_at}</td>
          <td class="p-4" data-label="Nombre">{client.name}</td>
          <td class="p-4" data-label="Teléfono">{client.phone}</td>
          <td class="p-4" data-label="Email">{client.email}</td>
          <td class="p-4" data-label="Total de Pedidos">{getTotalOrders(client.id)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
