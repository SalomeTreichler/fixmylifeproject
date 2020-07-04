import axios from 'axios';

const TodoService = {
    getTodos: () => {
        axios.get('http://loclahost:8080/todos')
            .then(response => {
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    },
    deleteTodo: (id) => {
        axios.get('http://loclahost:8080/todos/' + id)
            .then(response => {
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default TodoService;