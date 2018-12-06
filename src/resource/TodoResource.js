export default {
    getAll : () =>  fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=completed,active", {
        method: 'GET',
        mode: 'cors'})

}