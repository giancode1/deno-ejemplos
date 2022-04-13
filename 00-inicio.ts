const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

const data = await response.json();
console.log(data);

//deno run --allow-net 00-inicio.ts   //necesario el flag --allow-net para poder acceder a internet

export default data;