import React from "react";


function AddProduct () {


    return (
        <div className="form-group userlist-container">
            <form>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text"  name="ProductName" className="form-control" placeholder="ProductName"/>
                 </div>
                 <div className="form-group">
                    <label>Product Discription</label>
                    <input type="text"  name="ProductDiscription" className="form-control" placeholder="Product Discription"/>
                 </div>
                 <div className="form-group">
                    <label>Price</label>
                    <input type="text"  name="Price" className="form-control" placeholder="Price"/>
                 </div>
                 <div className="form-group">
                     <button className="btn btn-primary" type="submit" > Add Product</button>
                 </div>
            </form>
          
        </div>
    )
}
export default  AddProduct