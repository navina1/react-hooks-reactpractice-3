import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import ComponentA from './components/ComponentA';
import { createContext } from 'react';


export const nameContext=createContext();
export const ageContext=createContext();
function App() {

  return (
    <div className="App">
      <ageContext.Provider value={24}>
        <nameContext.Provider value={{name:'John',age:20}}>
        <ComponentA/>
        </nameContext.Provider>
      </ageContext.Provider>
      {/* //for useEffect */}
      {/* <Post/> */}

      {/* //useContext */}
    </div>
  );
}

export default App;
