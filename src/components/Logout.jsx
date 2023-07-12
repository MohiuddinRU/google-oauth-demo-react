import { GoogleLogout } from "react-google-login";

function Logout() {
    function onSuccess(res) {
        console.log("Logout successful", res);
    }

    function onFailure(res) {
        console.log("Logout failed ", res);
    }

    return (
        <div id="singInButton">
            <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onSuccess={onSuccess}
            />
        </div>
    );
}
export default Logout;
