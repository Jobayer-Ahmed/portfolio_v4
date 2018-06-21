import React, { Component } from 'react';
import './About.css';
import axios from 'axios';
const url = 'https://cors-anywhere.herokuapp.com/https://twitdata.herokuapp.com/data';
const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeval: 0,
			rotatein: false,
			rotateout: false,
			twieet: '',
			time: '',
			text: 'Twitter Web Client',
			avatarUrl: '',
			tweetUrl: ''
		}
		this._increase();
	}

	_increase() {
		this.setState({timeval: this.state.timeval + 1});
		setTimeout(this._increase.bind(this), 5000);
		this.setState({
			rotatein: !this.state.rotatein,
			rotateout: !this.state.rotateout,
		})
	}

	componentWillMount() {
		const ref = this;
		axios.get(url, { crossdomain: true })
			.then(function(res) {
				let postDate = res.data.user.created_at.split(' ')
				ref.setState({
					avatarUrl: res.data.user.profile_image_url_https,
					twieet: res.data.text,
					time: postDate,
					tweetUrl: res.data.entities.urls[0].url
				})
				ref.getDateDistence();
			})
			.catch(function(err) {
				console.log(err);
			})
		
	}

	getDateDistence() {
		const ref = this;
		let x = ref.state.time[1], month = 0;
		switch (x) {
			case 'Jan':
				month = 1;
				break;
			case 'Feb':
				month = 2;
				break;
			case 'Mar':
				month = 3;
				break;
			case 'Apr':
				month = 4;
				break;
			case 'May':
				month = 5;
				break;
			case 'Jun':
				month = 6;
				break;
			case 'Jul':
				month = 7;
				break;
			case 'Aug':
				month = 8;
				break;
			case 'Sep':
				month = 9;
				break;
			case 'Oct':
				month = 10;
				break;
			case 'Nov':
				month = 11;
				break;
			case 'Des':
				month = 12;
				break;
			default:
				break;
		}
		let date1 = new Date(utc);
		let date2 = new Date(`2018/${month}/${ref.state.time[2]}`);
		let timeDiff = Math.abs(date2.getTime() - date1.getTime());
		let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		let postDate = '';
		if (diffDays === 0) {
			postDate = 'today';
		} else if(diffDays === 1) {
			postDate = 'yesterday';
		} else {
			postDate = `${diffDays} days`
		}
		ref.setState({
			time: postDate
		})
	}

    render() {
    	const ref = this;
        return (
            <section className={ref.props.classs} id="about">
                <div className="content">
                	<div className="row">
                		<div className="col-md-8">
                			<h2 className="title_section">
                				<span>
                					<i className="fa fa-user-secret" aria-hidden="true"></i>
									A LITTLE ABOUT ME
                				</span>
                			</h2>
                			<div className="intro">
                				<h2>
                					Hi, I'm Mickey, <span className="changeText"><span className={ref.state.rotatein ? "rotatein" : "rotateout"}>a programmer</span> <span className={ref.state.rotateout ? "rotateout" : "rotatein"}>a designer</span></span><br/>
									I like to work with new technologies. <br/>
                				</h2>
                			</div>
                		</div>
                		<div className="col-md-4">
							<h2 className="title_section">
                				<span>
                					<i className="fa fa-twitter" aria-hidden="true"></i>
									LATEST TWEET
                				</span>
                			</h2>
                			<div className="tweetBox">
                				<ul className="latest_tweets">
                					<li className="latest_tweet">
										<span className="avatar">
											<a href="https://twitter.com/jobayeramickey">
												<img src={ref.state.avatarUrl} alt="jobayeramickey" width="48px" height="48px"/>
											</a>
										</span>
										<span className="tweet_content">
											<a href={ref.state.tweetUrl}>
												{ref.state.twieet}
											</a>
										</span>
										<span className="tweetDate">
											<em>
												Time ago <a href=""> {ref.state.time} </a>
												<span>
													via <a href=""> {ref.state.text} </a>
												</span>
											</em>
										</span>
                					</li>
                				</ul>
                				<div className="tweetBoxFooter">
                					Follow <a href="https://twitter.com/jobayeramickey">@jobayeramickey</a> on twitter.
                				</div>
                			</div>
                		</div>
                	</div>
                	<h2 className="title_section">
	    				<span>
	    					<i className="fa fa-cogs" aria-hidden="true"></i>
							WHAT I DO
	    				</span>
	    			</h2>
	    			<div className="row">
	    				<div className="col-md-4 col-sm-12">
	    					<div className="ido">
	    						<i className="fa fa-code"></i>
	    						<h4>
	    							Comparative Programming
	    						</h4>
	    						<p>
	    							I prefer to call myself as a comparative programmer. <br/>
	    							I like to solve problem. I enjoy it very much.
	    							I solve problem in C and C++;
	    						</p>
	    					</div>
	    				</div>
	    				<div className="col-md-4 col-sm-12">
	    					<div className="ido">
	    						<i className="fa fa-html5"></i>
	    						<h4>
	    							WEB Development
	    						</h4>
	    						<p>
	    							I can design and develop web application with <br/>
	    							ReactJS, NodeJS etc. I also can work with API (integration only).
	    						</p>
	    					</div>
	    				</div>
	    				<div className="col-md-4 col-sm-12">
	    					<div className="ido">
	    						<i className="fa fa-paint-brush"></i>
	    						<h4>
	    							UI/UX Design
	    						</h4>
	    						<p>
	    							I also design at free time. I love <br/> to design user interface.
	    							My weakness <br/> is Bengali typography.
	    						</p>
	    					</div>
	    				</div>
	    			</div>
	    			<h2 className="title_section">
	    				<span>
	    					<i className="fa fa-wrench" aria-hidden="true"></i>
							HOW I BUILD SOMETHING
	    				</span>
	    			</h2>
	    			<div className="row">
	    				<div className="col-xs-6 col-sm-4 col-md-2">
	    					<div className="ibuild">
	    						<div>
	    							<i className="fa fa-lightbulb-o"></i>
	    							<h4>IDEA</h4>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-xs-6 col-sm-4 col-md-2">
	    					<div className="ibuild">
	    						<div>
	    							<i className="fa fa-pencil"></i>
	    							<h4>SKETCH</h4>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-xs-6 col-sm-4 col-md-2">
	    					<div className="ibuild">
	    						<div>
	    							<i className="fa fa-paint-brush"></i>
	    							<h4>DESIGN</h4>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-xs-6 col-sm-4 col-md-2">
	    					<div className="ibuild">
	    						<div>
	    							<i className="fa fa-code"></i>
	    							<h4>DEVELOP</h4>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-xs-6 col-sm-4 col-md-2">
	    					<div className="ibuild">
	    						<div>
	    							<i className="fa fa-bug"></i>
	    							<h4>TEST</h4>
	    						</div>
	    					</div>
	    				</div>
	    				<div className="col-xs-6 col-sm-4 col-md-2">
	    					<div className="ibuild">
	    						<div>
	    							<i className="fa fa-trash-o"></i>
	    							<h4>FLING</h4>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<h2 className="title_section">
	    				<span>
							MY INTERESTES
	    				</span>
	    			</h2>
	    			<div className="row">
	    				<div className="col-sm-6 col-md-3">
	    					<div className="interest">
	    						<i className="fa fa-code"></i>
	    						<h4>Programming</h4>
	    					</div>
	    				</div>
	    				<div className="col-sm-6 col-md-3">
	    					<div className="interest">
	    						<i className="fa fa-microchip"></i>
	    						<h4>Logic</h4>
	    					</div>
	    				</div>
	    				<div className="col-sm-6 col-md-3">
	    					<div className="interest">
	    						<i className="fa fa-book"></i>
	    						<h4>Detective Story</h4>
	    					</div>
	    				</div>
	    				<div className="col-sm-6 col-md-3">
	    					<div className="interest">
	    						<i className="fa fa-bed"></i>
	    						<h4>Sleep</h4>
	    					</div>
	    				</div>
	    			</div>
	    			<h2 className="title_section">
	    				<span>
							COPYRIGHT
	    				</span>
	    			</h2>
	    			<p className="copyright">@<span className="date">{(new Date().getFullYear())}</span> Jobayer Ahmed Mickey</p>
                </div>
            </section>
        );
    }
}

export default About;