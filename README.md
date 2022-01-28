# react-order-book
Created with CodeSandbox

* https://i.ibb.co/W6GbZFR/interview-example.gif
 * part 1
Requirements:
- Clicking Buy should create a new row for Bids (buys).
- Clicking Sell should create a new row for Asks (sells).
- For the size, generate a random number between 0 to 1.
- For Price, generate a random number around 37000.
---
Example order generator object:
{
  id: Math.random(),
  size: Math.random(),
  price: 37000 + Math.random() * 2000
}

 * Part 2
UI should look close to the example. You will not need to use theme library like Material UI or Bootstrap.
- Green = rgb(45,175,52)
- Orange = rgb(250,103,45)
- You can use pure black and white for the other colors. 

 * part 3
- When a new row is created, fade it in from an opacity of zero to a fully visible opacity of one. Over 1 second. 
- Sort by Price.
