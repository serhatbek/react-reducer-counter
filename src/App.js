import './App.css';
import { useReducer } from 'react';

const initialState = {
  num: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <main>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>Ekle</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>Çıkar</button>
    </main>
  );
}

export default App;
