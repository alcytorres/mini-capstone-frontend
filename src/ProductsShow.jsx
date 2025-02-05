export function ProductsShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
      props.onDestroyProduct(props.product.id);
    };

  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <img src={props.product.images[0] ? props.product.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" />
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <form onSubmit={handleSubmit}>
         <div>
           Name: <input defaultValue={props.product.name} name="name" type="text" />
         </div>
         <div>
           Images: <input defaultValue={props.product.images} name="images" type="text" />
         </div>
         <div>
           Description: <input defaultValue={props.product.description} name="description" type="text" />
         </div>
         <div>
           Price: <input defaultValue={props.product.price} name="price" type="text" />
         </div>
         <button type="submit">Update product</button>
       </form>
    </div>
  );
}


