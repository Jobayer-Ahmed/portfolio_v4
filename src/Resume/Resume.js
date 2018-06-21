import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
    render() {
    	const ref = this;
        return (
            <section className={ref.props.classs} id="resume">
            	<div className="content">
            		<div className="row">
	                	<div className="col-md-6">
	                		<div className="timeline">
	                			<h2>
	                				<i className="fa fa-flask"></i>
	                				TIMELINE
	                			</h2>
	                			<div className="job">
	                				<div className="status">
	                					<span className="date now">2018</span>
	                					<div className="line"></div>
	                					<h4>Co-Founder</h4>
	                					<h5>GreenIT Limited</h5>
	                					<p>I got some awesome team member. Then I decided to start this company.</p>
	                				</div>
	                				<div className="status">
	                					<span className="date">2017</span>
	                					<div className="line"></div>
	                					<h4>Lead Engineer</h4>
	                					<h5>SK Atelair</h5>
	                					<p>Work as Lead Engineer for the sk atelair team to build apps for web, mobile and desktop. and also develop server for local access</p>
	                				</div>
	                				<div className="status">
	                					<span className="date">2017</span>
	                					<div className="line"></div>
	                					<h4>Front end Developer</h4>
	                					<h5>The NextIT</h5>
	                					<p>Works as a frontend developer, using frontend technologies specially ReactJS and vanillaJS</p>
	                				</div>
	                				<div className="status">
	                					<span className="date">2017</span>
	                					<div className="line"></div>
	                					<h4>frontend developer</h4>
	                					<h5>freeCodeCamp</h5>
	                					<p>freeCodeCamp is a open source learning platform. anyone can learn web development. And it's totally free.</p>
	                				</div>
	                			</div>
	                		</div>
	                		<h2 className="title_section">
			    				<span>
			    					<i className="fa fa-linkedin" aria-hidden="true"></i>
									VIEW MY LINKEDIN PROFILE
			    				</span>
			    			</h2>
			    			<div className="text">You can view my LinkedIn profile. And I will be glad if you endorse me for my <br/>skills.</div>
			    			<div className="text">
			    				<a href="https://www.linkedin.com/in/mickeyvaai/" className="link">
			    					MY LINKEDIN PROFILE <br/>
			    					<span className="link_text"> <br/>www.linkedin.com/in/mickeyvaai</span>
			    				</a>
			    			</div>
			    			<h2 className="title_section">
			    				<span>
			    					<i className="fa fa-github-alt" aria-hidden="true"></i>
									VIEW MY GITHUB PROFILE
			    				</span>
			    			</h2>
			    			<div className="text">You can view my Github profile to see my open source projects.</div>
			    			<div className="text">
			    				<a href="https://github.com/Jobayer-Ahmed/">
			    					MY GITHUB PROFILE <br/>
			    					<span className="link_text"> <br/>https://github.com/Jobayer-Ahmed</span>
			    				</a>
			    			</div>
	                	</div>
	                	<div className="col-md-6">
	                		<div className="skill_bar">
	                			<h2 className="title_section">
				    				<span>
				    					<i className="fa fa-paint-brush" aria-hidden="true"></i>
										WEB DEVELOPMENT SKILLS
				    				</span>
				    			</h2>
				    			<div className="bars">
				    				<div className="bar">
				    					<div className="bar_outter">
				    						<div className="bar_inner" id="p30">node.js</div>
				    					</div>
				    				</div>
				    				<div className="bar">
				    					<div className="bar_outter">
				    						<div className="bar_inner" id="p60">react.js</div>
				    					</div>
				    				</div>
				    				<div className="bar">
				    					<div className="bar_outter">
				    						<div className="bar_inner" id="p80">jQuery</div>
				    					</div>
				    				</div>
				    				<div className="bar">
				    					<div className="bar_outter">
				    						<div className="bar_inner" id="p90">git</div>
				    					</div>
				    				</div>
				    				<div className="bar">
				    					<div className="bar_outter">
				    						<div className="bar_inner" id="p95">html5</div>
				    					</div>
				    				</div>
				    				<div className="bar">
				    					<div className="bar_outter">
				    						<div className="bar_inner" id="p80">css3</div>
				    					</div>
				    				</div>
				    			</div>
				    			<h2 className="title_section">
				    				<span>
				    					<i className="fa fa-paint-brush" aria-hidden="true"></i>
										MOBILE APP DEVELOPMENT SKILLS
				    				</span>
				    			</h2>
				    			<div className="bars">
				    				<div className="bar">
				    					<div className="bar_outter">
				    						<div className="bar_inner" id="p30">React Native</div>
				    					</div>
				    				</div>
				    			</div>
				    			<h2 className="title_section">
				    				<span>
				    					<i className="fa fa-paint-brush" aria-hidden="true"></i>
										DESKTOP APP DEVELOPMENT SKILLS
				    				</span>
				    			</h2>
				    			<div className="bars">
				    				<div className="bar">
				    					<div className="bar_outter">
				    						<div className="bar_inner" id="p30">Electron js</div>
				    					</div>
				    				</div>
				    			</div>
	                		</div>
	                		<h2 className="title_section">
			    				<span>
			    					<i className="fa fa-certificate" aria-hidden="true"></i>
									CERTIFICATION
			    				</span>
			    			</h2>
			    			<div className="box">
			    				<div className="img"><i className="fa fa-free-code-camp"></i></div>
			    				<h4 className="title">Frontend Development Program <span>Free Code Camp</span></h4>
			    				<h4>I completed frontend development certification which includes <br/> HTML, CSS, JS, Jquery, Bootstrap, AJAX. <a href="# " className="link_text">View my Certificate</a></h4>
			    			</div>
	                		<h2 className="title_section">
			    				<span>
			    					<i className="fa fa-github-alt" aria-hidden="true"></i>
									DOWNLOAD MY CV
			    				</span>
			    			</h2>
			    			<div className="text">You can download my CV in pdf format if you like. If you want to let me work with you I am available for that.</div>
			    			<div className="text">
			    				<a href="https://cv_resume.surge.sh">
			    					DOWNLOAD CV <br/>
			    					<span className="link_text"> <br/>cv_resume.surge.sh</span>
			    				</a>
			    			</div>
	                	</div>
	                </div>
            	</div>
            </section>
        );
    }
}

export default Resume;