import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const TableItem = ({ people }) => {
  const [salaryPerDay, setSalaryPerDay] = useState(people.salaryPerDay);
  const [days, setDays] = useState(people.days);

  const handleSalaryPerDayChange = (event) => {
    setSalaryPerDay(event.target.value);
  };

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const calculateTotalSalary = () => {
    return salaryPerDay * days;
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Day of work</th>
          <th>Salary Per Day</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{people.name}</td>
          <td>{people.surname}</td>
          <td>
            <input type="number" value={days} onChange={handleDaysChange} />
          </td>
          <td>
            <input
              type="number"
              value={salaryPerDay}
              onChange={handleSalaryPerDayChange}
            />
          </td>
          <td>{calculateTotalSalary()}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableItem;
