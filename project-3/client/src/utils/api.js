import axios from "axios";

export default {addExpense: function (expenseData) {
    return axios.post("http://localhost:3001/api/users", expenseData);

}}