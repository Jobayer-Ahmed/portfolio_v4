import React, { Component } from 'react';
import './Portfolio.css';
const todolist = require('../img/todolist.png');
const cosco = require('../img/cosco.png');
const markdown_previewer = require('../img/markdown_previewer.png');
const uxGradients = require('../img/uxGradients.png');
const pomodoroClock = require('../img/pomodoroClock.png');
const javaScriptCalculator = require('../img/javaScriptCalculator.png');
const FoxSec = require('../img/FoxSec.png');
const pureCssParallax = require('../img/pureCssParallax.png');
const TicTacToe = require('../img/TicTacToe.png');
const SimonGame = require('../img/SimonGame.png');
const reactWeatherApp = require('../img/reactWeatherApp.png');
const tributePage = require('../img/tributrPage.png');

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showWeb: true,
			showAPI: true
		}
		this.showAll = this.showAll.bind(this)
		this.showAPI = this.showAPI.bind(this)
		this.showWeb = this.showWeb.bind(this)
	}

	showWeb() {
		this.setState({showWeb: true, showAPI: false})
		this.showAll();
	}

	showAPI() {
		this.setState({showWeb: false, showAPI: true})
		this.showAll();
	}

	showAll() {
		this.setState({showAPI: true, showWeb: true})
	}

    render() {
    	const ref = this;
    	// let portfolios = [todolist, cosco, markdown_previewer, uxGradients, pomodoroClock, javaScriptCalculator, FoxSec, pureCssParallax, TicTacToe, SimonGame, reactWeatherApp, tributePage];
        return (
            <section className={ref.props.classs} id="portfolio">
                <h2 className="title_section text-center">
    				<span>
    					<i className="fa fa-leaf" aria-hidden="true"></i>
						MY WORKS
    				</span>
    			</h2>
    			<div className="trigger_buttons">
    				<ul>
    					<li>
    						<a href="# " className="active" onClick={ref.showAll}>ALL</a>
    					</li>
    					<li>
    						<a href="# " onClick={ref.showWeb}>WEB</a>
    					</li>
    					<li>
    						<a href="# " onClick={ref.showAPI}>API</a>
    					</li>
    				</ul>
    			</div>
    			<div className="portfolios">
	    			<div className="container-fluid">
	    				<div className="row">
	    					<div className="col-md-6 col-sm-12 col-lg-4">
	    						<div className={ref.state.showAPI ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/react_todolist">
											<div className="image_box">
												<img src={todolist} alt="React Todolist" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Todo App Made with ReactJS</div>
										</div>
									</div>
								</div>
								<div className={ref.state.showWeb ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/javaScriptCalculator">
											<div className="image_box">
												<img src={javaScriptCalculator} alt="Javascript Calculator" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Javascript Calculator</div>
										</div>
									</div>
								</div>
								<div className={ref.state.showWeb ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/SimonGame">
											<div className="image_box">
												<img src={SimonGame} alt="SimonGame" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Simon Game Made with vanillaJS</div>
										</div>
									</div>
								</div>
	    					</div>
	    					<div className="col-md-6 col-sm-12 col-lg-4">
	    						<div className={ref.state.showAPI ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/reactWeatherApp">
											<div className="image_box">
												<img src={reactWeatherApp} alt="reactWeatherApp" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Weather App Made with ReactJS</div>
										</div>
									</div>
								</div>
								<div className={ref.state.showWeb ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/markdown_previewer">
											<div className="image_box">
												<img src={markdown_previewer} alt="Markdown Previewer" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Markdown Previewer Made with ReactJS</div>
										</div>
									</div>
								</div>
								<div className={ref.state.showWeb ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/TicTacToe">
											<div className="image_box">
												<img src={TicTacToe} alt="TicTacToe" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Unbeatable TicTacToe Game Made with vanillaJS</div>
										</div>
									</div>
								</div>
								<div className={ref.state.showWeb ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/cosco">
											<div className="image_box">
												<img src={cosco} alt="CosCo" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Cosco Modern Css Framework</div>
										</div>
									</div>
								</div>
	    					</div>
	    					<div className="col-md-6 col-sm-12 col-lg-4">
	    						<div className={ref.state.showAPI ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/FoxSec">
											<div className="image_box">
												<img src={FoxSec} alt="FoxSec" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">FoxSec Dynamic Password Maneger Made with jQuery</div>
										</div>
									</div>
								</div>
								<div className={ref.state.showWeb ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/pomodoroClock">
											<div className="image_box">
												<img src={pomodoroClock} alt="Pomodoro Clock" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Pomodoro Clock</div>
										</div>
									</div>
								</div>
								<div className={ref.state.showWeb ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/pureCssParallax">
											<div className="image_box">
												<img src={pureCssParallax} alt="pureCssParallax" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Parallax Scrooling Effect Made with Css</div>
										</div>
									</div>
								</div>
								<div className={ref.state.showWeb ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://codepen.io/jobayerahmedmickey/full/bMOJLG/">
											<div className="image_box">
												<img src={tributePage} alt="tributePage" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">Tribute Page: freeCodeCamp Project</div>
										</div>
									</div>
								</div>
								<div className={ref.state.showAPI ? "portfolio_wrapper" : "hide"}>
									<div className="portfolio">
										<a href="https://github.com/Jobayer-Ahmed/uxGradients">
											<div className="image_box">
												<img src={uxGradients} alt="uxGradients" width="100%"/>
												<div className="hover_box"></div>
											</div>
										</a>
										<div className="title_box">
											<div className="title">uxGradients</div>
										</div>
									</div>
								</div>
	    					</div>
	    				</div>
	    			</div>
    			</div>
            </section>
        );
    }
}

export default Portfolio;