const SearchBar = ({
  sendQuery,
}
) => {
  let form = document.form;
  console.log(form.elements.search);
    return (
      <header>
        <form name='searchImgs'onSubmit={() => sendQuery(form.elements.search.value) }>
          <input
            type="text"
            placeholder="Search images and photos"
            name="search"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
}
   

export default SearchBar;
