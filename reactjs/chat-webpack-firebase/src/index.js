import React, { Component } from 'react';
import { render } from 'react-dom';

// Componentes
import ChatRoom from './components/ChatRoom'

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-primary">
                    <a href="" className="navbar-brand text-white">Chat React</a>

                </nav>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <ChatRoom/>
                        </div>
                    </div>

                </div>
            </div>
        )

    }
}

render(
    <App/>,
    document.getElementById('app')
);