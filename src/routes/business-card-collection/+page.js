const fetchFromUrl = "https://jsonplaceholder.typicode.com/users";

export async function load({ fetch }) {
    const res = await fetch(fetchFromUrl);
    const people = await res.json();
    return { people };
  }