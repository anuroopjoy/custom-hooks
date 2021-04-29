import { useExperience } from '../Hooks/Experience';

function Link(props) {
    const experience = useExperience(props.level);
    return experience ? (
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
