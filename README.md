# Band List Front

A modern React + TypeScript frontend for browsing a curated list of bands and viewing detailed information for each artist.

## Overview

This project provides a simple and clean interface for exploring bands. Users can:

- View a list of available bands
- Select a band to see its details
- Read the band's biography
- View genre information
- Check the number of plays
- See the band's image

The application consumes a remote API to fetch band details dynamically while using a local dataset to render the initial band list.

## Tech Stack

- **React 18**
- **TypeScript**
- **Create React App**
- **Styled Components**
- **Axios**

## Project Structure

```text
.
├── public/
├── src/
│   ├── data/            # Local data source for the initial band list
│   ├── pages/
│   │   ├── Home/        # Main page with band list and selection flow
│   │   └── Band/        # Band details view
│   ├── services/        # API configuration and HTTP client
│   ├── styles/          # Global styles
│   └── types/           # TypeScript DTOs and shared types
├── package.json
└── README.md
```

## Features

- Band listing interface
- On-demand band details loading
- Typed data models with TypeScript interfaces
- Component-based structure for maintainability
- Centralized API service configuration
- Global styling with Styled Components

## API Integration

The frontend is configured to consume a backend API hosted on AWS API Gateway.

### Base URL

```text
https://xqwsf2o3ei.execute-api.us-east-1.amazonaws.com/v1/api
```

### Example endpoint used by the app

```text
GET /bands/details/{id}
```

## Getting Started

### Prerequisites

Make sure you have installed:

- **Node.js** 16 or later
- **npm** or **yarn**

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/plinyo-silva/band_list_front.git
cd band_list_front
npm install
```

Or, if you prefer Yarn:

```bash
yarn install
```

## Running the Project

Start the development server:

```bash
npm start
```

Then open your browser at:

```text
http://localhost:3000
```

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner in watch mode.

### `npm run build`
Builds the app for production into the `build/` directory.

### `npm run eject`
Ejects the Create React App configuration. This action is irreversible.

## Data Model

### `BandDTO`

```ts
interface BandDTO {
  id: string;
  name: string;
}
```

### `BandDetailsDTO`

```ts
interface BandDetailsDTO {
  albums: string[];
  biography: string;
  genre: string;
  id: string;
  image: string;
  name: string;
  numPlays: number;
}
```

## Future Improvements

- Add loading and error states for API requests
- Improve accessibility and semantic HTML
- Add unit and integration tests
- Add search and filtering for bands
- Add routing for standalone band detail pages
- Move API base URL to environment variables

## Author

Developed by **plinyo-silva**.

## License

This project does not currently specify a license. Add a `LICENSE` file if you want to define usage permissions.
