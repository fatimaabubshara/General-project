import { REMOVE_CONTACT } from "./productsAction";

export const deleteContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    id: id,
  };
};
