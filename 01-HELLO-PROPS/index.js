class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    bangs={4}
                    img="https://images.unsplash.com/photo-1622987437805-5c6f7c2609d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));