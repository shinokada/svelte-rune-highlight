<script>
  let count = $state(0);
</script>

<button onclick={() => count++}>
  Count: {count}
</button>

<style>
  button {
    padding: 4px;
    border: 2px solid blue;
    margin: 8px;
    border-radius: 10px;
  }
</style>
