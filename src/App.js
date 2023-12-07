// App.js
import React,{useState} from 'react';
import NavbarComponent from './NavbarComponent';
import Heading from './Heading';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';
import EmployeeListView from './EmployeeListView';




function App() {

  const [isCardView, setCardView] = useState(true);

  const handleCardView = () => {
    setCardView((prevView) => !prevView);
  };

    const handleListView = () => {
      setCardView(false);
   
   
  };

  return (
    <div className="App">
      < NavbarComponent/>
      <Heading handleCardView={handleCardView}  handleListView={handleListView}/>
      <EmployeeForm/>
      {isCardView ? <EmployeeList /> : <EmployeeListView />}

         {/* Your other components go here */}
    </div>
  );
}

export default App;
