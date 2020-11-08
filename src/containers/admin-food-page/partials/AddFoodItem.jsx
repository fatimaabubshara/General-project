/* eslint-disable array-callback-return */
import React from "react";
import { Field, reduxForm } from "redux-form";
import { fetchAPIAddFood } from "../../action";
class AddFoodItem extends React.Component {
  constructor() {
    super();
    this.state = {
      foodSubType: [],
    };
    this.handleSelectTypeChange = this.handleSelectTypeChange.bind(this);
    this.submitAddForm = this.submitAddForm.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    if (data && data.length) {
      this.handleSelectTypeChange(data[0].categoryType);
    }
  }

  handleSelectTypeChange(value) {
    const { data } = this.props;
    const subType = data.find((item) => item.categoryType === value);
    if (subType) {
      this.setState({
        foodSubType: subType.categorySubType,
      });
    }
  }

  submitAddForm(values) {
    debugger;
    fetchAPIAddFood({
      imageUrl: values.url,
      desc: values.description,
      name: values.food,
      price: values.cost,
      type: values.foodType,
      subType: values.foodSubType,
    }).then(() => {
      alert("The menu Food is Added to DataBase ");
    });
  }

  render() {
    const { data, handleSubmit } = this.props;

    return (
      <div>
        <form className="container" onSubmit={handleSubmit(this.submitAddForm)}>
          <div className="form-group">
            <Field
              id="foodType"
              className="form-control"
              name="foodType"
              component="select"
              onChange={(e) => this.handleSelectTypeChange(e.target.value)}
              required
            >
              {data &&
                data.map((type) => {
                  return (
                    <option key={type.categoryType} value={type.categoryType}>
                      {type.categoryType}
                    </option>
                  );
                })}
            </Field>
          </div>

          <div className="form-group">
            <Field
              id="food"
              placeholder="Enter Food Name"
              type="text"
              component="input"
              className="form-control"
              name="food"
              required
            />
          </div>
          <div className="form-group">
            <Field
              min="1"
              placeholder="Enter Food price"
              type="number"
              component="input"
              className="form-control"
              name="cost"
              required
            />
          </div>

          <div className="form-group">
            <Field
              id="description"
              placeholder="Enter Food Description"
              type="text"
              component="input"
              className="form-control"
              name="description"
              required
            />
          </div>

          <div className="form-group">
            <Field
              placeholder="Enter Food URL"
              type="text"
              component="input"
              className="form-control"
              name="url"
              required
            />
          </div>
          <div className="form-group">
            <Field
              id="foodSubType"
              className="form-control"
              name="foodSubType"
              component="select"
              required
            >
              {this.state &&
                this.state.foodSubType &&
                this.state.foodSubType.map((subType) => {
                  return (
                    <option key={subType} value={subType}>
                      {subType}
                    </option>
                  );
                })}
            </Field>
          </div>

          <button id="add" type="submit" className="btn btn-success mt-2">
            Add To Menu
          </button>
        </form>
      </div>
    );
  }
}

const AddFoodItemForm = reduxForm({
  form: "add-food",
})(AddFoodItem);

export default AddFoodItemForm;
