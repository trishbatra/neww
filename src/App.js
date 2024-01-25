import React from 'react';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>
      <div id="section1">
        <h2>Section 1</h2>
        <img src="image1.jpg" alt="Image 1" />
        <button>Click me</button>
        <a href="#section2">Go to Section 2</a>
      </div>
      <div id="section2">
        <h2>Section 2</h2>
        <img src="image2.jpg" alt="Image 2" />
        <button>Click me</button>
        <a href="#section3">Go to Section 3</a>
      </div>
      <div id="section3">
        <h2>Section 3</h2>
        <img src="image3.jpg" alt="Image 3" />
        <button>Click me</button>
        <a href="#section1">Go to Section 1</a>
      </div>
    </div>
  );
}

export default App;