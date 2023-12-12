import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import ComponentA from './components/ComponentA';
import { createContext } from 'react';
import BorderComponent from './components/HigherOrderComponent/BorderComponent';
import Counter from './components/HigherOrderComponent/Counter';


export const nameContext=createContext();
export const ageContext=createContext();
function App() {

  return (
    <div className="App">
      {/* //use Context
      <ageContext.Provider value={24}>
        <nameContext.Provider value={{name:'John',age:20}}>
        <ComponentA/>
        </nameContext.Provider>
      </ageContext.Provider> */}


      {/* //for useEffect */}
      {/* <Post/> */}

      <BorderComponent props={"static"}>
         <h1>Passing Html component also</h1>
      </BorderComponent>
      <BorderComponent props={"red"} color="red">
         <h1>Dynamically setting color also</h1>
      </BorderComponent>


      {/* here borderComponent is higher order component which take counter component */}
      <BorderComponent>
        <Counter/>
      </BorderComponent>
    </div>
  );
}

export default App;
