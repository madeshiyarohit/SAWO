import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/layout";
import Blog from "./pages/blog/blog";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Blog} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
