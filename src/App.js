import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg'

import './App.css';


const USER_ID = 'ta8wbh0f80d0';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '3f79d6f9fe584471b4dd361ec6012901';
const APP_ID = 'FaceDetection2022';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin',
      isSignin: false,
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const height = Number(image.height);
    const width = Number(image.width);
    return{
      topRow: clarifaiFace.top_row * height,
      bottomRow: height - (clarifaiFace.bottom_row * height),
      leftCol: clarifaiFace.left_col * width,
      rightCol: width - (clarifaiFace.right_col * width)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box})
    console.log(box)
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imgUrl: this.state.input})

    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": this.state.input
                  }
              }
          }
      ]
    })

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
    .catch(error => console.log('error', error));
    }

    onRouteChange = (route) => {
      if(route === 'signout') {
        this.setState({isSignin: false})
      } else if(route === 'home'){
        this.setState({isSignin: true})
      }
      this.setState({route: route})
    }
 

    render() {
      return (
        <div className="App">
          <ParticlesBg color="e0b1cb" type="cobweb" bg={true} />
          <Navigation isSignin={this.state.isSignin} onRouteChange={this.onRouteChange} />
          {this.state.route === 'home'
            ? <div>
                <Logo />
                <Rank />
                <ImageLinkForm 
                onButtonSubmit={this.onButtonSubmit}
                onInputChange ={this.onInputChange}
                />
                <ImageRecognition imgUrl={this.state.imgUrl} box={this.state.box}/>
              </div>
            : (this.state.route === 'signin'
                ? <Signin onRouteChange={this.onRouteChange} />
                : <Register onRouteChange={this.onRouteChange} />
             )
          }
        </div>
      );
    }
}

export default App;
