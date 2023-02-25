import styles from "styles/Product/Components/slider.module.css";
import { Component } from 'react';
export default class Slider extends Component {
  constructor(props) {
    super(props);
  }
  selectImage(image, to) {
    if(image !== null) {
      this.props.onChangeImage(image)
      return
    }
    let i = this.props.images.indexOf(this.props.image)
    let count = this.props.images.length - 1
    if(to === 'next') {
      if(i < count) {
        this.props.onChangeImage(this.props.images[i+1]);            
      } else if (i >= count) {
        this.props.onChangeImage(this.props.images[0])
      }
    } else {
      if(i >= count) {
        this.props.onChangeImage(this.props.images[i - 1])
      } else if (i === 0) {
        this.props.onChangeImage(this.props.images[count])
      }
    }           
  }

  render() {
    return (
      <div className={`${styles.slider}`}>
        <span 
          onClick={() => this.selectImage(null, 'last')}
          className={styles.arrow}
        >
          {'<'}
        </span>
        <div className={styles.slides}>
          {this.props.images && this.props.images.map((img, i) => {
            return (
              <span
                onClick={() => this.selectImage(img)}
                key={i} 
                className={`${styles.slide_img} img ${this.props.image === img ? styles.active : ''}`}
                style={{'backgroundImage': `url(${img})`}} 
              />
            )
          })}
        </div>
        <span 
          className={styles.arrow}
          onClick={() => this.selectImage(null, 'next')}
        >
          {'>'}
        </span>
      </div>
    )
  }
}
