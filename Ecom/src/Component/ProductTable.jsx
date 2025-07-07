function ProductTable(props){
    return(
        <>
        
        <h1>Product list</h1>
        <table className=' table table-striped w-100' >
          <thead>
            <tr >
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              props.products.map((item) => (
                <tr key={item.id } className="w-100 h-100">
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td className="overflow-hidden h-25">{item.description}</td>
                  <td>{item.price}</td>
                  <td className="d-flex gap-2 ">
                    <button className="btn btn-warning" onClick={() => props.selectProduct(item)}>Update</button>
                    <button className="btn btn-danger" onClick={() => props.deleteProduct(item.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </>
    )
}

export default ProductTable;