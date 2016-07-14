import React from 'react'
import Lessons from './Lessons'
import Badge from './Badge'

class JrdevDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { secret_phrase: "", lessons: [], hidden: true }
		this.displayPhrase = this.displayPhrase.bind(this);
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

	displayPhrase = () => {
		$("#secret-phrase").text(this.state.secret_phrase).css({'overflow':'scroll', 'cursor':'text'}).after("<br id='remove-me' />");
		$("#secret-phrase").toggleClass('white', true);
		$("#hide-btn").css('display', 'block').after("<br id='remove-me2' />");
		$("#new-secret").css('display', 'block');
	}

	hidePhrase = () => {
		$("#secret-phrase").text('SECRET PHRASE').css('cursor', 'pointer').toggleClass('white', false);
		$("#remove-me").remove();
		$("#remove-me2").remove();

		$("#hide-btn").css('display', 'none');
		$("#new-secret").css('display', 'none');
	}

	render() {
		if(this.state.lessons.length > 0) {
			return(
				<div>
					<div className="row">
						<div className="col m8 s12" style={{height: '100%'}}>
							<div className="card">
								<Lessons lessons={this.state.lessons} links={true}/>
							</div>
						</div >

						<div className="col m4 s12">
							<div className="card">
								<Badge id={this.props.id} />
							</div>

							<div className="card lime accent-2">
								<div className="card-content center">
									<div className="card-title" id="secret-phrase" style={{cursor: 'pointer'}} onClick={this.displayPhrase}>SECRET PHRASE</div>
									<div className="btn lime" id="hide-btn" style={{display: 'none'}} onClick={this.hidePhrase}>HIDE</div>
									<div className="btn lime" id="new-secret" style={{display: 'none'}}>NEW PHRASE</div>
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