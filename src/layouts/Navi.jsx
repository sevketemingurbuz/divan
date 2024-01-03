import React from "react";

export default function Navi() {
  return (
    <div >
      Navi
      <button style={{zIndex: 2000}} type="button" className="btn btn-primary" data-mdb-ripple-init>
        Notifications<span className="badge badge-danger ms-2">8</span>
      </button> 
    </div>
  );
}
