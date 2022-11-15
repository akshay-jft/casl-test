import { Can } from "../../config/Can";
import P1 from "./Paragraphs/p1";
import P2 from "./Paragraphs/p2";

export default function Dashboard({ label }) {
  return (
    <section>
      <Can I="read" a="Post">
        <P1 />
      </Can>
      <div style={{ margin: '20px 0'}}></div>
      <Can I="read" a="Post2">
        <P2 />
      </Can>
    </section>
  );
}
