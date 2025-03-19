import { useState } from 'react';
import './App.css';
import CollaborativeEditor from './components/collaborative-editor';

// TextEditor Component
function TextEditor() {
  const [text, setText] = useState('');
  const [style, setStyle] = useState({ fontWeight: 'normal', textDecoration: 'none', fontStyle: 'normal' });

  const toggleBold = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontWeight: prevStyle.fontWeight === 'bold' ? 'normal' : 'bold',
    }));
  };

  const toggleUnderline = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      textDecoration: prevStyle.textDecoration === 'underline' ? 'none' : 'underline',
    }));
  };

  const toggleItalic = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      fontStyle: prevStyle.fontStyle === 'italic' ? 'normal' : 'italic',
    }));
  };

  return (
    <div>
      <div>
        <button onClick={toggleBold}>Bold</button>
        <button onClick={toggleUnderline}>Underline</button>
        <button onClick={toggleItalic}>Italic</button>
      </div>
      <textarea
        style={style}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h3>Collaborative Text Editor</h3>
      <div>
        <h2>Document Key:</h2>
        <input type="text" placeholder="Enter document key..." />
      </div>
      <div>
        <h2>Editor Content:</h2>
        <CollaborativeEditor documentKey={123}/>
      </div>

    </div>
  );
}

export default App;
