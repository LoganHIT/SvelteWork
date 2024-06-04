<script>
    export let person;
</script>

<dl>
    <dt>First</dt>
    <dd>{person.name}</dd>
    <dt>Email</dt>
    <dd>{person.email}</dd>
    <dt>ID</dt>
    <dd>{person.id}</dd>
    <dt>Company</dt>
    <dd>{person.company.name}</dd>
    <dt>Website</dt>
    <dd>{person.website}</dd>
    <dt>Phone Number</dt>
    <dd>{person.phone}</dd>
</dl>