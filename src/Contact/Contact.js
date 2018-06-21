import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css';
const picture = require('../img/stamp.png')
let x = Math.floor((Math.random()*10) + 1);
let y = Math.floor((Math.random()*20) + 1);

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			sum: 0
		}
	}

	submitForm(e) {
		e.preventDefault();
		const ref = this;
		const {name, email, message} = ref.state;
		axios.post('http://localhost:3001/api/form', {
			name,
			email,
			message
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	

    render() {
    	const ref = this;
        return (
            <section className={ref.props.classs} id="contact">
                <div className="content">
                	<div className="row">
                		<div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                			<h2 className="title_section">
			    				<span>
			    					<i className="fa fa-address-card" aria-hidden="true"></i>
									LET’S GET IN TOUCH
			    				</span>
			    			</h2>
							<h4 className="author_name">Naim Jeem</h4>
							<div className="author_photo">
								<img src={picture} alt=""/>
							</div>
							<div className="author_info">
								<p>
									<i className="fa fa-at"></i>
									jobayeramickey@gmail.com
								</p>
								<p>
									<i className="fa fa-map-signs"></i>
									Dhaka, Bangladesh
								</p>
							</div>
                		</div>
                		<div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                			<h2 className="title_section">
			    				<span>
			    					<i className="fa fa-weixin" aria-hidden="true"></i>
									LET’S GET IN TOUCH
			    				</span>
			    			</h2>
			    			<ul className="social">
			    				<li>
			    					<a href="https://facebook.com/mickeyvaai" className="facebook">
			    						<i className="fa fa-facebook"></i>
			    					</a>
			    				</li>
			    				<li>
			    					<a href="https://twitter.com/jobayeramickey" className="twitter">
			    						<i className="fa fa-twitter"></i>
			    					</a>
			    				</li>
			    				<li>
			    					<a href="https://www.linkedin.com/in/mickeyvaai/" className="linkedin">
			    						<i className="fa fa-linkedin"></i>
			    					</a>
			    				</li>
			    				<li>
			    					<a href="https://plus.google.com/u/0/118029870668317665256" className="plus">
			    						<i className="fa fa-google-plus"></i>
			    					</a>
			    				</li>
			    				<li>
			    					<a href="https://github.com/Jobayer-Ahmed" className="github">
			    						<i className="fa fa-github"></i>
			    					</a>
			    				</li>
			    				<li>
			    					<a href="https://www.freecodecamp.org/jobayer-ahmed" className="freecodecamp">
			    						<i className="fa fa-free-code-camp"></i>
			    					</a>
			    				</li>
			    				<li>
			    					<a href="https://codepen.io/jobayerahmedmickey" className="codepen">
			    						<i className="fa fa-codepen"></i>
			    					</a>
			    				</li>
			    				<li>
			    					<a href="https://www.behance.net/jobayerahmedmickey" className="behance">
			    						<i className="fa fa-behance"></i>
			    					</a>
			    				</li>
			    				<li>
			    					<a href="https://stackoverflow.com/users/7169001/jobayer-ahmed-mickey" className="stackoverflow">
			    						<i className="fa fa-stack-overflow"></i>
			    					</a>
			    				</li>
			    				<li>
			    					<a href="https://www.instagram.com/jobayerahmedmickey" className="instagram">
			    						<i className="fa fa-instagram"></i>
			    					</a>
			    				</li>
			    			</ul>
                		</div>
                	</div>
                	<h2 className="title_section">
	    				<span>
	    					<i className="fa fa-paper-plane" aria-hidden="true"></i>
							LET’S GET IN TOUCH
	    				</span>
	    			</h2>
	    			<form className="contact_form" onSubmit={ref.submitForm.bind(ref)}>
	    				<div>
	    					<label>NAME</label>
	    					<input type="text" value={ref.state.name} onChange={(e) => ref.setState({name: e.target.value})}/>
	    				</div>
	    				<div>
	    					<label>EMAIL</label>
	    					<input type="text" value={ref.state.email} onChange={(e) => ref.setState({email: e.target.value})}/>
	    				</div>
	    				<div>
	    					<label>MESSAGE</label>
	    					<input type="text" className="textarea" value={ref.state.message} onChange={(e) => ref.setState({message: e.target.value})}/>
	    				</div>
	    				<div>
	    					<label>{`${x} + ${y} = ?`}</label>
	    					<input type="text" placeholder="What is the sum" value={ref.state.sum} onChange={(e) => ref.setState({sum: e.target.value})}/>
	    				</div>
	    				<div>
	    					<input type="submit" value="SEND"/>
	    				</div>
	    			</form>
                </div>
            </section>
        );
    }
}

export default Contact;