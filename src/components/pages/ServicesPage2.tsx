import React from "react";
import axios from "axios";
// import { useQuery } from "react-query";
import { graphql } from "graphql";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
// import { gql } from '@apollo/client';

import {  useQuery } from 'react-query';

// const queryClient = new QueryClient();
// const fetchAuthors = async () => {
//     const result = await fetch('https://localhost:4000/graphql')
//     return result.json()
// }

const endpoint = "https://localhost:4000/graphql";
const GET_SERVICE = `
query GetServices {
  authors {
    id
    name
    books {
      id
      title
      pages
    }
  }
}
`;

interface Book {
  id: number; // Assuming 'id' is a number
  title: string;
  pages: number;
}

interface Author {
  id: number; // Assuming 'id' is a number
  name: string;
  books: Book[];
}

interface QueryData {
  authors: Author[];
}


const ServicesPage2 = () => {
  const { data, isLoading, error } = useQuery<QueryData>("authors", () => {
    return axios({
      url: "http://localhost:4000/graphql",
      method: "POST",
      data: {
        query: GET_SERVICE
      },
      timeout: 10000 // Increase the timeout value (in milliseconds) if needed
    }).then(response => {
      console.log("DATA: " + response.data); // Log the response data
      return response.data.data;
    });
  });

  if (isLoading) return "Loading...";
  if (error) {
    // Log the error object for debugging purposes
    console.error("Error fetching data:", error);
  
    // You can also render the error message if available
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <h2 className="mt-8 mb-4">Authors and Books</h2>
      <table className="w-full mt-8">
        <thead>
          <tr>
            <th className="w-1/3 text-left">Author</th>
            <th className="w-2/5 text-left">Book Title</th>
            <th className="w-1/3 text-left">Pages</th>
          </tr>
        </thead>
        <tbody>
          {data?.authors.map((author: Author) =>
            author.books?.map((book: Book) => (
              <tr key={book.id}>
                <td>{author.name}</td>
                <td>{book.title}</td>
                <td>{book.pages}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

}; //end ServicesPage2




  export default ServicesPage2;
