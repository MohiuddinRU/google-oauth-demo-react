import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";

function App() {
    useEffect(() => {
        function start() {
            gapi.client.init({
                client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: "",
            });
        }
        gapi.load("client:auth2", start);
    }, []);

    return (
        <div className="App">
            <Login />
            <Logout />
        </div>
    );
}

export default App;
