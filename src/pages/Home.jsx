import Card from "components/Products/Card";
import React, {useEffect, useState} from "react"
import { getProducts } from "services/api";
import styles from "styles/Products/products.module.css"

export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      // declare the data fetching function
      const fetchData = async () => {
        setProducts(await getProducts())
      }
    
      fetchData().catch(console.error);
    }, [])
    return (
      <div className="w-100 d-flex flex-column">
        <div className="bg-danger w-100 p-5 d-flex justify-content-center text-white fs-1 fw-bold">Список товаров</div>
        <div className="bg-white w-100 p-5 d-flex flex-column justify-content-start text-dark">
          <div className="fs-3 fw-bold">Список товаров</div>
          <div className="fs-5 mt-4">На странице со списком должны быть товары с картинками. по клику переход на карточку товара.</div>
        </div>
        <div className="bg-danger w-100">
          <div className="container">
            <div className={`${styles.products} row`}>
              {products.map(val => {
                console.log(val)
                return (
                  <Card key={val.id} product={val} image={val.colors[0].images[0]}/>
                )
              })}
            </div>
          </div>
        </div>

      </div>

    )
}
  