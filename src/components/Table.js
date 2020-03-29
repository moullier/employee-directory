import React from "react";
import API from "../utils/API";
import "./style.css";

const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.age - b.age
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.age - a.age
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
};

class Table extends React.Component {
	// declaring the default state
	state = {
		currentSort: 'default',
		empFilter: "",
		empList: []
	};


	// method called every time the sort button is clicked
	// it will change the currentSort value to the next one
	onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === 'down') nextSort = 'up';
		else if (currentSort === 'up') nextSort = 'default';
		else if (currentSort === 'default') nextSort = 'down';

		this.setState({
			currentSort: nextSort
		});
	};
	
	componentDidMount() {
		this.getRandomUsers();
	}

	getRandomUsers = () => {
		API.search()
		.then(res => {
			console.log(res);
			let tempUserArray = [];
			res.data.results.forEach(e => {
				console.log("e = ");
				console.log(e);
				tempUserArray.push({
					name: e.name.first + " " + e.name.last,
					location: e.location.state,
					age: e.dob.age,
					id: tempUserArray.length + 1
				});
				console.log(tempUserArray);
				});
			this.setState({empList: tempUserArray});
			})
//		.then(res => this.setState({ results: res.data.data }))
		.catch(err => console.log(err));
	  };

	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();
	
		// Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
		alert(`${[...this.state.empList].filter(this.filterList).length} employees found matching filter`);
		// this.setState({
		//   empFilter: ""
		// });
	};

	handleInputChange = event => {
		// Getting the value and name of the input which triggered the change
		const { name, value } = event.target;
	
		console.log(`name is ${name}, value is ${value}`);
		// Updating the input's state
		this.setState({
			empFilter: value
		});
	  };

	filterList = e => {
		// console.log("in filterList function");
		// console.log(e.name);
		// console.log(this.state.empFilter);
		return e.name.toLowerCase().includes(this.state.empFilter.toLowerCase());
	}


    render() {
		// const { data } = this.props;
		const { currentSort } = this.state;
  
        return (
			<div className="container">
				<div className="wrap">
					<div className="search">
						<input
							type="text"
							className="searchTerm"
							onChange={this.handleInputChange}
							placeholder="Filter Employees by Name"
							name="filterBar"
						/>
						<button type="submit" onClick={this.handleFormSubmit} className="searchButton">
							<i className="fa fa-search"></i>
						</button>
					</div>
				</div>
				<div className="tableDiv d-flex justify-content-center">
					<table className='text-left dataTable'>
						<thead>
							<tr>
								<th>Name</th>
								<th>Location</th>
								<th>Age
									<button className="sortButton" onClick={this.onSortChange}>
										<i className={`fas fa-${sortTypes[currentSort].class}`} />
									</button>
								</th>
							</tr>
						</thead>
						<tbody>
						{[...this.state.empList].filter(this.filterList).sort(sortTypes[currentSort].fn).map(p => (
								<tr>
									<td>{p.name}</td>
									<td>{p.location}</td>
									<td>{p.age}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Table;