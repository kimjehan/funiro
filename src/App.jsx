import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  let error = false;

  if (text.length < 8) {
    error = true;
  }

  return (
    <div className='app'>
      <div>Придумайте пароль</div>
      <input
        type='text'
        onChange={(e) => {
          const input = e.target.value;
          setText(input);
        }}
      />

      {error === false && (
        <div className='btns'>
          <button>Изменить пароль</button>
        </div>
      )}
    </div>
  );
}

export default App;
