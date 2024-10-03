import { useContext } from "react";
import { GlobalContext } from "../context";

function About() {

    const context = useContext(GlobalContext);

    if (!context) {
        return null;
    }

    const { user } = context;

    return (
        <>
            <h1>About {user.username}</h1>
        </>
    )
}

export default About;