<script lang="ts">
  interface Props {
    highlighted?: string;

  }
  
  let { highlighted } = $props();

  console.log(highlighted);
  
</script>

{highlighted}
