# Technical assessment - Wallapop

A single-page application designed to search for, view, and manage a list of items.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Data Source](#data-source)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

## Overview

The application allows users to search for items using various criteria, view the search results, sort the items, add items to their favorites, and more.

## Features

- **Search Functionality**: Users can search for items based on criteria such as Title, Description, Price, and Email.

- **List Display**: When a search has results, the application displays a list of items, showing all relevant information, including a picture.

- **Sorting**: Users can sort the listed items by Title, Description, Price, or Email.

- **Favorite Items**: Users can select items from the list and save them to a favorite items list. The favorite items are displayed in a modal, showing only the picture and the title.

- **Search within Favorites**: Within the favorite modal, users can search for items by title and remove items from the favorite list without closing the modal.

- **Pagination**: To manage a large number of items, the application displays 5 items at first. Users can navigate to the next set of items clicking the "More" button.

- **URL Query**: When you perform a search, filter or click the load more button, parameters are added to the url, which, if refreshed or shared, will load the data.

- **Dark/Light theme**: The application will take into account the theme of your device and change the web to dark or light.

- **Mobile friendly**: Adapts to the screens of different devices, optimized for mobile and desktop.

## Technologies Used

- NextJS 13 (as framework)
- Tailwind CSS (for styles)
- TypeScript (for typed programming)
- Jest (for testing)
- Zustand (Redux alternative)
- next-usequerystate (state for url params)

## Data Source

Here's an example of the item structure in the JSON:

```json
{
  "title": "Sample Item",
  "description": "This is a sample item description.",
  "price": "20",
  "email": "sample@example.com",
  "picture": "sample.jpg"
}
```
Getting Started
To get started with this project, follow these steps:

Clone the repository to your local machine:
```bash
git clone https://github.com/julioferrero/assessment-wallapop.git
```

Install the project dependencies:
```bash
cd assessment-wallapop
npm install
```
Run the application locally:
```bash
npm run dev
```
Access the application in your web browser at http://localhost:3000.

## Usage

The application allows you to search for items, view search results, sort items, add them to your favorites, and manage your favorite items easily.

## Testing

To run tests, use the following command:

```bash
npm test
```

## License
This project is licensed under the GNUv3 License - see the LICENSE file for details.
