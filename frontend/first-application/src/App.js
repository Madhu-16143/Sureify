import React from "react";
import reactDOM from "react-dom";
import './App.scss'
import axios from "axios";
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }


  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {

    return (
      <div className="root-container">

        <div className="box-controller">
          <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")}
            onClick={this.showLoginBox.bind(this)}>
            Login
        </div>

          <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")}
            onClick={this.showRegisterBox.bind(this)}>
            Register
       </div>
        </div>

        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisterOpen && <RegisterBox />}
        </div>
      </div>
    );
  }
}





class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", password: "", errors: [], pwdState: null };
  }

  showValidationErr(elm, msg) {
    this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
  }


  //Remove a specific element from the array 
  clearValidationErr(elm) {
    this.setState((prevState) => {
      let newArr = [];
      //Add all elements from the prev array to the new one that has a different element
      for (let err of prevState.errors) {
        // eslint-disable-next-line eqeqeq
        if (elm != err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }
  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    //We want to clear the error when ever the user type something new 
    this.clearValidationErr("username");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");

    this.setState({ pwdState: "weak" });
    if (e.target.value.length > 4) {
      this.setState({ pwdState: "medium" });
    }
    if (e.target.value.length > 8) {
      this.setState({ pwdState: "strong" });
    }
  }


  submitLogin(e) {
    e.preventDefault();
    let valid = true
    // eslint-disable-next-line eqeqeq
    if (this.state.username == "") {
      valid = false
      this.showValidationErr("username", "Username Cannot be empty!");
    }
    // eslint-disable-next-line eqeqeq
    if (this.state.password == "") {
      valid = false
      this.showValidationErr("password", "Password Cannot be empty!");
    }

    // let username = e.target.value
    if (valid) {
      let formData = new FormData();
      formData.append("username", this.state.username);
      formData.append("password", this.state.password);
      // C:\xampp\htdocs\Sureify_backend\Sureify\first-application-backend\login.php
      // C:\xampp\htdocs\sureify\Sureify\backend\login.php
      const url = "https://evening-bastion-07137.herokuapp.com";
      axios.post(url, formData)
        .then(res => {
          if (res.data.status === true) {
            window.location = '/AudioPlayer'
          }
          else {
            window.location = '/'
          }
        })
        .catch(err => console.log(err));
    }
    else{
      alert('Username or password shouldnt be empty')
    }

  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>

        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="login-input" placeholder="Username" onChange={this.onUsernameChange.bind(this)} />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.onPasswordChange.bind(this)} />
          </div>

          <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>

        </div>
      </div>
    );
  }

}




class RegisterBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "", errors: [], pwdState: null };
  }


  showValidationErr(elm, msg) {
    this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] }));
  }


  //Remove a specific element from the array 
  clearValidationErr(elm) {
    this.setState((prevState) => {
      let newArr = [];
      //Add all elements from the prev array to the new one that has a different element
      for (let err of prevState.errors) {
        // eslint-disable-next-line eqeqeq
        if (elm != err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }


  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    //We want to clear the error when ever the user type something new 
    this.clearValidationErr("username");
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");

    this.setState({ pwdState: "weak" });
    if (e.target.value.length > 4) {
      this.setState({ pwdState: "medium" });
    }
    if (e.target.value.length > 8) {
      this.setState({ pwdState: "strong" });
    }
  }

  submitRegister(e) {
    e.preventDefault();
    let valid = true
    // eslint-disable-next-line eqeqeq
    if (this.state.username == "") {
      valid = false
      this.showValidationErr("username", "Username Cannot be empty!");
    }
    // eslint-disable-next-line eqeqeq
    if (this.state.email == "") {
      valid = false
      this.showValidationErr("email", "Email Cannot be empty!");
    }
    // eslint-disable-next-line eqeqeq
    if (this.state.password == "") {
      valid = false
      this.showValidationErr("password", "Password Cannot be empty!");
    }
    if(valid){
    let formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    // const url = "http://localhost:8080/insert";
    const url="https://evening-bastion-07137.herokuapp.com"
    axios.post(url, formData)
      .then(res => {
        if (res.data.status === true) {
          window.location = '/AudioPlayer'
        }
        else {
          alert("User already exits please login");
        }
      })
      .catch(err => console.log(err));
    }
    else
    {
      alert('please enter valid details')
    }

  }

  render() {
    let usernameErr = null, passwordErr = null, emailErr = null;
    //Loop and find which ones has the error
    for (let err of this.state.errors) {
      //Assign the validation error message 
      // eslint-disable-next-line eqeqeq
      if (err.elm == "username") {
        usernameErr = err.msg;
      }
      // eslint-disable-next-line eqeqeq
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
      // eslint-disable-next-line eqeqeq
      if (err.elm == "email") {
        emailErr = err.msg;
      }
      //No (else if or else) statements cause we need to check for all possible elements
    }

    let pwdWeak = false, pwdMedium = false, pwdStrong = false;
    //Weak password set onlt the pwdWeak to true, cause render only the first bar 
    // eslint-disable-next-line eqeqeq
    if (this.state.pwdState == "weak") {
      pwdWeak = true;
      // eslint-disable-next-line eqeqeq
    } else if (this.state.pwdState == "medium") {
      //Medium pwd then render the weak and medium bars 
      pwdWeak = true;
      pwdMedium = true;
      // eslint-disable-next-line eqeqeq
    } else if (this.state.pwdState == "strong") {
      //Strong, render all the previoud bars 
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }
    return (
      <div className="inner-container">

        <div className="header">
          Register
        </div>


        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" className="login-input" placeholder="Username" onChange={this.onUsernameChange.bind(this)} />
            <small className="danger-error">{usernameErr ? usernameErr : ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email" onChange={this.onEmailChange.bind(this)} />
            <small className="danger-error">{emailErr ? emailErr : ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.onPasswordChange.bind(this)} />
            <small className="danger-error">{passwordErr ? passwordErr : ""}</small>

            {this.state.password && <div className="password-state">
              <div className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}> </div>
              <div className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}> </div>
              <div className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}> </div>
            </div>}
          </div>

          <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}


reactDOM.render(<App />, document.getElementById("root"));
export default App;
