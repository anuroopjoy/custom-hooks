import { useExperience } from '../Hooks/Experience';

function Text(props) {
    const experience = useExperience(props.level);

    return <p>I am a {experience ? 'junior' : 'senior'} developer</p>;
}

export default Text;
