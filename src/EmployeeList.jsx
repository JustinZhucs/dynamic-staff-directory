import { useState, useEffect } from 'react';
import employees from './employees';

const EmployeeList = () => {
    const [displayedEmployees, setDisplayedEmployees] = useState([]); // []: empty array
    const [cursor, setCursor] = useState(0);
    const [loading, setLoading] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

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

    function RandomColor() {
    const [color, setColor] = useState('#000000');
        
    function generateColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setColor('#' + randomColor);
    }
    }
    
    return (
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Employee List</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {displayedEmployees.map(employee => (
              <div key={employee.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-lg font-bold">{employee.name}</p>
                <p className="text-sm">{employee.position}</p>
              </div>
            ))}
          </div>
    
          {!allLoaded ? (
            <button
              onClick={() => { 
                loadMoreEmployees(); 
                generateColor(); 
              }}
              className="bg-color text-white font-semibold py-2 px-4 rounded mt-4"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          ) : (
            <p className="mt-4 text-gray-500">All employees loaded</p>
          )}
        </div>
      );
    };
    
    export default EmployeeList;