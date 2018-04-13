var app = new Vue({
  el: '#component',
  data: {
    todos: [
     {
       name: 'Pick up kids from school',
       done: true
     },
     {
       name: 'Learn Haskell',
       done: false
     },
     {
       name: 'Sleep',
       done: false
     }
    ],
    workingName: '',
    feedback: ''
  },
  methods: {
    add(e) {
      e.preventDefault();
      this.todos.push({
        name: this.workingName,
        done: false
      });
      this.feedback = `${this.workingName} added`;
      this.workingName = '';
    },
    remove(index, name) {
      this.todos.splice(index, 1);
      document.getElementById('todos-label').focus();
      this.feedback = `${name} deleted`;
    }
  },
  computed: {
    validity() {
      return this.workingName.trim() === '';
    }
  }
});