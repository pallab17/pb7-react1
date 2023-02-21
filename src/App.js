import React from "react";

const App = () => {
  return (
    // <div>
    //   WELCOME TO PB7 KINGDOM
    //   <p className='yoyo'> yo</p>
    // </div>
    // using react fragment ka symbol
    <>
      <Pallab />
      <Pallab />
      <Pallab />
      <Pallab />

      WELCOME TO PB7 KINGDOM {3 + 3}
      <p className="yoyo"> yo</p>
      <Pallab/>
    </>
  );
};

const Pallab = () => {
  // 1 way of doing this
  // return  (
  // <h1>pallab </h1>
  // );
  // 2nd way of doing this
  return <h1>pallab</h1>;
};

export default App;
