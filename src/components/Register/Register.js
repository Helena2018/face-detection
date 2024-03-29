import React from "react";

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      registerNameChange: '',
      registerEmailChange: '',
      registerPasswordChange: '',
    }
  }

  onRegisterName = (event) => {
    this.setState({registerNameChange: event.target.value});
  }

  onRegisterEmail = (event) => {
    this.setState({registerEmailChange: event.target.value});
  }

  onRegisterPassword = (event) => {
    this.setState({registerPasswordChange: event.target.value});
  }

  onSubmiteRegister = () => {
    const { registerNameChange, registerEmailChange, registerPasswordChange } = this.state;
    fetch('https://face-detection-api-kaje.onrender.com/register', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        name: registerNameChange,
        email: registerEmailChange,
        password: registerPasswordChange,
      })
    })
      .then(res => res.json())
      .then(user => {
        if(user[0].email) {
          this.props.loadUser(user[0]);
          this.props.onRouteChange('home');
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                  <input 
                    onChange={this.onRegisterName}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" 
                    name="name"  
                    id="name" />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input 
                    onChange={this.onRegisterEmail}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" 
                    name="email-address"  
                    id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input 
                    onChange={this.onRegisterPassword}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" 
                    name="password"  
                    id="password" />
                </div>
              </fieldset>
              <div className="">
                <input onClick={this.onSubmiteRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
              </div>
            </div>
          </main>
        </article>
      </div>
    )
  }
  
}

export default Register;
