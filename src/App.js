import logo from './logo.svg';
import Nav from './views/Nav'
import './App.css';

function App() {
  const handleClick = () => {
    console.log("click is working");
  }

  return (
    <div className="App">
        <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello react Hooks with TranDuoc</h1>
        <input type="text" />
          <button type="button" onClick={()=> handleClick()}>click me</button>
      </header>
    </div>
  );
}

export default App;
