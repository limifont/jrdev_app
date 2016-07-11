import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router';

const Splash = () => (
  <div>
      <Parallax bgImage="assets/Kid1.jpg" strength={200}>
        <div>
          <div className="container">
              <h1 className="header center cyan-text text-accent-3">Jr. Devs</h1>
              <div className="row center">
                <h5 className="header col s12 light white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
              </div>
              <div className="row center">
                <a href="" id="download-button" className="btn-large waves-effect waves-light cyan accent-3">Get Started</a>
              </div>
          </div>
        </div>
      </Parallax>

      <div className="container">
        <div className="section">

          <div className="row section">

            <div className="col s12 m4 center">
              <div className="icon-block">
                <h2 className="center deep-orange-text text-lighten-1"><i className="material-icons">group</i></h2>
                <h5 className="center">Jr. Devs</h5>

                <p className="light center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to='/signup/Jrdev'>Create a Jr Dev Account</Link>
              </div>
            </div>

            <div className="col s12 m4 center">
              <div className="icon-block">
                <h2 className="center deep-orange-text text-lighten-1"><i className="material-icons">insert_emoticon</i></h2>
                <h5 className="center">Mentors</h5>

                <p className="light center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to='/signup/Mentor'>Create a Mentor Account</Link>
              </div>
            </div>

            <div className="col s12 m4 center">
              <div className="icon-block">
                <h2 className="center deep-orange-text text-lighten-1"><i className="material-icons">sentiment_very_satisfied</i></h2>
                <h5 className="center">Educators</h5>
                <p className="light center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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

          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send brown-text"></i></h3>
              <h4>Contact Us</h4>
              <p className="left-align light center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
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