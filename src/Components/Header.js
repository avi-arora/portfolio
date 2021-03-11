import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Pdf from '../document/AvishekArora-CV.pdf'
import ReactGA from 'react-ga'


class Header extends Component {
   downloadResumeHandler(){
   ReactGA.event({
      category: "Resume Button",
      action: "Resume Downloaded."
   })
   }
   redirectGithubHandler(){
      ReactGA.event({
         category:"Github Redirection", 
         action: "Redirected to github"
      })
   }
  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
               <a href={Pdf} onClick={this.downloadResumeHandler} without rel="noopener noreferrer" target="_blank" data-title="AvishekArora-CV" className="button btn project-btn"><i className="fa fa-book"></i>Download CV</a>
               <a target="_blank" onClick={this.redirectGithubHandler} href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

   </header>
    );
  }
}

export default Header;
