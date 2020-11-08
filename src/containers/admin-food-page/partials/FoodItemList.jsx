import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createPropsSelector } from "reselect-immutable-helpers";
import { getProducts } from "../../../shared/store/selectors/productsSelector";
import { getAllFoodAPI } from "../../action";
import * as types from "../../../shared/store/actions/types";

import { fetchAPIAddFood } from "../../action";

class FoodItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      searchvalue: null,
    };

    this.deleteContact = this.deleteContact.bind(this);
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
    this.search = this.search.bind(this);
  }
  componentWillMount() {
    this.props.getAllFoodAPI().then(() => {
      this.setState({ meals: this.props.products });
    });
  }

  deleteContact() {
    this.props.deleteContact(this.props.products.id);
  }

  sortByPriceAsc() {
    this.setState({
      meals: this.state.meals.sort((a, b) => a.price - b.price),
    });
  }

  sortByPriceDesc() {
    this.setState({
      meals: this.state.meals.sort((a, b) => b.price - a.price),
    });
  }

  search() {
    if (this.state.searchvalue === "") {
      this.setState({ meals: this.props.products });
    } else {
      this.setState({
        meals: this.props.products.filter((data) =>
          data.name.match(this.state.searchvalue)
        ),
      });
    }
    return this.state.meals;
  }
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ searchvalue: keyword });
  };
  render() {
    const { products } = this.props;

    return (
      <div id="all">
        <input
          onChange={(e) => this.searchSpace(e)}
          id="search"
          placeholder="search about food name"
          type="text"
        />
        <button id="filter" onClick={this.search}>
          search
        </button>
        <br />
        <br />
        <br />

        <div class="dropdown">
          <button class="dropbtn">Order By</button>
          <div class="dropdown-content">
            <button onClick={this.sortByPriceAsc}> price Low to High</button>
            <button onClick={this.sortByPriceDesc}> price High to Low</button>
          </div>
        </div>
        <br />
        <br />

        <div class="grid-container">
          {this.state.meals &&
            this.state.meals.length > 0 &&
            this.state.meals.map((foodItem) => (
              <div id="tr" key={foodItem.id}>
                <img id="imgfood" src={foodItem.imageUrl} />
                <table id="info">
                  <tr>
                    <td>{foodItem.subType}</td>
                    <td>{foodItem.price}$</td>
                  </tr>
                  <tr>
                    <td>{foodItem.name}</td>
                    <td>{foodItem.type}</td>
                  </tr>

                  <tr>{foodItem.desc}</tr>
                </table>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createPropsSelector({
  products: getProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getAllFoodAPI: () => dispatch(getAllFoodAPI()),
  deleteContact: () => dispatch(types.deleteContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItemList);
