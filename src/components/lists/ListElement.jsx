import { Can } from "../../config/Can";

export default function ListElement({ label }) {
    return (
        <Can I="read" a= {label}>
            <div style={{ width: '100%', padding: '5px', fontSize: '20px', marginBottom: '10px' }}>
                { label }
            </div>
        </Can>
    )
  }