import { useProductsContext } from "../hooks/useProductsContext"


const ProductDetails =({product}) => {
  const {dispatch} = useProductsContext()

  const handleClick = async () => {
    const response = await fetch('/api/products/' +product._id,{
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_PRODUCT', payload: json})
    }

  }

  
  return (
    <div className = "product-details">
      <h1>{product.name}</h1>
      <p><strong>Category: </strong>{product.category}</p>
      <img src= {product.image} alt={product.name}
      style={{width: '100px', height:'200px'}}/>
      <h4>{product.description}</h4>
      <p><strong>Price: </strong>{product.price}</p>
      <p><strong>Quantity(kg): </strong>{product.quantity}</p>
      <span className= "material-symbols-outlined" onClick={handleClick}>Delete</span>
    </div>
  )
}

export default ProductDetails