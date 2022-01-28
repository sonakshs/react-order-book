/**
 * Part 2
UI should look close to the example. You will not need to use theme library like Material UI or Bootstrap.
- Green = rgb(45,175,52)
- Orange = rgb(250,103,45)
- You can use pure black and white for the other colors. 

 * part 3
- When a new row is created, fade it in from an opacity of zero to a fully visible opacity of one. Over 1 second. 
- Sort by Price.
**/

export default function OrderBook({ arrR, arrG }) {
  return (
    <div style={{ margin: "10px auto" }}>
      <div>
        {arrR
          .sort((a, b) => (a.price > b.price ? 1 : -1))
          .map((item) => (
            <div className="fader" key={item.id}>
              {item.id.toFixed(4)}
              <span style={{ color: "rgb(250,103,45)" }}>
                {item.price.toFixed(2)}
              </span>
            </div>
          ))}
      </div>
      ------------------
      <div>
        {arrG
          .sort((a, b) => (a.price > b.price ? 1 : -1))
          .map((item) => (
            <div className="fader" key={item.id}>
              {item.id.toFixed(4)}
              <span style={{ color: "rgb(45,175,52)" }}>
                {item.price.toFixed(2)}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
