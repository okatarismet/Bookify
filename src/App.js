import React from 'react';
import './App.css';
import AdminSideDrawer from './components/AdminSideDrawer'
import AdminLogin from './components/AdminLogin'

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = { 
      adminLoggedIn: true,
      status:'admin'
    };

    this.adminLogin = this.adminLogin.bind(this)
    this.toAdminLogin = this.toAdminLogin.bind(this)
    this.logout = this.logout.bind(this)
  }
  toAdminLogin() {
    if(true){
      this.setState({
        status:'toadmin'
      })
    }
  }
  adminLogin(email, password) {
    if(true){
      this.setState({
        status:'admin'
      })
    }
  }
  logout() {
    if(true){
      this.setState({
        status:'unregistered'
      })
    }
  }
  
  render() {
    let currentPage = null;
    currentPage = <AdminSideDrawer toadmin={this.toAdminLogin} logout={this.logout} status={this.state.status}/>
    if(this.state.status == 'toadmin'){
      currentPage = <AdminLogin adminLogin={this.adminLogin}/>
    }
    return <div className="App">
        {currentPage}
    </div>
  }
}

export default App;
