import logo from './logo.svg';
import './App.css';
import Text from './Text/Text';
import Link from './Link/Link';

function App() {
    const experienceLevel = 'sr';
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Text level={experienceLevel}></Text>
                <Link level={experienceLevel}></Link>
            </header>
        </div>
    );
}

export default App;
