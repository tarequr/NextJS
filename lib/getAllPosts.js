export default function getAllPosts() {
    const result = fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    return result;
}