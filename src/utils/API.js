import axios from "axios";

const queryURL = "https://randomuser.me/api/?results=10&nat=us";

export default {
    search: function () {
        return axios.get(queryURL);
            // .then(
            //     console.log(res.data)
            //     res => {
            //     const employees = res.data.results;
            //     console.log(res.data.results[0]);
            //     return employees.map(employee => {
            //         return{
            //             image: employee.image,
            //             firstName: employee.name.first,
            //             lastName: employee.name.last,
            //             phone: employee.phone,
            //             email: employee.email,
            //             gender: employee.gender
            //         }

            //     })

            // }
            // )
    }
}; 