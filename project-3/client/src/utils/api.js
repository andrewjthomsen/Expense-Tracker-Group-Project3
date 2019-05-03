import axios from "axios";

export default {
    addExpense: function (expenseData) {
        console.log(expenseData);
        return axios.post("/api/users", expenseData);
    }
}