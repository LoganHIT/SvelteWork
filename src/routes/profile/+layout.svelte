<!-- This is the layout for Cards -->
<script>
    import Sidebar from "../../components/Sidebar.svelte";
    let navItems = [
      { text: "Home", href: "/" },
      { text: "My Company", href: "/profile/my-company" },
      { text: "My Contact Details", href: "/profile/my-contact-details" },
      { text: "Profile Image", href: "/profile/profile-image"}
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
  