<!-- This is the layout for Cards -->
<script>
    import Sidebar from "../../components/Sidebar.svelte";
    let navItems = [
      { text: "Home", href: "/" },
      { text: "Browse Connections", href: "/business-card-collection/browse-connections" },
      { text: "Manage My Contacts", href: "/business-card-collection/manage-my-contacts" },
    ];
  </script>
  
 <main>
    <div class="left-side">
        <Sidebar {navItems}/>
    </div>
    <slot />
 </main>
  
  <style>
    main {
      /* make this a holy grail layout */
      display: grid;
      grid-template: auto 1fr auto / auto 1fr;
    }
  </style>
  