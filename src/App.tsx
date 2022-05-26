import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://spng.subpng.com/20180317/vie/kisspng-psychology-mind-psychologist-clip-art-brain-relaxing-cliparts-5aad8010187c63.4954245515213199521003.jpg"/>
            </header>
            <nav className='nav'>
                <div><a >Profile</a></div>
                <div><a >Message</a></div>
                <div><a >News</a></div>
                <div><a >Music</a></div>
                <div><a >Settings</a></div>
            </nav>
            <div className='content'>Main content</div>

        </div>
    );
}


export default App;
