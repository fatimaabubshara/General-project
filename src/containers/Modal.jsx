import React from "react";
import ReactDOM from "react-dom";
import { Field, FieldArray, className, reduxForm } from "redux-form";
import { fetchAPIAddnewFood } from "./action";
const renderField = ({
  input,
  label,
  id,
  className,
  type,
  meta: { touched, error },
}) => (
  <React.Fragment>
    <input {...input} type={type} placeholder={label} className={className} />
    {touched && error && <span>{error}</span>}
  </React.Fragment>
);
const renderSubTypes = ({ fields, meta: { error } }) => (
  <React.Fragment>
    <button id="addSub" type="button" onClick={() => fields.push()}>
      Add New Sub Type
    </button>
    <ul className="sub-type-list">
      {fields.map((hobby, index) => (
        <li className="sub-type" key={index}>
          <Field
            name={hobby}
            type="text"
            className="subinputModal"
            component={renderField}
            label={`Sub Type #${index + 1}`}
          />
          <button
            type="button"
            id="remove"
            title="Remove Sub Type"
            onClick={() => fields.remove(index)}
          >
            X
          </button>
        </li>
      ))}
      {error && <li className="error">{error}</li>}
    </ul>
  </React.Fragment>
);
class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      newSub: [],
    };
    this.submitAddNew = this.submitAddNew.bind(this);
  }
  submitAddNew(values) {
    var item = values.subTypes;
    //if (values.newTypeFood === 'food') {
      //alert(values.newTypeFood);
    //} else {
      fetchAPIAddnewFood({
        categoryType: values.newTypeFood,
        categorySubType: item,
      }).then(() => {
        alert("The new type Food is Added to DataBase ");
      });
    //}
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="Modal1">
        <form onSubmit={handleSubmit(this.submitAddNew)}>
          <div>
            <Field
              className="inputModal"
              required
              placeholder="New Type Food"
              type="text"
              name="newTypeFood"
              component="input"
              id="newTypeFood"
            />
            <br />
            <FieldArray
              className="inputModal"
              name="subTypes"
              component={renderSubTypes}
            />
          </div>
          <div>
            <button type="submit">ADD Food Type</button>
          </div>
        </form>
      </div>
    );
  }
}
const AddNEWFoodItemForm = reduxForm({
  form: "add-food",
})(Modal);
export default AddNEWFoodItemForm;
