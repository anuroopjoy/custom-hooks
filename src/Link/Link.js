import { useExperience } from "../Hooks/Experience";

function Link(props) {
    const isinexperienced = useExperience(props.level);
    return isinexperienced ? (
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    ) : null;
}

export default Link;
