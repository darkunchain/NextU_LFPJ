class App extends React.Component {

    clickHandler(){
        alert('Works!')
    }
    render() {
        return (
        <button onClick={() => this.clickHandler()}> Click</button>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)