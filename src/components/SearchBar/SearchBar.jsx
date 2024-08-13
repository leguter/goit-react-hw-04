import { Formik, Form, Field } from "formik"
import iziToast from "izitoast";
const SearchBar = ({
  sendQuery,
}
) => {
  const INITIAL_VALUES = {
    search: '',
  }
  const handleSubmit = (values, actions) => {
    if (values.search.trim() === "") {
      iziToast.error("You need enter text for searching images");
      return
    } 
      sendQuery(values.search);
      actions.resetForm();
    
    
  };
  return (
    <header>
      <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
        <Form>
          <Field
            type="text"
            placeholder="Search images and photos"
            name="search"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
   

export default SearchBar;
