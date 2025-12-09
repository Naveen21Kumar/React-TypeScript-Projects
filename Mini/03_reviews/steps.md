## Reviews Project

1. Read the reviews array data from `data.ts` and import it in `App.tsx`

2. Here we need to display one Review (object) at a time, so no need to iterate the reviews array data.

3. Create a state variable with setter Fn to store the `index` in `App.tsx`

4. Create a variable to store the first object using the `index` state. Destructure the object properties here only if required.

5. Render the Object properties in the JSX element.

6. Create a prev and next buttons using react-icons.

7. On prev button click, update the index state to `currenstate - 1`. Handle `< 0` edge case using `modulus operator` and `array.length`.  

8. On next button click, update the index state to `currenstate +  1`. Handle `> array index` edge case using `modulus operator` and `array.length`.

9. Create a button to display random reviews. Use `Math.random()` to generate random numbers and  use `array.length` to generate numbers more > 1.
  
10. Use `Math.floor()` to round the number(s). 

11. If random number === index for `second instance`, `increment` it by one and handle `> array index` edge case using `modulus operator` and `array.length`