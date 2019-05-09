// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
// core components/views for RTL layout
//import RTLPage from "views/RTLPage/RTLPage.jsx";
// Group Created pages
import Profile from "./views/Profile/profile";
<<<<<<< HEAD
import ExepenseForm from "./views/Expense-Form/expenseForm";
import SignUp from "./views/SignUp/signup";
import SignIn from "./views/SignIn/SignIn"
=======
import ExpenseForm from "./views/Expense-Form/expenseForm";
>>>>>>> fa3d94578b0f367d7efc4b2af0311e675e48726d
const dashboardRoutes = [
  {
    path: "/signin",
    name: "Sign In",
    icon: Dashboard,
    component: SignIn,
    layout: "/admin"
  },
  {
    path: "/signup",
    name: "Sign Up",
    icon: Dashboard,
    component: SignUp,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Balance",
    icon: Person,
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/expenseForm",
    name: "Expense Form",
    icon: "table_chart",
    component: ExpenseForm,
    layout: "/admin"
  },
  {
    path: "/test",
    name: "Table List",
    icon: "content_paste",
    component: UserProfile, //UserProfile
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  }
];
export default dashboardRoutes;
