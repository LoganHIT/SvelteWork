<script>
    let articles = [
        {
            slug: "cats",
            title: "Cats are the internet",
            body: "This is the main content / lorem ipsum"
        },
        {
            slug: "breakfast",
            title: "Breakfast are the internet",
            body: "This is the main content / lorem ipsum"
        },
        {
            slug: "dogs",
            title: "Dogs are the internet",
            body: "This is the main content / lorem ipsum"
        },
        {
            slug: "jesus",
            title: "jesus is the internet",
            body: "This is the main content / lorem ipsum"
        },
        {
            slug: "ye-mum-me-mum",
            title: "who knows ah",
            body: "This is the main content / lorem ipsum"
        },
    ]
</script>


<h1>Jesus</h1>
<ul>
    {#each articles as item}
        <li><a href="/blog/{item.slug}">{item.title}</a></li>
    {/each}
</ul>

<style></style>