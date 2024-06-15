# Book CRUD App

A simple CRUD (Create, Read, Update, Delete) application for managing books. Built using Next.js, TailwindCSS, Material Tailwind, Node.js, SQLite, and Prisma.

## Features

- **Create**: Add new books to the database.
- **Read**: View a list of all books.
- **Update**: Edit details of existing books.
- **Delete**: Remove books from the database.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Material Tailwind**: Material Design components for TailwindCSS.
- **Node.js**: JavaScript runtime for the backend.
- **SQLite**: Lightweight relational database.
- **Prisma**: ORM (Object-Relational Mapping) for database management.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Khizer30/CRUD.git
    cd book-crud-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Database Setup

1. Push the Prisma schema to your SQLite database:
    ```bash
    npx prisma db push
    ```

### Building the Application

1. Build the application:
    ```bash
    npm run build
    ```

### Running the Application

1. Start the application:
    ```bash
    npm start
    ```

2. Open your browser and visit:
    ```
    http://localhost:3000
    ```

## Notes

- This application is not optimized for mobile devices.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

---

Happy coding! 😊

If you encounter any issues or have questions, please open an issue on GitHub.