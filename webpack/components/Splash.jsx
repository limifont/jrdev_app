import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.button = this.buttonClick.bind(this);

    this.state = { splashPic: 'http://res.cloudinary.com/di0vizmtw/image/upload/c_scale,w_2000/v1468820442/splashpic_large.jpg', windowWidth: window.innerWidth }
  }

  buttonClick() {
    console.log(this.state.splashPic);
    let h = $(window).height();
    let w = $(window).width();
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);
    this.setState({ splashPic: 'http://res.cloudinary.com/di0vizmtw/image/upload/v1468820442/splashpic_large.jpg'});
    
    this.render();
  }

  render() {
    return(
      <div>
        <Parallax bgImage={this.state.splashPic} strength={200}>
          <div style={{width: '100vw', height: '90vh', marginTop: '15vh'}}>
            <br />
            <br />
              <div className="container">
                <div className="row">  
                  <div className="col s12 m12 l6">
                    <h2 className="header valign cyan-text text-accent-4">TEACHING KIDS TO CODE</h2>
                    <div className="row center col s12 m12 l12">
                      <a href="#get_started" className="btn col s12 m5 orange">Learn More</a>
                      <a href="#jrdev_team" className="btn col s12 m5 offset-m1 transparent" style={{border: "2px solid white"}}>OUR TEAM</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </Parallax>


        <div  id="get_started" className="white col s12 m12 l12" style={{display: 'flex', flexDirection: 'column', minHeight: '50vh'}}>
          <div className="container" style={{ minHeight: '20vh', marginTop: '15vh', marginBottom: '15vh'}}>        
            <div className="row center">
              <div className="col s12 m12 l12">
                <h5 style={{fontWeight: 'bold'}}>CHOOSE YOUR ACCOUNT TYPE</h5>
              </div>
            </div>
            <div className="row center">
              <div className="col s12 m12 l4 center" style={{height: "100%"}}>
                <div className="icon-block">
                  <Link to='/signup/Jrdev'>
                    <h2 className="center deep-orange-text text-lighten-1"><i className="medium material-icons">sentiment_very_satisfied</i></h2>
                    <h5 className="center black-text">JrDev</h5>
                  </Link>

                  <p className="light center" style={{textAlign: 'justify'}}>Here to learn how to code? With a JrDev account, you will have access to all exercises. Our exercises are designed for ages 10 - 15, but can be a great introduction to coding for anyone!</p>
                  <div className="btn transparent deep-orange-text text-lighten-1 hide-on-large-only" style={{border: "2px solid #ff7043", display: 'flex', flexDirection: 'column', minHeight: '2vh', wordWrap: 'break-word'}}>
                    <Link to='/signup/Jrdev' className="deep-orange-text text-lighten-1">Sign up as JrDev</Link>
                  </div>
                </div>
              </div>

              <div className="col s12 m12 l4 center" style={{height: "100%"}}>
                <div className="icon-block">
                  <Link to='/signup/Mentor'>
                    <h2 className="center deep-orange-text text-lighten-1"><i className="medium material-icons">group</i></h2>
                    <h5 className="center black-text">Mentor</h5>
                  </Link>

                  <p className="light center" style={{textAlign: 'justify'}}>Mentor accounts are for those looking to help JrDevs. This account is ideal for parents, older siblings, tutors, or any other type of mentor. You'll be able to add Jr Devs to you mentorship and monitor their progress. Don't know how to code? Don't worry--you'll have access to all the exercises too!</p>
                  <div className="btn transparent deep-orange-text text-lighten-1 hide-on-large-only" style={{border: "2px solid #ff7043", display: 'flex', flexDirection: 'column', minHeight: '2vh', wordWrap: 'break-word'}}>
                    <Link to='/signup/Mentor' className="deep-orange-text text-lighten-1">Sign up as Mentor</Link>
                  </div>
                </div>
              </div>

              <div className="col s12 m12 l4 center" style={{height: "100%"}}>
                <div className="icon-block">
                  <Link to='/signup/Educator'>
                    <h2 className="center deep-orange-text text-lighten-1"><i className="medium material-icons">edit</i></h2>
                    <h5 className="center black-text">Educator</h5>
                  </Link>

                  <p className="light center" style={{textAlign: 'justify'}}>Educator accounts are for those looking to teach groups of kids. Educators can organize their kids into classrooms, see classroom statistics, and track individual progress. Just like the other accounts, an Educator has access to all exercises.</p>
                  <div className="btn transparent deep-orange-text text-lighten-1 hide-on-large-only" style={{border: "2px solid #ff7043", display: 'flex', flexDirection: 'column', minHeight: '2vh', wordWrap: 'break-word'}}>
                    <Link to='/signup/Educator' className="deep-orange-text text-lighten-1">Sign up as Educator</Link>
                  </div>              
                </div>
              </div>
            </div>
            <div className="row center">
              <div className="col s12 l4"> 
                <div className="btn transparent deep-orange-text text-lighten-1 hide-on-med-and-down" style={{border: "2px solid #ff7043", display: 'flex', flexDirection: 'column', minHeight: '2vh', wordWrap: 'break-word'}}>
                  <Link to='/signup/Jrdev' className="deep-orange-text text-lighten-1">Sign up as JrDev</Link>
                </div>
              </div>
              <div className="col s12 l4"> 
                <div className="btn transparent deep-orange-text text-lighten-1 hide-on-med-and-down" style={{border: "2px solid #ff7043", display: 'flex', flexDirection: 'column', minHeight: '2vh', wordWrap: 'break-word'}}>
                  <Link to='/signup/Mentor' className="deep-orange-text text-lighten-1">Sign up as Mentor</Link>
                </div>
              </div>
              <div className="col s12 l4"> 
                <div className="btn transparent deep-orange-text text-lighten-1 hide-on-med-and-down" style={{border: "2px solid #ff7043", display: 'flex', flexDirection: 'column', minHeight: '2vh', wordWrap: 'break-word'}}>
                  <Link to='/signup/Educator' className="deep-orange-text text-lighten-1">Sign up as Educator</Link>
                </div> 
              </div>
            </div>
          </div>
        </div>
          
            

        <Parallax bgImage="http://res.cloudinary.com/di0vizmtw/image/upload/v1468821593/splashpic2_copy_ber9cl.jpg" strength={100}>
          <div id="overlay" style={{width: '100vw', height: '65vh'}}></div>
        </Parallax>

            
        <div id="jrdev_team" className="white col s12 m12 l12" style={{display: 'flex', flexDirection: 'column', minHeight: '50vh'}}>
          <div  id="black_box" className="col s12 m12 l12" style={{display: 'flex', flexDirection: 'column', minHeight: '50vh'}}>
            <div className="container" style={{display: 'flex', flexDirection: 'column', minHeight: '20vh', marginTop: '15vh', marginBottom: '15vh'}}>
              <div className="row center">
                <div className="col s12 m12 l12">
                  <h5 className="black-text" style={{fontWeight: 'bold'}}>JRDEV TEAM</h5>
                </div>
              </div>
              
              <div className="row center">
                <div className="col s12 m12 l4 center">
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

                <div className="col s12 m12 l4 center">
                  <div className="icon-block">
                    <Link to='/about_us'>
                      <img src="http://res.cloudinary.com/di0vizmtw/image/upload/c_scale,w_500/v1468904691/lindsey_pijud6.jpg" className="responsive-img circle" style={{width: '75%', height: 'auto'}}></img>
                      <h5 className="center green-text">Lindsey Font</h5>
                    </Link>
                    <p className="light center black-text">Lindsey graduated from Brigham Young University in 2014 with a degree in Latin American Studies, emphasizing in Spanish and a minor in Art. Her love for languages translated well into coding when she started learning how to program arduinos. She hopes to use her new coding skills along with her artistic abilities and understanding of people to make the web a more beautiful and user friendly environment.</p>

                    <a href='https://github.com/limifont' target="github"><img src="assets/GitHub.png"></img></a>
                    <a href='https://www.linkedin.com/in/lindseyfont' target="linkedin"><img src="assets/link.png" style={{ height: '32px', marginLeft: '25px', marginRight: '25px'}}></img></a>
                    <a href='mailto:lindsey.font@gmail.com'><img src="assets/email.png" style={{ height: '32px'}}></img></a>
                  </div>
                </div>

                <div className="col s12 m12 l4 center">
                  <div className="icon-block">
                    <Link to='/about_us'>
                      <img src="http://res.cloudinary.com/di0vizmtw/image/upload/c_scale,w_500/v1468901517/IMG_8389_up5xl6.jpg" className="responsive-img circle" style={{width: '75%', height: 'auto'}}></img>
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

        <Parallax bgImage="http://res.cloudinary.com/di0vizmtw/image/upload/v1468821798/splashpic3_copy_2_pm6rjo.jpg" strength={100}>
          <div style={{width: '100vw', height: '30vh'}}></div>
        </Parallax>
      </div>

    )

      
  }
}

export default Splash;


// const Splash = () => (
// )

// export default Splash;