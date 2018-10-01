import React from 'react'

const styles = {
  padding: '5px',
  fontSize: '18px',
  width: '90%',
  border: '#f4f4f4 3px solid'
}

const Search = () => {
  return (
    <section
      id="search"
      className="section section-search blue darken-1 white-text center scrollspy"
    >
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3>Search Destinations</h3>
            <div className="input-field">
              <input
                type="text"
                className="white grey-text autocomplete"
                id="autocomplete-input"
                placeholder="Aruba, Cancun, etc..."
                style={styles}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search
