import { ResearchNavigation } from "./components/includes/NavigationMenu";
import { ResearchFooter } from "./components/includes/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <ResearchNavigation />
      <Outlet />
      <ResearchFooter />
    </>
  );
}

export default App;
