import { useState, useEffect } from 'react';
import employees from './employees';

const EmployeeList = () => {
    const [displayedEmployees, setDisplayedEmployees] = useState([]); // []: empty array
    const [cursor, setCursor] = useState(0);
    const [loading, setLoading] = useState(false);
    const [AllLoaded, setAllLoaded] = useState(false);

    const getEmployees = async (startCursor, count) => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay
        return employees.slice(startCursor, startCursor + count); // Return 'count' employees starting from cursor
    };

    const loadMoreEmployees = async () => {
        setLoading(true);
        const newEmployees = await getEmployees(cursor, 12); // Fetch 12 more employees
        setDisplayedEmployees(prevEmployees => [...prevEmployees, ...newEmployees]); // Add new employees to the list
        setCursor(prevCursor => prevCursor + 12); // Update cursor to next 12 employees
        setLoading(false);

        if (cursor + 10 >= employees.length) {
            setAllLoaded(true);
          }
    };

    useEffect(() => {
        loadMoreEmployees();
    }, []);

    
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
