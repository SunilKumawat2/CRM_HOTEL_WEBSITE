import AllRoutes from "./allroutes/AllRoutes";
import "../src/assets/style.css"
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <ToastContainer />
    </div>
  );
}

export default App;
