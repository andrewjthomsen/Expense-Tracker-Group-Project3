import { cardTitle, title } from "../material-kit-react.jsx";
import imagesStyle from "../components/imagesStyles";

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "black"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
