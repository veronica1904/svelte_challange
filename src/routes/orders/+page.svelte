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

<div class="overflow-x-auto p-4">
  <table class="w-full border-collapse">
    <thead>
      <tr>
        <th class="bg-gray-200 p-4">Fecha del Pedido</th>
        <th class="bg-gray-200 p-4">Nombre del Cliente</th>
        <th class="bg-gray-200 p-4">Teléfono del Cliente</th>
        <th class="bg-gray-200 p-4">Email del Cliente</th>
        <th class="bg-gray-200 p-4">Detalles del Pedido</th>
      </tr>
    </thead>
    <tbody>
      {#each orders as order}
        <tr class="hover:bg-gray-200">
          <td class="p-4" data-label="Fecha del Pedido">{order.date}</td>
          <td class="p-4" data-label="Nombre del Cliente">{order.customerName}</td>
          <td class="p-4" data-label="Teléfono del Cliente">{order.customerPhone}</td>
          <td class="p-4" data-label="Email del Cliente">{order.customerEmail}</td>
          <td class="p-4" data-label="Detalles del Pedido">{getOrderDetails(order)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
