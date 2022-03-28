import { atom, selector } from "recoil";

const openState = atom({
  key : 'openState',
  default : false
})

const todoListState = atom({
  key : 'todoList',
  default : [
    {
      id : 0,
      title : 'eat',
      isComplete : false,
    },
    {
      id : 1,
      title : 'count',
      isComplete : false,
    },
    {
      id : 2,
      title : 'read',
      isComplete : true,
    },
    {
      id : 3,
      title : 'play',
      isComplete : true,
    },
  ]
})

const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show Uncompleted',
});

const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

const data = selector({
  key : 'data',
  get : async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todo/')
    
    if(response.status > 400){
      throw new Error('Got error')
    }
    const data = await response.json()

    return data
  }
})

export {
  openState,
  todoListState,
  filteredTodoListState,
  data
}