import React from 'react'

function Form() {
  return (
    <div>
      <div className="signIn-signUp">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name='name'/>

          <label htmlFor="email">Email</label>
          <input type="email" name='password'/>

          <label htmlFor="password">Password</label>
          <input type="password" name='password'/>

          <button className='btn'>Button</button>
        </form>
      </div>

      <div className="add-book">
        <form>
          <label htmlFor="name">Book Name</label>
          <input type="text" name='name'/>

          <label htmlFor="author">Book Author</label>
          <input type="text" name='author'/>

          <label htmlFor="genre">Book Genre</label>
          <select name="genre" id="genre">
            <option value="fiction">Fiction</option>
            <option value="nonfiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="fantasy">Fantasy</option>
            <option value="scientific">Science Fiction</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="horror">Horror</option>
            <option value="poetry">Poetry</option>
            <option value="selfhelp">Self Help</option>
            <option value="adventure">Adventure</option>
            <option value="youngadult">Young Adult</option>
          </select>

          <label htmlFor="category">Book Category</label>
          <select name="category" id="category">
            <option value="premium">Premium</option>
            <option value="Free">Free</option>
          </select>

          <label htmlFor="publication_year">Publication Year</label>
          <input type="text" name='publication_year'/>

          <label htmlFor="publisher">Publisher</label>
          <input type="text" name='publisher'/>

          <label htmlFor="rating">Rating</label>
          <input type="text" name='rating'/>

          <button className='btn'>Button</button>
        </form>
      </div>
      
      <div className="book-list-filter-form">
        <form>
          <input type="text" placeholder='Search'/>
          <br />
          <select name="genre" id="genre">
            <option value="fiction">Fiction</option>
            <option value="nonfiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="fantasy">Fantasy</option>
            <option value="scientific">Science Fiction</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="horror">Horror</option>
            <option value="poetry">Poetry</option>
            <option value="selfhelp">Self Help</option>
            <option value="adventure">Adventure</option>
            <option value="youngadult">Young Adult</option>
          </select>
          <br />
          <select name="category" id="category">
            <option value="premium">Premium</option>
            <option value="Free">Free</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Form;
