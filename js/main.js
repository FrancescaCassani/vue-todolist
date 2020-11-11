/**VUE */
const batman = new Vue({
  el: "#batman",
  data: {
    newTodos: "",
    todos: [
      {text: "Seduce Catwoman", status: null},
      {text: "Kill Bane", status: null},
      {text: "Wash the Batmobile", status: null},
      {text: "Kill the Penguin", status: null},
      {text: "Kill the Joker", status: null}
    ],
    imgLink: "./img/clipart18626.png"
  },
  methods: {
    add() { 
      if (this.newTodos !== "") {
        this.todos.push({
          text: this.newTodos
        });
        this.newTodos= '' //per lasciare lo spazio vuoto appena aggiungi un todo
      }
    },
    checked(i) {
      this.todos[i].status = !this.todos[i].status;
    },
    remove(i) {
      this.todos.splice(i, 1) //numero di elementi che voglio eliminare
    },
    removeAll() {
      this.todos = [];
    }
  }
});
