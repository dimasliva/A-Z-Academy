import styles from "styles/Product/Components/colors.module.css";
import { Component } from 'react';
export default class Colors extends Component {
  constructor(props) {
    super(props);
  }
  selectColor(color) {
    this.props.onChangeColor(color);            
    this.props.onChangeImage(color.images[0]);            
    this.props.onChangeSize(null, color);            
    console.log(color)
  }
  render() {
    return (
      <div className={`${styles.container}`}>
      <div className="fw-light text-muted mb-2">Colors</div>
      <div className={`${styles.colors}`}>
        {this.props.colors && this.props.colors.map(color => {
          return (
            <span 
              onClick={() => this.selectColor(color)}
              key={color.name} 
              className={`
              ${
                color.name === 'черный'
                ? styles.black
                : color.name === 'белый'
                ? styles.white
                : color.name === 'желтый'
                ? styles.yellow
                : styles.gray
              } 
              ${this.props.color === color ? styles.active : ''}
              color ${styles.color}`}
            />
          )
        })}
      </div>
    </div>
    )
  }
}
