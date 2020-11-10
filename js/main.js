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
    ]
  },
  methods: {
    add() {
      this.todos.push({
        text: this.newTodos,
      }),
      this.newTodos= ''
    },
    remove(i) {
      this.todos.splice(i, 1) //numero di elementi che voglio eliminare
    }
  }
});
