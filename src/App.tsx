import { useCallback } from "react";
import { ResponseHandlerProvider } from "./context/ResponseHandlerContext";
import { api } from "./services/api";
import "./App.css";

function App() {
  const makeRequest = useCallback(async () => {
    const response = await api.get("/home");
    console.log("Success", response.data);
  }, []);

  return (
    <ResponseHandlerProvider>
      <div className="App">
        <div className="card">
          <button onClick={makeRequest}>Make request</button>
        </div>
      </div>
    </ResponseHandlerProvider>
  );
}

export default App;
