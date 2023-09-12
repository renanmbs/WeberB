import './App.css';
import { Roster } from './components/roster/roster';

function App() {
  return (

    <>
      <div id='back'>

        <div id='box'>
          <h1>Weber State University</h1>
          <img src="/images/symbol2.svg" alt='Weber State Logo'/>
          <h2>Men's Soccer </h2>
          <h3>Black Squad</h3>
        </div>
      </div>

      <div>
        <Roster/>
      </div>
  
    </>
  );
}

export default App;
