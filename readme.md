# Project Name

BookShelf - Where Words Come to Life

## Project Description

The project is an online book archive system built using React and Redux, providing a user-friendly interface for managing books. Users can sign up, log in, and view a list of books, including the top 10 recently added ones on the homepage. The system allows users to search and filter books based on criteria such as title, author, and genre. Authenticated users can add new books and leave reviews. Detailed book information, including title, author, genre, publication date, and reviews, is displayed on the book details page. Users can also edit and delete books, with appropriate notifications for success or failure. The project incorporates various technologies to ensure efficient and accurate search, filtering, and data manipulation functionalities.

## Key Features

-   User Authentication
-   Book Listing
-   CRUS Operation on Book
-   Search and Filtering
-   Reviews and Ratings

## Installation

This project is dependent on/interconnected with another backend project. Backend project and documentation link is [here](https://github.com/zhSHUVO/bookshelf-server).

1. Clone the repository:
    ```shell
    git clone https://github.com/zhSHUVO/bookshelf.git
    ```
2. Navigate to the project directory:
    ```shell
    cd bookshelf
    ```
3. Install dependencies:
    ```shell
    npm install
    ```
4. Setup environment variable:

    ```shell
    VITE_apiKey="---------"
    VITE_authDomain="---------"
    VITE_projectId="---------"
    VITE_storageBucket="---------"
    VITE_messagingSenderId="---------"
    VITE_appId="---------"
    ```

5. Start the development server:
    ```shell
    npm run dev
    ```
6. Open web browser and visit `http://localhost:3000` to access the application.

## Application Routes

Explain the different routes available in your application and what they are used for. You can provide a brief description of each route and mention any authentication requirements if applicable.

| Route          | Description                                      |
| -------------- | ------------------------------------------------ |
| `/`            | Home page                                        |
| `/all`         | View all books                                   |
| `/add`         | Add a new book (requires authentication)         |
| `/update/:id`  | Update a book (requires authentication)          |
| `/details/:id` | View details of a book (requires authentication) |
| `/login`       | User login page                                  |
| `/signup`      | User signup page                                 |
| `*`            | Not found page                                   |

## Technologies Used

List of technologies that are used in this project.

-   Frontend : React, React Router Dom, Redux Toolkit, Firebase, React Hook Form, React Hot Toast.
-   Development Tools : Typescript, Vite, ESLint, Prettier, Git, VSCode, Postman.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## Support

If you encounter any issues or have questions or suggestions, please [open an issue](https://github.com/your-username/your-project/issues).

## Acknowledgments

If there are any individuals, libraries, or resources you would like to acknowledge, you can include them in this section.

-   Inspiration from XYZ project (link to the project or author's GitHub profile)
-   Thanks to ABC library for providing XYZ functionality
