import { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState('');

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {today} 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if (newToDo.trim()) {
              setToDos([...toDos, { id: Date.now(), text: newToDo, status: false }]);
              setNewToDo(''); // Clear the input field
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>

      <div className="todos">
        {toDos.map((obj) => (
          <div key={obj.id} className="todo">
            <div className="left">
              <input
                type="checkbox"
                checked={obj.status}
                onChange={(e) => {
                  setToDos(
                    toDos.map((item) =>
                      item.id === obj.id ? { ...item, status: e.target.checked } : item
                    )
                  );
                }}
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        ))}

        {toDos
          .filter((obj) => obj.status)
          .map((obj) => (
            <h1 key={obj.id}>{obj.text}</h1>
          ))}
      </div>
    </div>
  );
}

export default App;
