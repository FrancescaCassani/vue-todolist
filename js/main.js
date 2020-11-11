/**VUE */
const batman = new Vue({
  el: "#batman",
  data: {
    newTodos: "",
    todos: [
      {text: "Seduce Catwoman", done: null},
      {text: "Kill Bane", done: null},
      {text: "Wash the Batmobile", done: null},
      {text: "Kill the Penguin", done: null},
      {text: "Kill the Joker", done: null},
    ],
    imgLink: "./img/clipart18626.png"
  },
  methods: {
    add() { 
      if (this.newTodos !== "") {
        this.todos.push({
          text: this.newTodos,
          done: null
        });
        this.newTodos= '' //per lasciare lo spazio vuoto appena aggiungi un todo
      }
    },
    checked(i) {
      if(this.todos[i].done === null) {
        this.todos[i].done = "done"
      } else {
        this.todos[i].done = null
      }
    },
    remove(i) {
      this.todos.splice(i, 1) //numero di elementi che voglio eliminare
    },
    removeAll() {
      this.todos = [];
    }
  }
});
