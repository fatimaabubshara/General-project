import React, { Component } from "react";
import { getAllFoodAPI, fetchorder } from "../action";
import { connect } from "react-redux";
import { createPropsSelector } from "reselect-immutable-helpers";
import { getProducts } from "../../shared/store/selectors/productsSelector";
import food from "../../assets/food.png";

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
  }

  componentWillMount() {
    this.props.getAllFoodAPI();
  }

  render() {
    const { products } = this.props;
    let array = [];
    {
      products.map((item) => array.push(item.type));
    }

    return (
      <div id="div">
        <p>order page</p>
      </div>
    );
  }
}
const mapStateToProps = createPropsSelector({
  products: getProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getAllFoodAPI: () => dispatch(getAllFoodAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
