import React from "react";



const sortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.salary - b.salary
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.salary - a.salary
	},
	default: {
		class: 'sort',
		fn: (a, b) => a
	}
};

// function filterFunction(filter) {
// 	console.log("filter is ");
// 	console.log(filter);
// 	return true;
// }



class Table extends React.Component {
	// declaring the default state
	state = {
		currentSort: 'default',
		empFilter: ""
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

	handleFormSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();
	
		// Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
		alert(`Hello ${this.state.empFilter}`);
		this.setState({
		  empFilter: ""
		});
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
		console.log("in filterList function");
		console.log(e.name);
		console.log(this.state.empFilter);
		return e.name.toLowerCase().includes(this.state.empFilter.toLowerCase());
	}


    render() {
		const { data } = this.props;
		const { currentSort } = this.state;
  
        return (
			<div>
				<div className="wrap">
					<div className="search">
						<input
							type="text"
							className="searchTerm"
							onChange={this.handleInputChange}
							placeholder="Filter Employees"
							name="filterBar"
						/>
						<button type="submit" onClick={this.handleFormSubmit} className="searchButton">
							<i className="fa fa-search"></i>
						</button>
					</div>
				</div>
					<table className='text-left dataTable'>
						<thead>
							<tr>
								<th>Name</th>
								<th>Department</th>
								<th>Salary
									<button className="sortButton" onClick={this.onSortChange}>
										<i className={`fas fa-${sortTypes[currentSort].class}`} />
									</button>
								</th>
							</tr>
						</thead>
						<tbody>
						{[...data].filter(this.filterList).sort(sortTypes[currentSort].fn).map(p => (
								<tr>
									<td>{p.name}</td>
									<td>{p.department}</td>
									<td>${p.salary}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
		);
	}
}

export default Table;