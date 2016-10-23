import 'whatwg-fetch';
export default class Api {

  static get host(){
    return "http://localhost:8000";
  }

  static get baseUrl() {
    return "/api";
  }

  get(path){
    return fetch(Api.host+Api.baseUrl+( path || '/'))
      .then( this.checkStatus )
      .then( this.parseJSON )
      ;
  }

  _send(path,data,method){
    return fetch(Api.host+Api.baseUrl+( path || '/'),{
      method: method || 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'body': JSON.stringify(data)
      }
    })
      .then( this.checkStatus )
      .then( this.parseJSON )
      ;
  }

  add(path,data) {
    return this._send(path,data,'POST');
  }

  update(path,data) {
    return this._send(path,data,'PUT');
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error
    }
  }

  parseJSON(response) {
    return response.json()
  }

}
