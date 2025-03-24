// Instead of this use .reduce method

// export const BookDashboardData = [
//   {
//     category_counts: [
//       { categoryName: "Total Books", total_count: 35 },
//       { categoryName: "Premium Books", total_count: 20 },
//       { categoryName: "Free Books", total_count: 20 },
//     ],
//     genre_counts: [
//       { genre: "Fiction", total_count: 5 },
//       { genre: "Mystery", total_count: 3 },
//       { genre: "Scientific", total_count: 3 },
//       { genre: "Romance", total_count: 3 },
//       { genre: "Adventure", total_count: 5 },
//       { genre: "Biography", total_count: 1 },
//       { genre: "Horror", total_count: 2 },
//       { genre: "Thriller", total_count: 3 },
//       { genre: "Young Adult", total_count: 1 },
//       { genre: "Fantasy", total_count: 5 },
//       { genre: "History", total_count: 2 },
//       { genre: "Self Help", total_count: 2 },
//       { genre: "Science Fiction", total_count: 1 },
//       { genre: "Historical Fiction", total_count: 1 },
//     ],
//   },
// ];

import { BookData } from "../BookList/BookData";

export const BookDashboardData = [
  {
    category_counts: [
      { 
        categoryName: "Total Books", 
        total_count: BookData.data.length },
      {
        categoryName: "Premium Books",
        total_count: BookData.data.filter((book) => book.category === "Premium").length,
      },
      {
        categoryName: "Free Books",
        total_count: BookData.data.filter((book) => book.category === "Free").length,
      },
    ],
    genre_counts: Object.values(
      BookData.data.reduce((acc, book) => {
        const { genre, img } = book;
        if (!acc[genre]) {
          acc[genre] = {
            genre,
            total_count: 0,
            images: [],
          };
        }
        acc[genre].total_count += 1;
        acc[genre].images.push(img); 
        return acc;
      }, {})
    ).map((genreData) => ({
      genre: genreData.genre,
      total_count: genreData.total_count,
      images: genreData.images,
    })),
  },  
];

console.log("Genre Counts: ", BookDashboardData[0].genre_counts);

