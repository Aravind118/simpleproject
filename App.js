

import './App.css';
import HandleAssignment from './assignment1';
import Sample from './multiselectcomponent';







function App() {
  const data=['ar','bf']
  return (
    <div className="App">
      <select  option={data}/>
      <HandleAssignment/>
     
      <Sample/>
     
     
    </div>
  );
}

export default App;
