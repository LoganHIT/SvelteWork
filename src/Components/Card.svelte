<script>
    import Picture from '../components/Picture.svelte';
    import Details from '../components/Details.svelte';
    export let person;
    let username = person.username;
</script>

<section>
    <Picture {username}/>
    <Details {person}/>
    
</section>

<style>
    section {
        grid-column: 2/3;
        display: flex;
        border: 1px solid black;
        padding: 1.5em;
        gap: 1em;
        /* Fk this stuff below */
        flex: 1 2;
        flex-basis: 450px;
    }
</style>