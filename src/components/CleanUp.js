import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  function dimensioneFinestra() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", dimensioneFinestra);
    return () => {
      window.removeEventListener("resize", dimensioneFinestra);
    };
  });

  return (
    <div className="item flex-column shadow rounded col-6">
      <div>
        La larghezza di questa finestra è di <b>{size}</b> pixel
      </div>
      <br />
      <div>Prova a modificare la dimensione di questa finestra!</div>
    </div>
  );
};

export default CleanUp;
