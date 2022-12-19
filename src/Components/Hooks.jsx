import React, { useEffect, useState } from "react";

function Hooks() {
  const [a, setA] = useState(0);
  useEffect(() => {
    console.log("wokkk");
  }, [a]);
  return (
    <div>
      <button onClick={() => setA(a - 1)}>-</button>
      <button onClick={() => setA(a + 1)}>+</button>

      <p>{a}</p>
    </div>
  );
}
export default Hooks;
