import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>this a demo</h1>, document.getElementById("root"));

function Hello() {
    return <h1>Hello world123</h1>;
}

const element = <Hello />;

// ReactDOM.render(element, document.getElementById("root"));

// Component;

function Name() {
    return <h1>姓名:Cheung</h1>;
}

function Age() {
    return <h1>年龄:27</h1>;
}

function Style() {
    return <h1>猛男</h1>;
}

ReactDOM.render(
    <div>
        <Name />
        <Age />
        <Style />
    </div>,
    document.getElementById("root")
);

//class

// class Index extends React.Component {
//     constructor() {
//         super();
//         this.state = { count: 0 };
//     }

//     render() {
//         return <h1>count:{this.state.count}</h1>;
//     }
// }

// ReactDOM.render(<Index />, document.getElementById("root"));

// class Index extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//         this.add = this.add.bind(this);
//         this.inc = this.inc.bind(this);
//     }
//     add() {
//         this.setState({ count: this.state.count + 1 });
//     }

//     inc() {
//         this.setState({ count: this.state.count - 1 });
//     }

//     render() {
//         return (
//             <>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.add}>CLICK++</button>
//                 <button onClick={this.inc}>CLICK-1</button>
//             </>
//         );
//     }
// }
// ReactDOM.render(<Index />, document.getElementById("root"));

class Index extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <h2>i ma index(father) transfer soon data</h2>
                <Demo value={123} />
            </>
        );
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { indexValue: this.props.value };
    }

    render() {
        return (
            <>
                <h1>
                    this is my father give me data : {this.state.indexValue}{" "}
                </h1>
            </>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));

function tick() {
    const element = (
        <div>
            <h1>nowtime:</h1>
            <h2>{new Date().getTime}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById("root"));
}
