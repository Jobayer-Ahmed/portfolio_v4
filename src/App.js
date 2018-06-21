import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './App.css';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
const signature = require('./img/signature.png');

class App extends Component {
	constructor(props) {
		super(props);
		autoBind(this);
		this.state = {
			p1: 'current',
			p2: 'right',
			p3: 'outter',
			p4: 'left'
		}
	}

	changePositions(arr) {
		this.setState({ p1: arr[0], p2: arr[1], p3: arr[2], p4: arr[3] });
	}

    leftOverly() {
        let position = [this.state.p1, this.state.p2, this.state.p3, this.state.p4];
        let arr = []
        let currentIndexPosition = position.indexOf('current')
        
        if(currentIndexPosition === 0) {
            arr = [ "right", "outter", "left", "current" ];
        } else if (currentIndexPosition === 3) {
            arr = [ "outter", "left", "current", "right" ];
        } else if (currentIndexPosition === 2) {
            arr = [ "left", "current", "right", "outter" ]
        } else {
            arr = [ "current", "right", "outter", "left" ]
        }
        this.changePositions(arr)

        // console.log(arr)
        // console.log(currentIndexPosition)
    }

    rightOverly() {
        let position = [this.state.p1, this.state.p2, this.state.p3, this.state.p4];
        let arr = []
        let currentIndexPosition = position.indexOf('current')

        if(currentIndexPosition === 0) {
            arr = [ "left", "current", "right", "outter" ];
        } else if (currentIndexPosition === 3) {
            arr = [ "current", "right", "outter", "left" ];
        } else if (currentIndexPosition === 2) {
            arr = [ "right", "outter", "left", "current" ]
        } else {
            arr = [ "outter", "left", "current", "right" ]
        }
        this.changePositions(arr)

        // console.log(position)
        // console.log(currentIndexPosition)
    }

    leftKeyDown(e) {
        const ref = this;
        switch (e.keyCode) {
            case 37:
                ref.leftOverly();
                break;
            default:
                break;
        }
    }

    rightKeyDown(e) {
        const ref = this;
        switch (e.keyCode) {
            case 39:
                ref.rightOverly();
                break;
            default:
                break;
        }
    }

    componentWillMount() {
        document.addEventListener("keydown", this.leftKeyDown.bind(this));
        document.addEventListener("keydown", this.rightKeyDown.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.leftKeyDown.bind(this));
        document.removeEventListener("keydown", this.rightKeyDown.bind(this));
    }

    render() {
    	const ref = this;
        const about = ['current', 'right', 'outter', 'left'];
        const portfolio = ['left', 'current', 'right', 'outter'];
        const contact = ['outter', 'left', 'current', 'right'];
        const resume = ['right', 'outter', 'left', 'current'];
        return (
            <div className="App">
                <div className="header">
                    <div className="author_signature">
                        <a href="" className="maxw">
                            <img src={signature} alt="signature" width="100%"/>
                        </a>
                    </div>
                    <div className="author_title">Junior Frontend Developer</div>
                    <div className="navbar">
                        <ul className="navs">
                            <li className={ref.state.p1}>
                                <a href="# " onClick={() => ref.changePositions(about)}>about me</a>
                            </li>
                            <li className={ref.state.p2}>
                                <a href="# " onClick={() => ref.changePositions(portfolio)}>portfolio</a>
                            </li>
                            <li className={ref.state.p3}>
                                <a href="# " onClick={() => ref.changePositions(contact)}>contact</a>
                            </li>
                            <li className={ref.state.p4}>
                                <a href="# " onClick={() => ref.changePositions(resume)}>resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="wrapper">
                    <About classs={ref.state.p1}/>
                    <Portfolio classs={ref.state.p2}/>
                    <Contact classs={ref.state.p3}/>
                    <Resume classs={ref.state.p4}/>
                </div>
                <div className="overly">
                    <div className="left_overly" onClick={ref.leftOverly}></div>
                    <div className="right_overly" onClick={ref.rightOverly}></div>
                </div>
            </div>
        );
    }
}

export default App;