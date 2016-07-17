import React from 'react'
import Lessons from './Lessons'
import Badge from './Badge'

class JrdevDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { secret_phrase: "", lessons: [], hidden: true }
		this.displayPhrase = this.displayPhrase.bind(this);
		this.updatePhrase = this.updatePhrase.bind(this);
	}

	componentWillMount() {
	  $.ajax({
	    url: `/api/jrdevs/${this.props.id}`,
	    type: 'GET',
	    dataType: 'JSON'
	  }).done( user => {
	    this.setState({ secret_phrase: user["secret_phrase"]})
	  }).fail( data => {
	    console.log('failure', data)
	  })
	  $.ajax({
			url: `/api/lessons_index/${this.props.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( lessons => {
			this.setState({ lessons })
		}).fail( data => {
			console.log("Failure to get all lessons for JrdevDashboard", data)
		})
	}

	newPhrase(e) {
		e.preventDefault();
		$.ajax({
			url: `/api/new_secret_phrase`,
			type: 'GET',
			dataType: 'JSON'
		}).done( secret_phrase => {
			this.setState({ secret_phrase: secret_phrase['secret_phrase'] })
			console.log(this.state.secret_phrase)
			this.updatePhrase(this.state.secret_phrase);
		}).fail( data => {
			console.log(data)
		})
	}

	updatePhrase(secret_phrase) {
		$.ajax({
			url: `/api/jrdevs/${this.props.id}`,
			type: 'PUT',
			data: { user: { secret_phrase }},
			dataType: 'JSON'
		}).done( user => {
			console.log(user)
			$("#secret-phrase").text(this.state.secret_phrase);
		}).fail( data => {
			console.log(data)
		})
	}


	displayPhrase = () => {
		if(this.state.hidden === true) {
			$("#secret-phrase").text(this.state.secret_phrase).css({'overflow':'scroll', 'cursor':'text'});
			$("#secret-phrase").toggleClass('white', true);
			$("#hide-btn").css('display', 'block');
			$("#new-secret").css('display', 'block');
			this.setState({ hidden: false })
		}
	}

	hidePhrase = () => {
		if(this.state.hidden === false) {			
			$("#secret-phrase").text('SECRET PHRASE').css('cursor', 'pointer').toggleClass('white', false);
			$(".remove-me").remove();
			$("#remove-me2").remove();
			this.setState({ hidden: true })
			$("#hide-btn").css('display', 'none');
			$("#new-secret").css('display', 'none');
		}
	}

	render() {
		if(this.state.lessons.length > 0) {
			return(
				<div>
					<div className="row">
						<div className="col m8 s12" style={{height: '100%'}}>
							<div className="col m1 card" style={{height: "514px", padding: "0"}}>
								<img src="assets/lessons.png" style={{width: "100%", height: "100%"}} alt="Lessons"></img>
							</div>
							<Lessons lessons={this.state.lessons} links={true}/>
						</div >

						<div className="col m4 s12">
							<div className="card">
								<Badge id={this.props.id} />
							</div>

							<div className="card lime accent-2">
								<div className="card-content center">
									<div className="card-title" id="secret-phrase" style={{cursor: 'pointer', fontSize: "16px"}} onClick={this.displayPhrase}>SECRET PHRASE</div>
									<div className="btn lime" id="hide-btn" style={{display: 'none', marginTop: '12px'}} onClick={this.hidePhrase}>HIDE</div>
									<div id="new-secret" className="btn lime" onClick={this.newPhrase.bind(this)} style={{display: 'none', marginTop: '12px', width: '100%'}}>NEW PHRASE</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return(<h3>Loading...</h3>)
		}
	}
}

export default JrdevDashboard;