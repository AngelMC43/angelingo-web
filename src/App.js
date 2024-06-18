import { LoginContextProvider } from "./context/LoginContext";
import { RoutesComponent } from "./routes/RoutesComponent";
import "./App.css";

function App() {
  return (
    <LoginContextProvider>
      <RoutesComponent />
    </LoginContextProvider>
  );
}

export default App;
