/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const [employees, setEmployees] = useState([]) 
  useEffect(() => {
    axios
      .get('http://localhost:3001/employees')
      .then(response => {
        setEmployees(response.data)
      })
  }, [])
  function Employee(props) {
    return (
      <div className="personal-tag">
      <img src={props.employee.image}></img>
        <div class='info'>
          <h3>{props.employee.lastName} {props.employee.firstName}</h3>
          <p>{props.employee.title} @ {props.employee.department}</p>
          <p>{props.employee.email}</p>
          <p>{props.employee.phone}</p>
        </div>
      </div>
    )
  }
  const employeeItems = employees.map((employee,index) =>
  <Employee key={index} employee={employee}/>
);

  return (
    <div className="App">
       {employeeItems}
  </div>
  );
}

export default App;

