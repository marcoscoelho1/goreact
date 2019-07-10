const INITIAL_STATE = [{ id: 1, text: 'fazer café' }, { id: 2, text: 'Estudar React' }];

export default function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
