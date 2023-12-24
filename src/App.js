import "./assets/app.scss";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
