import { ToastContainer } from "react-toastify";
import { Routes } from "./Routes/Routes";
import { GlobalStyle } from "./Styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
