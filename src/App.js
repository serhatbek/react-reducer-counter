import './App.css';
import { useReducer } from 'react';

const initialState = {
  num: 0,
};

const reducerFn = (prevState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { num: prevState.num + action.payload };

    case 'DECREASE':
      return { num: prevState.num - 1 };

    default:
      return { num: prevState.num };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <main>
      <div>
        <button onClick={() => dispatch({ type: 'INCREASE', payload: 4 })}>
          Increase 4
        </button>
        <button onClick={() => dispatch({ type: 'DECREASE' })}>
          Increase 1
        </button>
        <p>{state.num}</p>
      </div>
    </main>
  );
}

export default App;
