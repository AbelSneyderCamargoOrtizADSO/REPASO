export const post = async (id) => {
  const solicitud = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await solicitud.json();

  return post;
}