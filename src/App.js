import "./styles.css";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div className="App">
      <Main />
      <ToastContainer />
    </div>
  );
}
