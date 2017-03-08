import axios from 'axios'

const RobotApi = {
  sendRobotMovementCommand: (data) => {
    //console.log('command_to_robot', JSON.stringify(data));
    return socket.emit('command_to_robot', data)
  },
  
  getMainPageData: () => {
    return axios.get('https://api.unsplash.com/photos/?page=1&per_page=20&client_id=6bb5bb78cfde81736048d37f2d3399d5024a6a5be277ad88a4b1a366a5e4f77f').then(response => response)
  },

  retrieveSnapshots: () => {
    return axios.get('/api/v1/snapshots').then(response => response)
  },

  getXControlToken: () => {
    return axios.get('/internal/braintree/token').then(response => response)
  },
  
  getDonateData: (username) => {
    return axios.get('/api/v1/accounts/' + username).then(response => response)
  },

  getUserProfileData: () => {
    return axios.get('/api/v1/accounts').then(response => response)
  },

  postUserProfile: (data) => {
    var imageData = new FormData();
    imageData.append('profile_description', data.profile_description);
    imageData.append('phone_number', data.phone_number);
    imageData.append('paypal_url', data.paypal_url);
    imageData.append('file', data.image);
    return axios.post('/api/v1/accounts/', imageData, {}).then(response => response)
  },

  postSnapshot: (data) => {
    return axios.post('/api/v1/snapshots/',
    {
     image: data.image,
     robot_id: data.robot_id,
     robot_name: data.robot_name,
     username: data.username,
     caption: data.caption
    }, {}).then(response => response)
  },

  getSnapshot: (data) => {
    return axios.get('/api/v1/snapshots/' + data.id).then(response => response)
  },

  postUserProfileRobots: (data) => {
    try {
      if (data.robots) {
        let newRobotsWithJson = data.robots.map((r) => {
          if (r.panels) {
            r.panels = JSON.parse(r.panels)
            return r
          } else {
            return r
          }
        })
        return axios.post('/api/v1/accounts/robots', {robots: newRobotsWithJson}, {}).then(response => response)
      }
    } catch (e) {
      alert("Invalid json. Please check syntax for panels")
    }
  },

  postPhoneNumber: (data) => {
    return axios.post('/api/v1/accounts/phone_number', { phone_number: data.phone_number }, {}).then(response => response)
  },

  postPhoneNumberToken: (data) => {
    return axios.post('/api/v1/accounts/phone_number/token', { token: data.phone_number_token }, {}).then(response => response)
  },

  postSubscribeToRobot: (data) => {
    return axios.post('/api/v1/accounts/subscribe', { robot_id: data.robot_id }, {}).then(response => response)
  },

  postUnsubscribeFromRobot: (data) => {
    return axios.post('/api/v1/accounts/unsubscribe', { robot_id: data.robot_id }, {}).then(response => response)
  },

  postLogin: (data) => {
    return axios.post('/api/v1/authenticate', { username: data.username, password: data.password}, {}).then(response => response)
  },

  postLoginModalLogin: (data) => {
    return axios.post('/api/v1/authenticate', { username: data.login_username, password: data.login_password}, {}).then(response => response)
  },

  postLoginModalSignup: (data) => {
    return axios.post('/api/v1/register', { username: data.signup_username, password: data.signup_password, email: data.signup_email}, {}).then(response => response)
  }

};

export default RobotApi;
