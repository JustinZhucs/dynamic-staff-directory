import { useState, useEffect } from 'react';
import employees from './employees';

const EmployeeList = () => {
    const [displayedEmployees, setDisplayedEmployees] = useState([]); // []: empty array
    const [cursor, setCursor] = useState(0);
    const [loading, setLoading] = useState(false);
    const [AllLoaded, setAllLoaded] = useState(false);

    

    
  return (
    <div>
      {employees.map((employee, index) => {
        return (
          <div key={index}>
            <h1>{employee.name}</h1>
            <p>{employee.position}</p>
          </div>
        )
        })}
    </div>
  )
}   


export default EmployeeList;
