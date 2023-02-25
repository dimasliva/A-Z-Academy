import Colors from "components/Product/Colors";
import Description from "components/Product/Description";
import Size from "components/Product/Size";
import Slider from "components/Product/Slider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getSizes } from "services/api";
import styles from "styles/Product/product.module.css"

export default function Product() {
  const [currentProduct, setCurrentProduct] = useState({})
  const [currentColor, setCurrentColor] = useState({})
  const [currentImage, setCurrentImage] = useState("")
  const [currentSize, setCurrentSize] = useState([])

  const [sizes, setSizes] = useState([])

  const {id} = useParams()

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      getProduct(id).then(async (val) => {
        const colors = val.colors
        const color = colors[0]
        const allSizes = await getSizes()
        setCurrentProduct(val)
        setCurrentColor(color)
        setCurrentImage(color.images[0])
        setSizes(allSizes)
        setCurrentSize(color.sizes[0])
        console.log('color', color)
        defineSize(allSizes, color)
      })
    }
  
    fetchData().catch(console.error);
  }, [])


  function defineSize(allSizes, color) {
    let i = allSizes.findIndex(x => x.id === color.sizes[0])
    if(i !== -1) {
      setCurrentSize(allSizes.find(x => x.id === color.sizes[0]))
      return
    }
    setCurrentSize({id: -1, number: 0, label: ""})
  }
  function changeSize(size, color) {
    if(!size) {
      defineSize(sizes, color)
      return
    }
    setCurrentSize(size)
  }
  function changeColor(color) {
    setCurrentColor(color)
  }
  function changeImage(image) {
    setCurrentImage(image)
  }
  return (
    <div className="bg-white d-flex justify-content-center m-5">
      <div className={`${styles.left}`}>
        <div 
          className={`img ${styles.photo}`}
          style={{'backgroundImage': `url(${currentImage})`}}
        />
        <Slider 
          images={currentColor.images} 
          image={currentImage}
          onChangeImage={changeImage}
        />
      </div>

      <div className={`${styles.right}`}>
        <div className="fs-4 fw-normal d-flex align-items-center">
          {currentProduct.name} 
          <span className="fs-5 fw-light ms-2"> ({currentColor.name})</span>
        </div>
        <div className="fs-3 my-3">${currentColor.price}</div>
        
        <Colors 
          color={currentColor} 
          colors={currentProduct.colors}
          onChangeColor={changeColor}
          onChangeImage={changeImage}
          onChangeSize={changeSize}
        />

        <Size colorSizes={currentColor.sizes} onChangeSize={changeSize}/>

        <div className="text-muted">
          On Sale: {currentSize.number && currentSize.number} 
        </div>
        <Description description={currentColor.description}/>
      </div>
    </div>
  )
}
