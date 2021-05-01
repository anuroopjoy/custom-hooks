import { useExperience } from '../Hooks/Experience';

function Text(props) {
    const isinexperienced = useExperience(props.level);
    return <p>I am a {isinexperienced ? 'junior' : 'senior'} developer</p>;
}

export default Text;
