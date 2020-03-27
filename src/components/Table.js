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
    render() {
		const { data } = this.props;
  
        return (
			data.length > 0 && (
				<table className='text-left dataTable'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Department</th>
							<th>Salary</th>
						</tr>
					</thead>
					<tbody>
						{data.map(p => (
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