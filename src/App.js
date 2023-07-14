import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <div className="App">
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <Login />
          <Logout />
          <Profile />
        </>
      )}
    </div>
  );
}

export default App;
