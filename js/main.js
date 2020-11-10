/**VUE */
const batman = new Vue({
  el: "#batman",
  data: {
    newTodos: "",
    todos: [
      {text: "Kill the Penguin"},
      {text: "Kill Bane"},
      {text: "Kill the Penguin"},
      {text: "Seduce Catwoman"}
    ],
  },
  methods: {
    add() {
      this.todos.push({
        text: this.newTodos,
      }),
      this.newTodos= ''
    },
  }
});
