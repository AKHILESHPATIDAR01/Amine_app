import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchDisplay from "./SearchDisplay";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container p-4 justify-content-center align-items-center">
      <h1 className="text-center">Anime Review System</h1>
      <Switch>
        <Route path="/" component={SearchDisplay} exact />
      </Switch>
    </div>
  );
}

export default App;
