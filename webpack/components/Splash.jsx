import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router';

const Splash = () => (
  <div>
      <Parallax bgImage="assets/Kid1.jpg" strength={200}>
        <div style={{width: 1250, height: 400, marginTop: 145}}>
          <h1 className="header valign center cyan-text text-accent-3">Jr. Devs</h1>
          <div className="row valign center">
            <h5 className="header col s12 light white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
          </div>
        </div>
      </Parallax>

      <div className="container">
        <div className="section">

          <div className="row section center">
            <h4>Get Started</h4>
            <h5>Choose your account type</h5>
            <div className="col s12 m4 center">
              <div className="icon-block">
                <h2 className="center deep-orange-text text-lighten-1"><i className="material-icons">group</i></h2>
                <h5 className="center">Jr. Dev</h5>

                <p className="light center">Here to learn how to code? With a Jr Dev account, you'll have access to all exercises. Our exercises are designed for ages 10 - 15, but can be a great introduction to coding for anyone!</p>
                <Link to='/signup/Jrdev'>Create a Jr Dev Account</Link>
              </div>
            </div>

            <div className="col s12 m4 center">
              <div className="icon-block">
                <h2 className="center deep-orange-text text-lighten-1"><i className="material-icons">insert_emoticon</i></h2>
                <h5 className="center">Mentor</h5>

                <p className="light center">Mentor accounts are for those looking to help Jr Devs. This account is ideal for parents, older siblings, tutors, or any other type of mentor. You'll be able to add Jr Devs to you mentorship and monitor their progress. Don't know how to code? Don't worry--you'll have access to all the exercises too!</p>
                <Link to='/signup/Mentor'>Create a Mentor Account</Link>
              </div>
            </div>

            <div className="col s12 m4 center">
              <div className="icon-block">
                <h2 className="center deep-orange-text text-lighten-1"><i className="material-icons">sentiment_very_satisfied</i></h2>
                <h5 className="center">Educator</h5>
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

          <div className="row">
            <div className="col s12 center">
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