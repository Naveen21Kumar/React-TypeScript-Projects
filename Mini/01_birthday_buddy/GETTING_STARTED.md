# Getting Started - Birthday Buddy

## Overview
A React application that displays a list of birthdays and provides functionality to manage them.

## Prerequisites
- React with TypeScript
- `useState` hook from React
- JSON data in `data.ts`

## Implementation Steps

### Step 1: Import JSON Data
Read the JSON data from `data.ts` and import it into your application.

```typescript
import { data } from './data';
```

### Step 2: Create State Variable
Initialize a state variable using the `useState` hook to store the birthday data.

```typescript
const [people, setPeople] = useState(data);
```

### Step 3: Display Birthday Count
Add a heading in `App.tsx` to display the total number of birthdays.

```typescript
<h3>{people.length} Birthdays Today</h3>
```

### Step 4: Create Components
Create two reusable components:
- **`List.tsx`** - Renders the list of all users
- **`SinglePerson.tsx`** - Renders individual user details

### Step 5: Iterate and Render Users
In `List.tsx`, use the `map()` method to iterate over the state variable and render each user with the `SinglePerson` component.

```typescript
{people.map((person) => (
  <SinglePerson key={person.id} person={person} />
))}
```

### Step 6: Display Individual User Data
In `SinglePerson.tsx`, destructure the person object properties and render them in the UI.

```typescript
const SinglePerson = ({ person }) => {
  const { id, name, age, image } = person;
  return (
    // Render user details
  );
};
```

### Step 7: Add Clear Button
Create a "Clear All" button in `App.tsx` to remove all birthdays from the list.

### Step 8: Implement Clear Functionality
Update the state to an empty array when the clear button is clicked.

```typescript
<button onClick={() => setPeople([])}>Clear All</button>
```

## Summary
Follow these steps to build a functional Birthday Buddy application with proper component structure and state management.