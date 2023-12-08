// App.js
import React,{useState} from 'react';
import NavbarComponent from './NavbarComponent';
import Heading from './Heading';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeListView from './EmployeeListView';




function App() {

  const [view,setView] = useState(true)
  const toggleHandler =(e)=>{
    e.preventDefault();
    setView(false)
  }
  const toggleHandler1=(e)=>{
    e.preventDefault();
    setView(true)
  }
 
  return (
    <div className="App">
      < NavbarComponent/>
      <Heading toggleHandler={toggleHandler} toggleHandler1={toggleHandler1} />
      <EmployeeForm/>
      {view ? <EmployeeList /> : <EmployeeListView />}
     

         {/* Your other components go here */}
    </div>
  );
}

export default App;
