import React from 'react';
//import LocationStore from '../../stores/LocationStore.jsx';
//import LocationActions from '../../actions/LocationActions.jsx';

class TitleBar extends React.Component {

    constructor(props) {
        super(props);
//        this.state = LocationStore.getState();
    }

    componentDidMount() {
//        LocationStore.listen(this.setState.bind(this));
//        LocationActions.fetchLocations();
    }

    componentWillUnmount() {
//        LocationStore.unlisten(this.setState.bind(this));
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed">
                            <i className="fa fa-bars" />
                        </button>
                        <a className="navbar-brand">MIND THE HIPPO</a>
                    </div>
                </div>
            </nav>
        );
    }

}

export default TitleBar;