import React, { Component } from 'react';

class ChatRoom extends Component {
    constructor () {
        super();
        this.updateMessage = this.updateMessage.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.state = {
            message: '',
            messages: [
                {id: 0, text: 'hola'},
                {id: 1, text: 'que tal'},
                {id: 2, text: 'bien y tu'}
            
            ]
        }


    }

    updateMessage (event) {
        //console.log(event.target.value)
        this.setState({
            message:event.target.value
        });

    }

    submitMessage (){
        
        const message = {
            id: this.state.messages.length,
            text: this.state.message
        }
        let listMessages = this.state.messages;
        listMessages.push(message);
        this.setState({
            messages: listMessages
        });

        this.setState({message:''})
        console.log(message)
    }

    render() {
        const currentMessages = this.state.messages.map( (message, i) => {
            return (
                <li key={message.id} className="list-group-item list-group-item-action">{message.text}</li>
            )
        })
        return (
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        { currentMessages}
                    </ul>
                </div>
                <div className="card-footer">
                    <input value={this.state.message} onChange={this.updateMessage} type="text" placeholder="Escribe tu mensaje" className="form-control"/>
                    <button onClick={this.submitMessage} className="btn btn-primary btn-block mt-4">
                        Send message
                    </button>
                </div>
            </div>
        )
    }


}

export default ChatRoom;