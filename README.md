# Project Overview

This project is a React application that utilizes various libraries and tools to create a dynamic user interface. The application focuses on providing a rich user experience with features such as AI-generated image creation, window management, and context menus, dropdowns, and modals.

## Core Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Zustand**: A small and fast state management solution for React.
- **Framer Motion**: A library for animations in React applications.
- **Floating UI**: A library for positioning elements responsively.
- **React Query**: A library for data fetching, caching, and updating in React applications.
- **SCSS**: A CSS preprocessor that offers features like nested rules and variables.

## Project Structure

The project is divided into several directories, each serving a specific purpose:

- **src/app**: The main application layout and entry point.
- **src/components**: Reusable components such as dropdowns, modals, and UI elements.
- **src/state**: Zustand stores for managing application state.
- **src/ui**: UI components like toasts and dropdowns.
- **src/scripts**: Scripts for creating stores and other utilities.

## Main Components

### 1. Home Component

The `Home` component serves as the main entry point of the application. It sets up the context for the application, including state management and initial scene settings.

### 2. Dropdown Menu

The dropdown menu is a key UI element that provides access to various functionalities, including file operations, help options, and AI settings.

### 3. Modals

The application features several modals, including:

- **Tutorial Modal**: Provides users with guidance on how to use the application.
- **About Modal**: Displays information about the application and its creator.
- **Fal Settings Modal**: Allows users to adjust global AI settings.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone [<repository-url>](https://github.com/oguzhan18/visionpallet)
   ```

2. Navigate to the project directory:
   ```bash
   cd visionpallet
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Thanks to the creators of the libraries and tools used in this project.
- Special thanks to the open-source community for their contributions and support.
