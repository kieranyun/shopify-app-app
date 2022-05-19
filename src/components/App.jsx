import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // send the contents of the text area to the AI API
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <textarea id="prompt" name="prompt" rows="10" cols="50" placeholder="write text here to be sent to the AI for processing" value={text} onChange={(e) => { setText(e.target.value); }} />
          <input type="submit" onClick={handleSubmit} value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
