import React, {PropTypes} from 'react'
import Spinner from 'react-spinkit'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import * as actions from '../redux/mainPageActions';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const MainPage = (
  {
    actions: {
      mainPageInitializePage
    },
    mainPageReducer
  }
) => {
  if (mainPageReducer.get("loaded") == false) {
    mainPageInitializePage()
  }

  const handleImageLoad = (event) => {
    console.log('Image loaded ', event.target)
  }

  const getImages = () => {
    return mainPageReducer.get('photos').map((photo) => {
      return { original: photo }
    })
  }


  return (
    <div className="u-background">
     <h1>hello superhuman</h1>
     <div>
      { mainPageReducer.get('photos') ?
        <ImageGallery
          items={getImages()}
          slideInterval={2000}
          autoPlay={true}
          showThumbnails={false}
          onImageLoad={handleImageLoad}/>
        :
        <Spinner spinnerName="wandering-cubes" style={{marginRight: '40px'}}/>
      }
     </div>
    </div>
  )
}

MainPage.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    mainPageReducer: state.mainPageReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
