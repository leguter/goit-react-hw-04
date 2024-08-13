import { Formik, Form,Field } from "formik"
const SearchBar = ({
  sendQuery,
}
) => {
  const INITIAL_VALUES = {
    search: '',
  }
  const handleSubmit = (values, actions) => {
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
