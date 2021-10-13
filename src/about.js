import logo from './logo.svg';
import './App.css';

export default function About() {
    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                This is an About page
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                About React
            </a>
            </header>
        </div>
    );
}