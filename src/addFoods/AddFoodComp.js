import { Link } from 'react-router';
import React from 'react';


export default class AddFoodComp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        description: '',
        imageUrl: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleImageUrl = this.handleImageUrl.bind(this);
  };

  handleName(event) {
    this.setState({ name: event.target.value });
  };


  handleDescription(event){
    this.setState({ description: event.target.value });
  };

  handleImageUrl(event){
    this.setState({ imageUrl: event.target.value });
      console.log(event);
  };

  onSubmit() {
    this.props.onSubmit({ name: "Kajuburffi" });
  }

  render() {
    return (
    <div className="row">
      <div className="col s12 valign-wrapper" >
        <h4 className="center orange-text" >Add Food</h4>
        <Link id="image" to="/" type="submit" className="waves-effect waves-light btn left valign" >
          <i className="mdi mdi-navigation-arrow-back" ></i>
        </Link>
      </div>
   <form className="col s12">
     <div className="row">
       <div className="input-field col s12">
         <input id="name" type="text" className="" onChange={ this.handleName } />
         <label htmlFor="name" >Name</label>
       </div>
       <div className="input-field col s12">
         <input id="description" type="text" className="" onChange={ this.handleDescription } />
         <label htmlFor="description" >Description</label>
       </div>
       <div className="input-field col s12">
         <input id="imageUrl" type="text" className=""  onChange={ this.handleImageUrl } />
         <label htmlFor="imageUrl" >Image URL</label>
       </div>
       <div className="input-field col s12 m3" >
         <a onClick={ () => { this.props.onSubmit({
            name: this.state.name,
            description: this.state.description,
            image: this.state.imageUrl
          }) } } className="waves-effect waves-light btn" >
           Add
         </a>
       </div>
     </div>
   </form>
 </div>

    );
  }
}
