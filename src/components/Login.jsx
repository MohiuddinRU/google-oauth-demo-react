import { GoogleLogin } from "react-google-login";

function Login() {
    function onSuccess(res) {
        console.log("Success Logging In", res);
    }

    function onFailure(res) {
        console.log("Failed Loggging in", res);
    }

    return (
        <div id="singInButton">
            <GoogleLogin
                clientId={process.evn.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}
export default Login;
