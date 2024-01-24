import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Multipage from "./pages/Multipage";
import Works from "./pages/Works";
import WorkDetails from "./pages/WorkDetails";
import WorkDetails2 from "./pages/WorkDetails2";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/multipage" component={Multipage} exact />

        {/* For Multipage */}
        <Route path="/multipage" component={Multipage} exact />
        <Route path="/works" component={Works} exact />
        <Route path="/works/:id/:title" component={WorkDetails} />
        <Route path="/work-details/:id/:title" component={WorkDetails2} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
