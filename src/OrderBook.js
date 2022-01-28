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
