import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import UserProfile from '../UserProfile/UserProfile'
import OthersProfile from '../OthersProfile/OthersProfile';
import LandingPage from '../LandingPage/LandingPage';
import TravelersNear from '../TravelersNear/TravelersNear';
import Dash from '../Dash/Dash'


export default class Main extends Component {
  constructor () {
    super();
    this.state = {
      username: '',
      city: '',
      country: '',
      email: '',
      first_name: '',
      last_name: '',
    }
  }


  render() {

    return (
      <div>
        <Switch> 
              <Route exact path="/" 
                render={() => <LandingPage 
                authenticated={this.props.isAuthenticated}
                handleLoginFormChange={this.props.handleLoginFormChange}
                handleLogin={this.props.handleLogin}
                handleSignUp={this.props.handleSignUp}
                username={this.props.username}
                password={this.props.password}
                otherUser={this.props.otherUser}
                handleOthersView={this.props.handleOthersView}
              />} />
              {/* <Route path="/dashboard" 
                render={() => <Dashboard />}/> */}
    
              <Route exact path="/travelers_near_you"
                render={() => <TravelersNear  
                  authenticated={this.props.isAuthenticated}/>
              }/>
              <Route path="/dashboard"
                render={() => <Dash 
                  isauthenticated={this.props.isAuthenticated}
                  otherUser={this.props.otherUser}
                  handleOthersView={this.props.handleOthersView}
                  />
              }/>
              <Route path="/user"
                render={() => <UserProfile 
                  authenticated={this.props.isAuthenticated}
                  otherUser={this.props.otherUser}
                  handleOthersView={this.props.handleOthersView}
                  />
              }/>
              <Route path='/othersprofile'
                render={() => <OthersProfile 
                  authenticated={this.props.isAuthenticated}
                  first_name={this.props.first_name}
                  last_name={this.props.last_name}
                  home_area={this.props.home_area}
                  otherUser={this.props.otherUser}
                  handleOthersView={this.props.handleOthersView}
                  />
              }/>
      
        </Switch> 
      </div>
    )
  }
}
