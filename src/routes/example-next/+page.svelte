<script lang="ts">
  import themes from '../utils/themes.json'
  interface Props {
    className?: string;
    onChange: (theme: string) => void;
    value: string;
  }
  let { className, onChange, value } = $props<Props>();
  const handleOnChange = (e) => {
    
  }
</script>


<select id="theme-selector" onchange={handleOnChange} bind:value={value}>
  {#each themes as theme}
    <option value={theme}>{theme}</option>
  {/each}
</select>

