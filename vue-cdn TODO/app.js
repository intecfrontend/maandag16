const app = new Vue({
    el: "#app",
    data: {
        title: "Hello Intec-student",
        newTodo: ''
    },
    methods: {
        addTodo() {
            /*console.log('submitted');*/
            console.log(this.newTodo); /*this = the instance*/
        }
    }
});