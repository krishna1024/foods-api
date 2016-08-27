import 'whatwg-fetch';
export default class HTTPResource {

  constructor(){
    this.baseURL = '/api';
  }

  getAll() {
    return fetch(this.baseURL + '/foods')
            .then( data => { return data.json() } );
  }

  get($id) {

  }


  update() {

  }

  create($data) {
    console.dir($data);
    return fetch(this.baseURL + '/foods' , {
      method: 'POST',
      body: JSON.stringify($data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  }).then( data => { return data.json() } );
  }

  delete($id) {

  }
}
