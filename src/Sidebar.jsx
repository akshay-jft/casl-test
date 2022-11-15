import { useState } from "react";
import ListElement from "./components/lists/ListElement";
import { Can } from "./config/Can";

export default function Sidebar({ props }) {
  const [listData, setListData] = useState([
    { label: "Home",  },
    { label: "Navigation" },
    { label: "Element 1" },
    { label: "Element 2" },
  ]);
  return (
    <div
      style={{
        width: "200px",
        minHeight: "100vh",
        background: "#eee",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      <Can I="read" a="Sidebar">
        <section>
          <p>Sidebar Items</p>
        </section>
        <section>
          <ul>
            {listData.map((listItem, index) => {
              return <ListElement label={listItem.label} key={index} />;
            })}
          </ul>
        </section>
        <section>
          <p>Footer Items</p>
        </section>
      </Can>
    </div>
  );
}
