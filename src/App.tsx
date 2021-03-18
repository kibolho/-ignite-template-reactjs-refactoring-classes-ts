import GlobalStyle from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
