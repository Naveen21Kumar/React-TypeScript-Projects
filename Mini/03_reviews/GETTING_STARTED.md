# Getting Started - Reviews

## Overview
A React application that displays customer reviews with navigation controls. Users can browse through reviews using previous/next buttons or get surprised with a random review.

## Features

- 📝 Display customer reviews with author details
- ⬅️ ➡️ Navigate between reviews using previous/next buttons
- 🎲 View random reviews with "Surprise Me" button
- 🖼️ Display reviewer image, name, job title, and testimonial
- 💬 Quote icon to highlight review text
- 🔄 Circular navigation (loops back to start/end)

## Prerequisites
- React with TypeScript
- `useState` hook from React
- `react-icons` library for icons
- JSON data in `data.ts`

## Implementation Steps

### Step 1: Install Dependencies
Install the required icon library:

```bash
npm install react-icons
```

### Step 2: Import Required Dependencies
Import React hooks and icon library in `App.tsx`:

```typescript
import { useState } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import people from './data';
```

### Step 3: Create State for Review Index
Initialize state to track the current review being displayed:

```typescript
const [index, setIndex] = useState(0);
const { name, job, image, text } = people[index];
```

### Step 4: Create Number Validation Function
Create a helper function to handle circular navigation (wrapping around when reaching the end):

```typescript
function checkNumber(number: number) {
  if (number < 0) {
    return people.length - 1;
  }
  if (number > people.length - 1) {
    return 0;
  }
  return number;
}
```

### Step 5: Implement Previous Button Handler
Create a function to navigate to the previous review:

```typescript
const prevPerson = () => {
  setIndex((currentIndex) => {
    const newIndex = currentIndex - 1;
    return checkNumber(newIndex);
  });
};
```

### Step 6: Implement Next Button Handler
Create a function to navigate to the next review:

```typescript
const nextPerson = () => {
  setIndex((currentIndex) => {
    const newIndex = currentIndex + 1;
    return checkNumber(newIndex);
  });
};
```

### Step 7: Implement Random Review Handler
Create a function to display a random review (avoiding repeating the current one):

```typescript
const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * people.length);
  if (randomNumber === index) {
    randomNumber = index + 1;
  }
  setIndex(checkNumber(randomNumber));
};
```

### Step 8: Display Review Card
Render the review article with reviewer image, details, and navigation buttons:

```typescript
<article className='review'>
  <div className='img-container'>
    <img src={image} alt={name} className='person-img' />
    <span className='quote-icon'>
      <FaQuoteRight />
    </span>
  </div>
  <h4 className='author'>{name}</h4>
  <p className='job'>{job}</p>
  <p className='info'>{text}</p>
  <div className='btn-container'>
    <button className='prev-btn' onClick={prevPerson}>
      <FaChevronLeft />
    </button>
    <button className='next-btn' onClick={nextPerson}>
      <FaChevronRight />
    </button>
  </div>
  <button className='btn btn-hipster' onClick={randomPerson}>
    surprise me
  </button>
</article>
```

## Data Structure

Expected structure in `data.ts`:

```typescript
interface Review {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

const people: Review[] = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    image: "url-to-image",
    text: "Review text here..."
  },
  // More reviews...
];

export default people;
```

## Key Concepts

### State Management
- `index` state tracks the current review position
- `setIndex` updates which review is displayed

### Circular Navigation
The `checkNumber()` function ensures seamless looping:
- Going before index 0 → jumps to last review
- Going after last index → jumps to first review

### Random Selection
- Generates random number within array range
- Avoids showing same review twice consecutively

## Summary

Follow these steps to build a functional Reviews application with smooth navigation between customer testimonials. The app demonstrates state management, array manipulation, and interactive button controls in React.

## Alternative Approach (Bonus)

The code includes commented-out implementations using the **modulus operator** (`%`) for circular navigation. This is a more concise approach:

```typescript
// Using modulus operator instead of checkNumber()
const newIndex = (currentIndex + 1) % people.length;
```

Both approaches work equally well!