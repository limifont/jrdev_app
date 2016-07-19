import React from 'react';
import { Link } from 'react-router';


const AboutUs = () => (
  <div className='center'>
  	<div className="valign-wrapper" style={{backgroundColor: "white", minHeight: "40vh"}}>
	  	<h1 className="valign" style={{marginLeft: "200px"}}>About Us</h1>
  	</div>
  	<div className='row'>
			<div className='col s12 m12' style={{padding: "0px"}}>
				<div style={{backgroundColor: "#E8E8E8"}}>
					<div className="container" style={{padding: "40px 0 40px 0"}}>
						<h5 className="black-text" style={{fontWeight: 'bold', marginTop: "0px"}}>THE APP</h5>
						<p style={{textAlign: "left"}}>
							JrDevs is a learn-to-code app built for ages 10+. We are seeking to fill the gap between coding games that merely teach concepts and other instructional sites that are too difficult for most kids. The exercises teach real code that our users can use to build real projects. The exercises teach the Ruby coding language, as it is one of the easiest to learn. There are account options for parents, teachers, and others looking to help someone learn how to code. With these accounts, a user can monitor the progress of another user or groups users. These accounts also have access to the same lessons and exercises available to a basic account. With our app, a parent, mentor, or teacher can help others even if they are new to coding themselves.
						</p>
					</div>
				</div>
				<div style={{backgroundColor: "white"}}>
					<div className="container" style={{padding: "40px 0 40px 0"}}>
						<div style={{margin: "50px 0 80px 0"}}>
							<h5 className="black-text" style={{fontWeight: 'bold'}}>THE CODE</h5>
							<p style={{textAlign: "left"}}>
								One of the many reasons we chose to build this app is that we knew it would stretch our abilities as developers. It requires a complex back-end with 12 controllers and 12 models.
								The front-end is a single page app that uses React and Redux to avoid any full page reloads. So far, we have created 31 React components to make this possible. 
								We use webpack to link the front and back ends. Each runs on separate servers, but still within the same heroku deployment. The front-end can query the back-end like an API to get the data it needs.
							</p>
							<p style={{textAlign: "left"}}>
								This app also has countless opportunities for expansion. There are many other features we hope to add. If you think of any features you would incorporated, email us below!
							</p>
						</div>
					</div>
				</div>

				<div style={{backgroundColor: "#E8E8E8"}}>
					<div className="container" style={{padding: "40px 0 40px 0"}}>
						<div id="jrdev_team" className="col s12 m12 l12" style={{display: 'flex', flexDirection: 'column', minHeight: '50vh'}}>
						  <div  id="black_box" className="col s12 m12 l12" style={{display: 'flex', flexDirection: 'column', minHeight: '50vh'}}>
					      <div className="row center">
					        <div className="col s12 m12 l12">
					          <h5 className="black-text" style={{fontWeight: 'bold'}}>THE TEAM</h5>
					        </div>
					      </div>
					      
					      <div className="row center">
					        <div className="col s12 m4 center">
					          <div className="icon-block">
					            <Link to='/about_us'>
					              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAbfAAAAJGYzMjJhNGFiLWNhOGMtNDk3Yi04NTRiLWJiNmQzMWVlYzZkMQ.jpg" style={{width:'50%', height: 'auto', borderRadius: '50%'}}></img>
					              <h5 className="center orange-text">Henry Doan</h5>
					            </Link>
					            <p className="light center black-text">Henry, a born and raised Utahn. Now a current Computer Science major at the University of Utah, Henry is always extending his knowledge with online resources and books on programming languages and designs. In his spare time, he does computerize artwork ranging from GIFs to complete renderings. Henry is also compassionate about sharing his knowledge with others, helping them any way he can.</p>

					            <a href='https://github.com/nightwing891' target="github"><img src="assets/GitHub.png"></img></a>
					            <a href='https://www.linkedin.com/in/henrydoan' target="linkedin"><img src="assets/link.png" style={{ height: '32px', marginLeft: '25px', marginRight: '25px'}}></img></a>
					            <a href='mailto:henrydoan96@gmail.com'><img src="assets/email.png" style={{ height: '32px'}}></img></a>
					          </div>
					        </div>

					        <div className="col s12 m4 center">
					          <div className="icon-block">
					            <Link to='/about_us'>
					              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAIEAAAAJDIwZDc5NmI3LTkyYjctNDQ2MC05MmQ3LTRjZDdkOWZlOWE3Ng.jpg" style={{width:'50%', height: 'auto', borderRadius: '50%'}}></img>
					              <h5 className="center green-text">Lindsey Font</h5>
					            </Link>
					            <p className="light center black-text">Lindsey graduated from Brigham Young University in 2014 with a degree in Latin American Studies, emphasizing in Spanish and a minor in Art. Her love for languages translated well into coding when she started learning how to program arduinos. She hopes to use her new coding skills along with her artistic abilities and understanding of people to make the web a more beautiful and user friendly environment.</p>

					            <a href='https://github.com/limifont' target="github"><img src="assets/GitHub.png"></img></a>
					            <a href='https://www.linkedin.com/in/lindseyfont' target="linkedin"><img src="assets/link.png" style={{ height: '32px', marginLeft: '25px', marginRight: '25px'}}></img></a>
					            <a href='mailto:lindsey.font@gmail.com'><img src="assets/email.png" style={{ height: '32px'}}></img></a>
					          </div>
					        </div>

					        <div className="col s12 m4 center">
					          <div className="icon-block">
					            <Link to='/about_us'>
					              <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/0ae/1ad/2b6ca02.jpg" style={{width:'50%', height: 'auto', borderRadius: '50%'}}></img>
					              <h5 className="center blue-text">Matt Hadley</h5>
					            </Link>
					            <p className="light center black-text">Matt, a product of Utah and Arizona, graduated from BYU in 2013 with a degree in international relations. He then went to work for Goldman Sachs in Compliance for the next three years. One day he decided to try a free online coding course and not long after was looking into coding bootcamps. When he is not coding, he is usually out fly fishing. He is excited to be in a career he loves.</p><br></br>

					            <a href='https://github.com/mghadley' target="github"><img src="assets/GitHub.png"></img></a>
					            <a href='https://www.linkedin.com/in/mghadley' target="linkedin"><img src="assets/link.png" style={{ height: '32px', marginLeft: '25px', marginRight: '25px'}}></img></a>
					            <a href='mailto:matthew.g.hadley@gmail.com'><img src="assets/email.png" style={{ height: '32px'}}></img></a>
					          </div>
					        </div>

					      </div>

						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

)

export default AboutUs;