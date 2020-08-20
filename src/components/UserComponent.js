import React from 'react';
import SongService from '../services/SongService';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class UserComponent extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        };

     }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({name: event.target.value});
      }
    
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.name);
    //     event.preventDefault();
    //   }

    userSave = (event) => {
        event.preventDefault();
        let user = {userName : this.state.name}
        SongService.addUser(user);
        // console.log("chue", 50);
    }
    
      render() {
        return (
          // Apra added class bgimg
          <div class="bgimg">
        
          <br/>

   <nav class="navbar navbar-expand-lg">
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><b>Home </b><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><b>Leaderboard</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><b>Quiz</b></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><b>Name</b></a>
      </li>
      <form>
           <label class="nav-link">
              <input margin="5px" type="text" onChange={this.handleChange} />
            </label>
          </form>  
          <li class="nav-item">
          <Button onClick={this.userSave} align="centre" class="button" color="secondary"><Link to ="/song" ><b><font color="black"> Submit</font></b></Link></Button>
          </li>
    </ul>
    
  </div>
</nav>
            <div className="container">
                <img className="logosize" src="guessthatsong6.png" alt="guess that song"></img>
                {/* <h1 className = "h1">Home</h1> */}
                {/* <p className = "p">Home page body content</p> */}
               
                <Button variant="danger" className="btn">Play</Button>
              
        </div>

         </div>
        );
      }

}

export default UserComponent;