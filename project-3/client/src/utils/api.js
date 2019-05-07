import axios from "axios";

export default {
  // Get all expenses
  getExpenses: function() {
    return axios.get("/api/users");
  },

  // Get a specific expense defined by "id"
  getExpense: function(id) {
    return axios.get("/api/users/" + id);
  },

  // Add new expense
  addExpense: function(expenseData) {
    console.log(expenseData);
    return axios.post("/api/users", expenseData);
  },

  // Delete a specific expense defined by "id"
  deleteExpense: function(id) {
    return axios.delete("/api/users/" + id);
  }
};
