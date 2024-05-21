<script>
    import Header from "../components/Header.svelte";
    import Card from "../components/Card.svelte";
    import Sidebar from "../components/Sidebar.svelte";
    import Footer from "../components/Footer.svelte";

    let navItems = [
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
        { text: "My Cards", href: "/cards" },
        { text: "Contact", href: "/contact" },
    ];
</script>

<div class="container">
    <div class="header">
        <Header />
    </div>
    <div class="left-side">

    </div>
    <main>
        <Card />
        <Card />
    </main>
    <div class="sidebar">
        <Sidebar {navItems} />
    </div>
    <div class="footer">
        <Footer />
    </div>
</div>

<style>
    main {
        display: flex;
        gap: 1em;
    }
    .container {
        /* make this a holy grail layout */
        display: grid;
        grid-template: auto 1fr auto / auto 1fr auto;
    }
    .header{
        padding: 2rem;
        grid-column: 1 / 3;
    }
    .left-side{
        grid-column: 1 / 3;
    }
    main{
        grid-column: 2 / 3;
        justify-content: center;
    }
    .sidebar{
        grid-column: 3 / 3;
    }
    .footer{
        grid-column: 1 / 3;
    }
</style>