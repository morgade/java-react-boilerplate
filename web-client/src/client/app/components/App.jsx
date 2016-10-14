import React from 'react';
import TitleBar from './titlebar/TitleBar.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default App;