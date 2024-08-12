import { Formik, Form,Field } from "formik"
const SearchBar = ({
  sendQuery,
}
) => {
  const INITIAL_VALUES = {
    search: '',
  }
  const handleSubmit = (values) => {
    sendQuery(values.search)
 }
  return (
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
  );
}
   

export default SearchBar;
