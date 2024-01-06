# Full Stack Todo App

This is a Full Stack Todo App project with a backend built using Express and MongoDB and a frontend built with React.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

#### Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection URI:

    ```env
    MONGO_URI=your_mongodb_connection_uri
    ```

4. Run the backend server:

    ```bash
    npm run-scripts run
    ```

   The server will run on `http://localhost:4001`.

#### Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the frontend development server:

    ```bash
    npm start
    ```

   The frontend will be available at `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. You will see the Todo App UI with a header, input section, and a list of tasks.
3. Add new tasks using the input field and "ADD" button.
4. Manage tasks by marking them as completed with the checkmark icon or deleting them with the trash icon.

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests.

## License

This project is licensed under the MIT License.
