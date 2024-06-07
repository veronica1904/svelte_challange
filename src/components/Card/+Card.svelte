<script>
  export let name;
  export let description;
  export let price;
  export let category;
</script>

<div
  class="card flex flex-col justify-between p-4 border border-gray-300 rounded shadow-md w-60 h-60 max-w-[300px] bg-white transition-shadow duration-300 ease-in-out hover:shadow-lg"
>
  <div class="text-sm p-1.5 rounded inline-block mb-2 text-[#ff3e00]">
    {category}
  </div>
  <div class="mb-4">
    <h2 class="text-xl font-bold mb-2 text-[#333]">{name}</h2>
    <p class="text-[#666] text-base truncate">{description}</p>
  </div>
  <div class="text-lg text-[#27ae60] font-bold mt-auto">
    ${price}
  </div>
</div>
