class Hello extends React.Component {

    static defaultProps = {
        from: 'Anonymus',
        bangs:1
    }

    render() {
        let bangs = "!".repeat(this.props.bangs);
        return (
            <div>
                <p><h1>Hi {this.props.to} from {this.props.from} {bangs}</h1></p>
            </div>
        )
    }
}