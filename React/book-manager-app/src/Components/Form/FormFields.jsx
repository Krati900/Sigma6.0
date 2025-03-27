export const formFields = [
  {
    name: "signInSignUp",
    data: [
      {
        type: "input",
        label: "Username",
        name: "username",
        placeholder: "Enter your username",
      },
      {
        type: "password",
        label: "Password",
        name: "password",
        placeholder: "Enter your password",
      },
      {
        type: "input",
        label: "Email",
        name: "email",
        placeholder: "Enter your email",
      },
    ],
  },
  {
    name: "addBook",
    data: [
      {
        type: "input",
        // label: "Book Name",
        name: "bookName",
        placeholder: "Enter book name",
      },
      {
        type: "input",
        // label: "Author",
        name: "author",
        placeholder: "Enter author name",
      },
      {
        type: "select",
        // label: "Genre",
        name: "genre",
        options: ["Select Genre", "Fiction", "Mystery", "Scientific", "Fantasy", "Romance", "Adventure", "Biography", "Horror", "Thriller", "Young Adult", "History", "Self Help", "Science Fiction", "Historical Fiction"],
        defaultValue: "Select Genre"
      },
      {
        type: "select",
        // label: "Category",
        name: "category",
        options: ["Select Category", "Premium", "Free"],
        defaultValue: "Select Category"
      },
    ],
  },
  {
    name: "filterFields",
    data: [
      {
        type: "input",
        // label: "Search",
        name: "search",
        placeholder: "Search books ..............",
      },
      {
        type: "select",
        // label: "Genre",
        name: "genre",
        options: ["Select Genre", "Fiction", "Mystery", "Scientific", "Fantasy", "Romance", "Adventure", "Biography", "Horror", "Thriller", "Young Adult", "History", "Self Help", "Science Fiction", "Historical Fiction"],
        defaultValue: "Select Genre"
      },
      {
        type: "select",
        // label: "Category",
        name: "category",
        options: ["Select Category", "Premium", "Free"],
        defaultValue: "Select Category"
      },
    ],
  },
];
