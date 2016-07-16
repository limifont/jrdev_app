import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router';

const Splash = () => (
  <div>
      <Parallax bgImage="assets/Kid1.jpg" strength={200}>
        <div style={{width: '100vw', height: '50vh', marginTop: 1}}>
          <br />
          <br />
          <h1 className="header valign center cyan-text text-accent-3">Jr. Devs</h1>
          <div className="row valign center col s12">
            <h5 className="header col s12 light white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
          </div>
        </div>
      </Parallax>

      <div className="container" id="get_started">
        <div className="section">

          <div className="row section center">
            <h4>Get Started</h4>
            <h5>Choose your account type</h5>
            <div className="col s12 m4 center" style={{height: "100%"}}>
              <div className="icon-block">
                <Link to='/signup/Jrdev'>
                  <h2 className="center deep-orange-text text-lighten-1"><i className="medium material-icons">sentiment_very_satisfied</i></h2>
                  <h5 className="center black-text">Jr. Dev</h5>
                </Link>

                <p className="light center">Here to learn how to code? With a Jr Dev account, you will have access to all exercises. Our exercises are designed for ages 10 - 15, but can be a great introduction to coding for anyone!</p>
                <Link to='/signup/Jrdev'>Create a JrDev Account</Link>
              </div>
            </div>

            <div className="col s12 m4 center" style={{height: "100%"}}>
              <div className="icon-block">
                <Link to='/signup/Mentor'>
                  <h2 className="center deep-orange-text text-lighten-1"><i className="medium material-icons">group</i></h2>
                  <h5 className="center black-text">Mentor</h5>
                </Link>

                <p className="light center">Mentor accounts are for those looking to help Jr Devs. This account is ideal for parents, older siblings, tutors, or any other type of mentor. You'll be able to add Jr Devs to you mentorship and monitor their progress. Don't know how to code? Don't worry--you'll have access to all the exercises too!</p>
                <Link to='/signup/Mentor'>Create a Mentor Account</Link>
              </div>
            </div>

            <div className="col s12 m4 center" style={{height: "100%"}}>
              <div className="icon-block">
                <Link to='/signup/Educator'>
                  <h2 className="center deep-orange-text text-lighten-1"><i className="medium material-icons">edit</i></h2>
                  <h5 className="center black-text">Educator</h5>
                </Link>

                <p className="light center">Educator accounts are for those looking to teach groups of kids. Educators can organize their kids into classrooms, see classroom statistics, and track individual progress. Just like the other accounts, an Educator has access to all exercises.</p>
                <Link to='/signup/Educator'>Create an Educator Account</Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Parallax bgImage="assets/kid2.png" strength={200}>
        <div style={{width: 800, height: 425}}></div>
      </Parallax>

      <div className="container">
        <div className="section">

          <div className="row section center">
            <h4 className="contact-us">The Jrdev Team</h4>
            <br/>
            <div className="col s12 m4 center">
              <div className="icon-block">
                <Link to='/about_us'>
                  <img src="assets/Charmander.gif" style={{width:'64px', height: '64px', marginTop: '-11px'}}></img>
                  <h5 className="center black-text">Henry Doan</h5>
                </Link>
                <p className="light center">Henry, a born and raised Utahn. Now a current Computer Science major at the University of Utah, Henry is always extending his knowledge with online resources and books on programming languages and designs. In his spare time, he does computerize artwork ranging from GIFs to complete renderings. Henry is also compassionate about sharing his knowledge with others, helping them any way he can.</p>

                <a href='https://github.com/nightwing891' target="github"><img src="assets/GitHub.png"></img></a>
                <a href='https://www.linkedin.com/in/henrydoan' target="linkedin"><img src="assets/link.png" style={{ height: '32px', marginLeft: '25px', marginRight: '25px'}}></img></a>
                <a href='mailto:henrydoan96@gmail.com'><img src="assets/email.png" style={{ height: '32px'}}></img></a>
              </div>
            </div>

            <div className="col s12 m4 center">
              <div className="icon-block">
                <Link to='/about_us'>
                  <img src="assets/bulbasaur.gif" style={{width:'54px', height: '54px'}}></img>
                  <h5 className="center black-text">Lindsey Font</h5>
                </Link>
                <p className="light center">Bio</p>

                <a href='https://github.com/limifont' target="github"><img src="assets/GitHub.png"></img></a>
                <a href='https://www.linkedin.com/in/lindseyfont' target="linkedin"><img src="assets/link.png" style={{ height: '32px', marginLeft: '25px', marginRight: '25px'}}></img></a>
                <a href='mailto:lindsey.font@gmail.com'><img src="assets/email.png" style={{ height: '32px'}}></img></a>
              </div>
            </div>

            <div className="col s12 m4 center">
              <div className="icon-block">
                <Link to='/about_us'>
                  <img src="assets/Squirtle.gif" style={{width:'44px', height: '44px', marginTop: '9px'}}></img>
                  <h5 className="center black-text">Matt Hadley</h5>
                </Link>
                <p className="light center">Matt, a product of Utah and Arizona, graduated from BYU in 2013 with a degree in international relations. He then went to work for Goldman Sachs in Compliance for the next three years. One day he decided to try a free online coding course and not long after was looking into coding bootcamps. When he is not coding, he is usually out fly fishing. He is excited to be in a career he loves.</p>

                <a href='https://github.com/mghadley' target="github"><img src="assets/GitHub.png"></img></a>
                <a href='https://www.linkedin.com/in/mghadley' target="linkedin"><img src="assets/link.png" style={{ height: '32px', marginLeft: '25px', marginRight: '25px'}}></img></a>
                <a href='mailto:matthew.g.hadley@gmail.com'><img src="assets/email.png" style={{ height: '32px'}}></img></a>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Parallax bgImage="assets/kid2.png" strength={200}>
        <div style={{width: 800, height: 425}}></div>
      </Parallax>

    </div>
)

export default Splash;