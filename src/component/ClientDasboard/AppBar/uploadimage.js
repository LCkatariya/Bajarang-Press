import React ,{Component} from 'react';


export default class ImageUpload extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     file: '',
    //     imagePreviewUrl: ''
    //   };
    //   this._handleImageChange = this._handleImageChange.bind(this);
    //   this._handleSubmit = this._handleSubmit.bind(this);
    // }
  
    // _handleSubmit(e) {
    //   e.preventDefault();
    //   // TODO: do something with -> this.state.file
    // }
  
    // _handleImageChange(e) {
    //   e.preventDefault();
  
    //   let reader = new FileReader();
    //   let file = e.target.files[0];
  
    //   reader.onloadend = () => {
    //     this.setState({
    //       file: file,
    //       imagePreviewUrl: reader.result
    //     });
    //   }
  
    //   reader.readAsDataURL(file)
    // }
  
    render() {
 
      return (
        <div>
          <form >
            <input type="file" />
          </form>
         
        </div>
      )
    }
  
  }