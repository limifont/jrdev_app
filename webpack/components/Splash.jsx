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
            <div className="col s12 m4 center">
              <div className="icon-block">
                <Link to='/signup/Jrdev'>
                  <h2 className="center deep-orange-text text-lighten-1"><i className="medium material-icons">sentiment_very_satisfied</i></h2>
                  <h5 className="center black-text">Jr. Dev</h5>
                </Link>

                <p className="light center">Here to learn how to code? With a Jr Dev account, you will have access to all exercises. Our exercises are designed for ages 10 - 15, but can be a great introduction to coding for anyone!</p>
                <Link to='/signup/Jrdev'>Create a JrDev Account</Link>
              </div>
            </div>

            <div className="col s12 m4 center">
              <div className="icon-block">
                <Link to='/signup/Mentor'>
                  <h2 className="center deep-orange-text text-lighten-1"><i className="medium material-icons">group</i></h2>
                  <h5 className="center black-text">Mentor</h5>
                </Link>

                <p className="light center">Mentor accounts are for those looking to help Jr Devs. This account is ideal for parents, older siblings, tutors, or any other type of mentor. You'll be able to add Jr Devs to you mentorship and monitor their progress. Don't know how to code? Don't worry--you'll have access to all the exercises too!</p>
                <Link to='/signup/Mentor'>Create a Mentor Account</Link>
              </div>
            </div>

            <div className="col s12 m4 center">
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
            <div className="col s12 m4 center">
              <div className="icon-block">
                <Link to='/signup/Jrdev'>
                  <img src="http://www.poke-amph.com/heartgoldsoulsilver/sprites/small/004.gif" style={{width:'64px', height: '64px', marginTop: '-11px'}}></img>
                  <h5 className="center black-text">Henry Doan</h5>
                </Link>
                <a href='https://github.com/nightwing891'><img src="assets/GitHub.png" style={{width: "16px", height: "16px"}}></img> github.com/nightwing891</a>

                <p className="light center">Bio</p>
                <a href='mailto:henrydoan96@gmail.com'>henrydoan96@gmail.com</a>
              </div>
            </div>

            <div className="col s12 m4 center">
              <div className="icon-block">
                <Link to='/signup/Mentor'>
                  <img src="http://orig04.deviantart.net/b545/f/2012/306/7/b/bulbasaur_icon_by_vanmall-d5jpuyw.gif" style={{width:'54px', height: '54px'}}></img>
                  <h5 className="center black-text">Lindsey Font</h5>
                </Link>
                <a href='https://github.com/limifont'><img src="assets/GitHub.png" style={{width: "16px", height: "16px"}}></img> github.com/limifont</a>

                <p className="light center">Bio</p>
                <a href='mailto:lindsey.font@gmail.com'>lindsey.font@gmail.com</a>
              </div>
            </div>

            <div className="col s12 m4 center">
              <div className="icon-block">
                <Link to='/signup/Educator'>
                  <img src="http://pldh.net/media/pokemon/gen5/blackwhite_animated_shiny/007.gif" style={{width:'44px', height: '44px', marginTop: '9px'}}></img>
                  <h5 className="center black-text">Matt Hadley</h5>
                </Link>
                <a href='https://github.com/mghadley'><img src="assets/GitHub.png" style={{width: "16px", height: "16px"}}></img> github.com/mghadley</a>
                <p className="light center">Matt, a product of Utah and Arizona, graduated from BYU in 2013 with a degree in international relations. He then went to work for Goldman Sachs in Compliance for the next three years. One day he decided to try a free online coding course and not long after was looking into coding bootcamps. When he is not coding, he is usually out fly fishing. He is excited to be in a career he loves.</p>
                <a href='mailto:matthew.g.hadley@gmail.com'>matthew.g.hadley@gmail.com</a>
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