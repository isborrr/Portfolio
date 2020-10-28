import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import image from './image.jpg';
import GitHub from './images/GitHub.png';
import graduation from './images/graduation.jpg';
import code_the_dream from './images/code_the_dream.png';
import linkdln from './images/linkdln.png';
import mail from './images/mail.png';
import './App.css';
import Profile from './Profile.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact';



class App extends React.Component {
  state = {
    projects: []
  }
  componentDidMount() {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Project?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.records)
        console.log("this", data.records[0].fields.Name)
        this.setState({ projects: data.records })
        console.log("this", this.state.records[0].fields.Name)
      })
      .catch(error => console.log(error))
  }

  render() {
    const { projects } = this.state
    return (
      <div className="App">
        <Router>
          <div className="profilePicture">
            <img src={image} className="logo" alt="logo" />
            <header className="App-header">

              <button className="btn btn-dark niceFont"><h4><Link to="/">Profile</Link></h4></button>
              <button className="btn btn-dark niceFont"> <h4><Link to="/users">Projects</Link></h4></button>
              <button className="btn btn-dark niceFont"> <h4><Link to="/contact">Contact</Link></h4></button>
              <button className="btn btn-dark niceFont"> <h4><Link to="/about">About</Link></h4></button>
              <div className="myAccount">
                <div className="school toFlex">
                  <a href="https://www.laguardia.edu/home/Default.aspx">
                    <img src={graduation} className="myMedia" alt="logo" />
                  </a>
                  <div className="schoolInfo vis ">
                    <span>School Info</span>
                  </div>
                </div>
                <div className="codeTheDream toFlex">
                  <a className="myMedi " href="https://learn.codethedream.org/">
                    <img src={code_the_dream} className="myMedia" alt="logo" />
                  </a>
                  <div className="codeTheDreamInfo vis">
                    <span>Code the Dream</span>
                  </div>
                </div>
                <div className="github toFlex">
                  <a href="https://github.com/isborrr">
                    <img src={GitHub} className="myMedia" alt="logo" />
                  </a>
                  <div className="githubInfo vis">
                    <span>Github account</span>
                  </div>
                </div>
                <div className="linkedin toFlex">
                  <a href="https://www.linkedin.com/in/ismael-boro-991917152/">
                    <img src={linkdln} className="myMedia" alt="logo" />
                  </a>
                  <div className="linkedinInfo vis">
                    <span>Linkedin account</span>
                  </div>
                </div>
                <div className="mail toFlex">
                  <img src={mail} className="myMedia" alt="logo" />
                  <div className="mailInfo vis">
                    <span>My email</span>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="container">
            <Switch>
              <Route path="/users">
            <h4>HTML, JavaScript, CSS, Bootstrap, React, Wireframe, npm, Node.js</h4>
                {projects.map(book => (
                  <Projects Name={book.fields.Name} 
                            Descriptions={book.fields.Descriptions} 
                            Images={book.fields.Images[0]} 
                            key={book.fields.id} />
                ))}
                  <div className='info'>
                       <h3>Thank you</h3>
                   </div>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Profile />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}
export default App;
