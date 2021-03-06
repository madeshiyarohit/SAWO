import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/layout";
import Blog from "./pages/blog/blog";
import useLocalStorage from "use-local-storage";
import Single from "./pages/single/single";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Layout themeToggle={switchTheme}>
          <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/single/:slug" component={Single} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
export default App;
