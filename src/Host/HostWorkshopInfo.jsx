import React from "react";
import { useOutletContext } from "react-router-dom";

function HostWorkshopInfo() {
  const { currentWorkshop } = useOutletContext();
  return (
    <section className=" w-full mx-4 py-6">
      <h4 className="font-semibold">{currentWorkshop.description}</h4>
    </section>
  );
}

export default HostWorkshopInfo;
