import styles from "styles/Product/Components/description.module.css";
import { Component } from 'react';
export default class Description extends Component {
  constructor() {
    super();
    this.state = {
      isDescription: false
    };
  }

  openDescription = () => {
    this.setState({
      isDescription: !this.state.isDescription 
    })
  }
  render() {
    return (
      <div 
        className={`fs-5 fw-light ${styles.description} ${this.state.isDescription ? styles.active : ''}`}
      >
        <div className={styles.title}
        onClick={this.openDescription}
        >
          <span>Description</span>
          <span className={styles.arrow}>{'>'}</span>
        </div>
        <div className={`fw-light text-muted ${styles.desc}`}>
          {this.state.isDescription ? this.props.description : ''}
        </div>
      </div>
    )
  }
}
