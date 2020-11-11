/**VUE */
const batman = new Vue({
  el: "#batman",
  data: {
    newTodos: "",
    todos: [
      {text: "Seduce Catwoman"},
      {text: "Kill Bane"},
      {text: "Wash the Batmobile"},
      {text: "Kill the Penguin"},
      {text: "Kill the Joker"}
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
    remove(i) {
      this.todos.splice(i, 1) //numero di elementi che voglio eliminare
    },
    removeAll() {
      this.todos = [];
    }
  }
});
