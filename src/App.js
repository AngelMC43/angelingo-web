import { LoginContextProvider } from "./context/LoginContext";
import { RoutesComponent } from "./routes/RoutesComponent";
import "./App.css";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <LoginContextProvider>
      <AppLayout>
        <RoutesComponent />
      </AppLayout>
    </LoginContextProvider>
  );
}

export default App;
