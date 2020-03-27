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

class Table extends React.Component {
	// declaring the default state
	state = {
		currentSort: 'default'
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

    render() {
		const { data } = this.props;
		const { currentSort } = this.state;
  
        return (
			data.length > 0 && (
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
					{[...data].sort(sortTypes[currentSort].fn).map(p => (
							<tr>
								<td>{p.name}</td>
								<td>{p.department}</td>
								<td>${p.salary}</td>
							</tr>
						))}
					</tbody>
				</table>
			)
		);
	}
}

export default Table;