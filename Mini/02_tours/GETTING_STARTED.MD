# Getting Started - Tours

## Overview
A React application that displays a list of tours fetched from an external API with functionality to manage and remove tours from the list.

## Prerequisites
- React with TypeScript
- `useState` and `useEffect` hooks from React
- External API endpoint: `https://www.course-api.com/react-tours-project/`
- Understanding of async/await and fetch API

## Implementation Steps

### Step 1: Define Tour Type
Create a `types.ts` file with a Tour interface to ensure type safety.

```typescript
export type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};
```

### Step 2: Create State Variables
Initialize state variables in `App.tsx` using the `useState` hook to manage loading, tours, and error states.

```typescript
const [isLoading, setIsLoading] = useState(true);
const [tours, setTours] = useState<Tour[]>([]);
const [error, setError] = useState<string | null>(null);
```

### Step 3: Fetch Tours Data
Create an async function `fetchTours()` that fetches tour data from the external API using the `fetch` API.

```typescript
const fetchTours = async () => {
  setIsLoading(true);
  setError(null);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch tours');
    const tours = await response.json();
    setTours(tours);
  } catch (error) {
    setError(error instanceof Error ? error.message : 'An unknown error occurred');
  }
  setIsLoading(false);
};
```

### Step 4: Initialize Tours on Component Mount
Use the `useEffect` hook to fetch tours when the component first mounts.

```typescript
useEffect(() => {
  fetchTours();
}, []);
```

### Step 5: Create Remove Function
Implement a `removeTour()` function that filters out a tour by its ID.

```typescript
const removeTour = (id: string) => {
  const newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours);
};
```

### Step 6: Handle Loading State
Display a loading component while tours are being fetched.

```typescript
if (isLoading) {
  return (
    <main>
      <Loading />
    </main>
  );
}
```

### Step 7: Handle Error State
Display an error message with a Refresh button if fetching fails.

```typescript
if (error) {
  return (
    <main>
      <div className='title'>
        <h2>Error : {error}</h2>
        <button onClick={() => fetchTours()}>Refresh</button>
      </div>
    </main>
  );
}
```

### Step 8: Handle Empty State
Display a message and Refresh button when all tours have been removed.

```typescript
if (tours.length === 0) {
  return (
    <main>
      <div className='title'>
        <h2>No tours left</h2>
        <button onClick={() => fetchTours()}>Refresh</button>
      </div>
    </main>
  );
}
```

### Step 9: Create Tours Component
Create a `Tours.tsx` component that renders the list of tours, passing each tour to a `SingleTour` component.

```typescript
{tours.map((tour) => (
  <SingleTour key={tour.id} tour={tour} removeTour={removeTour} />
))}
```

### Step 10: Create SingleTour Component
Create a `SingleTour.tsx` component that displays individual tour details and includes a remove button.

```typescript
const SingleTour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;
  return (
    // Render tour details with remove button
  );
};
```

## Summary
Follow these steps to build a functional Tours application with API integration, proper error handling, loading states, and component structure.
