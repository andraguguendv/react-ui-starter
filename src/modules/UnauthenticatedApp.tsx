import Login from "../pages/login/Login";

const UnauthenticatedApp = ({submitCredentials}: { submitCredentials: any }) => {
    return <div>
        <Login submitCredentials={submitCredentials}/>
    </div>
}

export default UnauthenticatedApp;
