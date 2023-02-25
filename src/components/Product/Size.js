import styles from "styles/Product/Components/size.module.css";
import { Component } from 'react';
import { getSizes as getSizesApi } from "services/api";
export default class Size extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: {},
      sizes: [],
    };
  }
  componentDidMount() {
    this.getSizes()
  }
  selectSize(size){
    this.setState({
      size: size
    })
    this.props.onChangeSize(size);            
  }
  async getSizes() {
    getSizesApi().then(val => {
      this.setState({
        sizes: val
      })
    })
  }
  render() {
    return (
      <div className={`${styles.container}`}>
        <div className="fw-light text-muted mb-2">Size</div>
        <div className={`${styles.colors}`}>
          {this.state.sizes && this.state.sizes.map((size) => {
            return (
              <span 
                onClick={e => this.selectSize(size)}
                key={size.id} 
                className={`
                  ${
                    size === this.state.size ? styles.active : ''
                  } 
                  ${this.props.colorSizes && !this.props.colorSizes.includes(size.id) ? styles.disabled : ''}
                  ${styles.size}`
                }
              >
                {size.label}
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}
