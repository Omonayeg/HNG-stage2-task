import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={<Home />} exact />
        <Route path="/contact" component={<Contact />} />
      </Switch>
    </BrowserRouter>
  );
}
