import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import firebase from '../Firebase';

class Products extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('products');
    this.unsubscribe = null;
    this.state = {
      products: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      const { image, name, price, project } = doc.data();
      products.push({
        key: doc.id,
        doc, // DocumentSnapshot
        image,
        name,
        price,
        project,
      });
    });
    this.setState({
      products
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="productcontent">
        <div class="inclusiontext"><h2>Tiptoe& Store</h2></div>

        <div class="products">
          <div class="productsection"><h2>PROJECT_02</h2></div>
          {this.state.products.map(product =>
            <div class="gallery">
              <img src={product.image} alt="tiptoe& white cap" />
              <div class="desc1">{product.name}<br />${product.price}</div>
            </div>
          )}
        </div>



        {/*<div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Products
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/showtransactions">Show Transactions</Link></h4>
            <h4><Link to="/create">Add Product</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Project</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map(product =>
                  <tr>
                    <td><img src={product.image} alt="Tiptoe& white cap" /></td>
                    <td>{product.name}</td>
                    <td><Link to={`/show/${product.key}`}>{product.name}</Link></td>
                    <td>{product.price}</td>
                    <td>{product.project}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
                </div>*/}
      </div>
    );
  }

}
export default Products;