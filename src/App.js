import './App.css';
import React from 'react';
import State from './usestate/state';
import Stateobj from './usestate/stateobj';
/*import Timer from './useeffect/effect';*/
import ThemeProvider from './usecontext/context2';
import ThemedComponent from './usecontext/context3'
import FocusInput from './useref/focus';
import Factorial from './usememo/factorial';
import ItemList from './usecallback/itemlist';
import Counter from './usereducer/reduce';

function App() {
  return (
    <div className="App">
      <h3>usestate hook</h3>
      <State/>
      <Stateobj/>
      {/*<h3>useeffect hook</h3>
      <Timer/>*/}
      <h3>usecontext hook</h3>
      <ThemeProvider>
      <ThemedComponent/>
      </ThemeProvider>
      <h3>useref hook</h3>
      <FocusInput/>
      <h3>usememo hook</h3>
      <Factorial/>
      <h3>usecallback hook</h3>
      <ItemList/>
      <h3>usereducer hook</h3>
      <Counter/>
      

      
    </div>
  );
}

export default App;
