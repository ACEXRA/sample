import React from "react";
import Items from "./Items";

const Content = () => {
  // const arr1 = [
  //   "item1",
  //   "item2",
  //   "item3",
  //   "item4",
  //   "item5",
  //   "item6",
  //   "item7",
  //   "item8",
  //   "item9",
  //   "item10",
  //   "item11",
  //   "item12",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  //   "item4",
  // ];
  return (
    <div className="content">
      {/* {arr1.map((i) => {
        return <Items message={i} />;
      })} */}
      <Items message={"test"} />
    </div>
  );
};

export default Content;
