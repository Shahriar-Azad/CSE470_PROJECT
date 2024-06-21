import { useState } from "react"
import { useProductsContext } from "../hooks/useProductsContext"

const ProductForm = () => {
  const { dispatch } = useProductsContext()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !description || !price || !quantity || !category) {
      setError("All fields are required")
      return
    }


    const product = {name,description,price,quantity,image,category}

    const response = await fetch ('/api/products', {
      method: 'post',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    
    if (response.ok){
      setName('')
      setDescription('')
      setPrice('')
      setQuantity('')
      setImage('')
      setCategory('')
      setError(null)
      console.log('New product added',json)
      dispatch({type: 'CREATE_PRODUCT', payload: json})
    }
  }
  return(
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Product</h3>

      <label>Product Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <label>Product Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label>Price:</label>
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />

      <label>Quantity (in kg):</label>
      <input
        type="number"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
      />

      <label>Product Image:</label>
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <label>Product Category:</label>
      <input
        type="text"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />

      <button>Add product</button>
      {error && <div className="error">{error}</div>}
    </form>

  )
}

export default ProductForm