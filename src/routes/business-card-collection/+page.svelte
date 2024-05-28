<script>
  import Card from "../../components/Card.svelte";

// testing with API
  export let data;
  const people = data.people;
</script>

<main>
    {#each people as person}
        <Card {person}/>
    {/each}

</main>
<style>
  main{
    display:flex;
    flex-wrap: wrap;
  }
</style>