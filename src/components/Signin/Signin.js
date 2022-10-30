import React from "react";



class Signin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      signinEmailChange: '',
      signinPasswordChange: '',
    }
  }

  onEmailChange = (event) => {
    this.setState({signinEmailChange: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signinPasswordChange: event.target.value})
  }

  onSubmiteSignin = () => {
    const { signinEmailChange, signinPasswordChange } = this.state;
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: signinEmailChange,
        password: signinPasswordChange,
      })
    })
      .then(res => res.json())
      .then(user => {
        if(user[0].id) {
          this.props.loadUser(user[0]);
          this.props.onRouteChange('home')
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return(
      <div>
        <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input 
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" 
                    name="email-address"  
                    id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input 
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" 
                    name="password"  
                    id="password" />
                </div>
              </fieldset>
              <div className="">
                <input 
                  onClick={() => this.onSubmiteSignin()} 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" 
                  value="Sign in" />
              </div>
              <div className="lh-copy mt3">
                <p onClick={() => onRouteChange('register')} href="#0" className="center f6 link dim black db">Register</p>
              </div>
            </div>
          </main>
        </article>
      </div>
    )
  }
  
}

export default Signin;
