// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Create from "@material-ui/icons/Create";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.jsx";
// Group Created pages
import Balance from "./components/Balance/balance";
import ExpenseForm from "./components/Expense-Form/expenseForm";

const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/expenseForm",
    name: "Expense Form",
    icon: Create,
    component: ExpenseForm,
    layout: "/admin"
  },
  {
    path: "/balance",
    name: "Balance",
    icon: "attach_money",
    component: Balance,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "table_chart",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/editprofile",
    name: "UserProfile",
    icon: Person,
    component: UserProfile, //UserProfile
    layout: "/admin"
  },

];
export default dashboardRoutes;
