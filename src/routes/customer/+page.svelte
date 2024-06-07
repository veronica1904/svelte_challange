<script>
  import { onMount } from "svelte";
  import { supabase } from "../../server/supabase";
  import { formatDate } from "../../utils/formatDate";

 let customers = []
 async function getCustomers() {
    let { data: Customer, error } = await supabase.from("Order").select(`client_id, Customer(*)`);

    console.log(Customer, 'Customer')
    if (error) {
      console.error(error);
    } else {
     customers = Customer
    }
  }

  onMount(() => {
    getCustomers();
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
      {#each customers as client}
        <tr>
          <td data-label="Fecha de Registro">{formatDate(client.Customer.created_at)}</td>
          <td data-label="Nombre">{client.Customer.name}</td>
          <td data-label="Teléfono">{client.Customer.phone}</td>
          <td data-label="Email">{client.Customer.email}</td>
          <td data-label="Total de Pedidos">{client.id}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
