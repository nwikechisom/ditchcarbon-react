This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task Description

### Input Field:

Render a search bar where users can type queries.

### Search Suggestions:
1. Dynamically display a dropdown of suggestions below the input as the user types.
2. Filter suggestions based on a provided suggestions prop (an array of strings).

### Highlight Matching Text:
1. Highlight the matching portion of each suggestion in bold.

### Keyboard Navigation:
1. Enable navigation through the suggestions using the up and down arrow keys.
2. Allow selection of a suggestion by pressing “Enter,” which populates the input field.

### Props:
__suggestions__: An array of strings to serve as the search suggestions.

__onSearch__: A callback function that receives the selected query when a suggestion is clicked or when “Enter” is pressed.

