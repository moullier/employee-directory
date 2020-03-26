import React from "react";

class Table extends React.Component {
    render() {
		const { data } = this.props;
  
        return (
			data.length > 0 && (
				<table className='text-left'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Net Worth</th>
						</tr>
					</thead>
					<tbody>
						{data.map(p => (
							<tr>
								<td>{p.name}</td>
								<td>${p.net_worth}b</td>
							</tr>
						))}
					</tbody>
				</table>
			)
		);
	}
}

export default Table;