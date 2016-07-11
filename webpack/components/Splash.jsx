import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router';

const Splash = () => (
  <div>
      <Parallax bgImage="assets/Kid1.jpg" strength={200}>
        <div style={{width: 800, height: 425}}>
          <div class="container">
              <h1 class="header center cyan-text text-accent-3">Jr. Devs</h1>
              <div class="row center">
                <h5 class="header col s12 light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
              </div>
              <div class="row center">
                <a href="" id="download-button" class="btn-large waves-effect waves-light cyan accent-3">Get Started</a>
              </div>
          </div>
        </div>
      </Parallax>

      <div class="container">
        <div class="section">

          <div class="row section">

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center deep-orange-text text-lighten-1"><i class="material-icons">group</i></h2>
                <h5 class="center">Jr. Devs</h5>

                <p class="light center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p><Link to='/signup/Jrdev'>Create a Jr Dev Account</Link></p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center deep-orange-text text-lighten-1"><i class="material-icons">insert_emoticon</i></h2>
                <h5 class="center">Mentors</h5>

                <p class="light center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center deep-orange-text text-lighten-1"><i class="material-icons">sentiment_very_satisfied</i></h2>
                <h5 class="center">Educators</h5>
                <p class="light center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Parallax bgImage="assets/kid2.png" strength={200}>
        <div style={{width: 800, height: 425}}></div>
      </Parallax>

      <div class="container">
        <div class="section">

          <div class="row">
            <div class="col s12 center">
              <h3><i class="mdi-content-send brown-text"></i></h3>
              <h4>Contact Us</h4>
              <p class="left-align light center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
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