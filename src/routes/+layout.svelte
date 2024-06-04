<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  let navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Test", href: "/blog" },
    { text: "Profile", href: "/profile" },
    { text: "Cards", href: "/business-card-collection" },
  ];
</script>

<div class="container">
  <section>
    <Header />
    {#each navItems as item}
      <a href="{item.href}">{item.text} </a>
    {/each}
  </section>
  <main>
    <slot />
  </main>
  <footer><Footer /></footer>
</div>

<style>
  .container {
    /* make this a holy grail layout */
    display: grid;
    grid-template: auto 1fr auto / auto 1fr;
  }
  section {
    padding: 2rem;
    grid-column: 1 / 3;
    background-color: bisque;
  }
  footer {
    grid-column: 1 / 3;
    background-color: aquamarine;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
  }
</style>
