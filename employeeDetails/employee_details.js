const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'John Carter', age: 27, department: 'Vigilance', salary: 55000 },
    { id: 5, name: 'Peter Parker', age: 28, department: 'Media', salary: 70000 },
    { id: 6, name: 'Krishna', age: 25, department: 'Electricals', salary: 40000 }
  ];

 // Function to display all employees
 const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
 function displayEmployees(){
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

 function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((temp, employee) => temp + employee.salary, 0);
    alert(`Total Salaries : $${totalSalaries}`);
 }

function displayHREmployees(){
    const hrEmployees = employees.filter(emp => emp.department === 'HR');
    const hrEmployeesDisplay = 
        hrEmployees.map((emp, index) => `<p>${emp.id}: ${emp.name}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(empId){
    const foundEmp = employees.find(emp => emp.id === empId);
    if(foundEmp){
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmp.id}: ${foundEmp.name}: ${foundEmp.age} - ${foundEmp.department} - $${foundEmp.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee found with this ID';
    }
}

