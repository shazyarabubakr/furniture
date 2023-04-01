import React from "react";
import Item from "./Item";
import { CONTACT, CATEGORY, INFORMATION} from "./Menus";

const ItemsContainer = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <p className="text-7xl font-signature capitalize">diwaxan</p>
        <Item Links={CONTACT} title="CONTACT" />
        <Item Links={CATEGORY} title="CATEGORY" />
        <Item Links={INFORMATION} title="INFORMATION" />
      </div>
    </>
  );
};

export default ItemsContainer;
