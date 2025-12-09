## Tours

1. Read the JSON data coming from `URL`

2. Create a state variable to store the data.

3. Use `fetch` API to fetch the data and call the fetch functions inside `useEffect` hook.

4. For fetching the data use `asyc/await` and set the state variable to the fetched data in `App.tsx`

5. Create a state variable for handling loading state.

6. Display a loading UI as the fallback in the JSX.

7. Create component `Tours.tsx` to display tours list and `SingleTour.tsx` to display single tour.

8. Iterate the data in `Tours.tsx` using `map` method.

9. Pass props and display tour object properties in the `SingleTour.tsx` and create a button to remove a tour.

10. create a function to remove tour and use `filter` method to filter the tours on basis of matching `id`. set the state variable accordingly.

11. conditionally render full info or first 200 characters using `.subString(min, max)` string method.

12. create 2 buttons `read more` and `show less` and conditionally render either of one as per the user interaction.

13. if the tours are removed and the tour is empty, then render a Fallback UI with `heading` with text and a `Button` to `refetch` the data again.

14. call the fetch tours functions again to refetch data.