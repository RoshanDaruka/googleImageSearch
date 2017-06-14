import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { searchImages, newImageId, collapseModal } from '../actions/searchImages.js';
import { closestByClass } from '../utils/utils.js';
class GoogleImageSearchApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleBasicClick = this.handleBasicClick.bind(this);
    this.keyboardMovement = this.keyboardMovement.bind(this);
  }

  componentDidMount(){
    window.addEventListener("keydown", this.keyboardMovement, false);
  }

  handleChange(event) {
    if(event.keyCode == 13){
      this.props.startSearching(event.target.value);
    }
  }

  handleStateChange(event) {
    this.setState({value: event.target.value});
  }

  handleBasicClick(index) {
    if(this.props.imageId == index){
      this.props.collapseInfo();
    }else{
      this.props.changeImageId(index);      
    }
  }

  keyboardMovement(event){
    console.log("hi");
    if(event.keyCode == 39){
      if(this.props.imageId < this.props.items.length )
        this.props.changeImageId((this.props.imageId + 1));
    }else if(event.keyCode == 37){
      if(this.props.imageId >= 0)
        this.props.changeImageId(this.props.imageId - 1);
    }
  }

  render() {
    return (
      <div className="page-home">
        <div className="searchContainer">
          <input className="inputBox" type="search" value={this.state.value} onChange={this.handleStateChange} onKeyDown={this.handleChange}/>
        </div>
        <br/>
        {
          this.props.items ? <section className="image-grid">
          {this.props.items.map((item, index) => {
            return (
              
                <article className={`image__cell ${this.props.flag && (this.props.imageId == index) ? "is-expanded" : "is-collapsed"}`}>
                  <div className="image--basic" onClick={() => this.handleBasicClick(index)}>
                    <a href={`#expand-jump-${index}`}>
                        <img id={`expand-jump-${index}`} style={{width: item.image.thumbnailWidth, height: item.image.thumbnailHeight}} className="basic__img" src={item.image.thumbnailLink} alt="Fashion" /> 
                    </a>
                    <div className="arrow--up"></div>
                  </div>
                  <div className="image--expand"> 
                    <a href={`#close-jump-${index}`} className="expand__close" onClick={this.props.collapseInfo}></a>
                      <img className="image--large" src={item.link} style={{width: item.image.width, height: item.image.height}} /> 
                  </div>
                </article>
            )
          })
          }
          </section>          
          :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loader: state.searchImages.loader,
    items: state.searchImages.items,
    searchTerm: state.searchImages.searchTerm,
    flag: state.searchImages.flag,
    imageId: state.searchImages.imageId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSearching : (searchTerm) => {
      dispatch(searchImages(searchTerm));
    },
    changeImageId: (index) => {
      dispatch(newImageId(index));
    },
    collapseInfo: () => {
      dispatch(collapseModal());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoogleImageSearchApp);