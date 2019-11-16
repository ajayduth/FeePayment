import React from 'react';
import { logina, logouts, logouta } from '../utils';
import Style from './Login.module.css';
import Axios from 'axios'
class Admin extends React.Component  {
    constructor(props){
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        username: '',
        password: ''
      };
    };

    componentDidMount = () => {
      logouta();
      logouts();
    };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    handleLogin = () => {
      Axios.post('http://localhost:3001/users/login',{
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if(res.data.success) {
          logina(res.data.token);
          this.props.history.push('/Adminhome');
        }  
      });
    }

    handleClick = () => {
        this.props.history.push('/');
    }
render(){
    return (
      <div adminwrap>
      <div className={Style.topRight}>
      Are you a Student?   
      <button className={Style.button2} onClick={this.handleClick}>Login</button>
      </div>
      <div className={Style.login}>
      <div className={Style.imagecssadmin}>
      <img src={require("./cet.png")}/>
      <hr/>
      </div>
      <div className={Style.formadmin}>
      <span>Admin</span><br/><br/>
      <input type="text" id="username" name="username" placeholder="UserName" value={this.state.username} onChange={this.handleChange} />
      <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
      <button type="submit" className={Style.button4} onClick={this.handleLogin}>Login</button>
      </div>
      </div>
      </div>

  );
}
}


export default Admin;
