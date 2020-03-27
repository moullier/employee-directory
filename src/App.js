import React from 'react';
import './App.css';
import Header from "./components/Header";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";

const tableData = [
	{
		name: 'Maria Francis-Moullier',
		department: "Web Development",
		salary: 60000
	},
	{
		name: 'Matthew Wierschem',
		department: "Management",
		salary: 60000
	},
	{
		name: 'Kenn Gaub',
		department: "Human Resources",
		salary: 50000
	},
	{
		name: 'Chris Cronenberg',
		department: "Data Analytics",
		salary: 80000
	},
	{
		name: 'Steve Jensen',
		department: "Data Analytics",
		salary: 75000
	},
	{
		name: 'Neil Kempton',
		department: "Manufacturing",
		salary: 65000
	},
	{
		name: 'Michael Reyes',
		department: "Training",
		salary: 85000
	},
	{
		name: 'Brian Houtman',
		department: "Design",
		salary: 55000
	}
];


function App() {
  return (
    <div>
      <Header />
      <SearchBar />
		  <Table data={tableData} />
    </div>
  );
}

export default App;
