<script>
  import Header from "../components/Header.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Footer from "../components/Footer.svelte";
  let navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Test", href: "/blog" },
  ];
</script>

<div class="container">
  <header><Header /></header>
  <div class="left-side"><Sidebar {navItems} /></div>
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
  header {
    padding: 2rem;
    grid-column: 1 / 3;
    background-color: bisque;
  }
  .left-side {
    padding: 1em;
    grid-column: 1 / 2;
    background-color: aliceblue;
  }
  footer {
    grid-column: 1 / 3;
    background-color: aquamarine;
  }
</style>
