import React from "react";
import furn1 from "../asset/image/furn1.jpg";

const ItemDetails = () => {
  return (
    <section className="text-darkblue overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="sofa"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={furn1}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className=" text-3xl title-font font-medium mb-1 pb-4">
              Modern sofa
            </h1>
            <p className="leading-relaxed pb-6">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>

            <div className="flex">
              <span className="title-font font-medium text-2xl ">$580</span>
              <button className="flex ml-auto text-white bg-beige border-0 py-2 px-6 focus:outline-none hover:bg-lightBeige rounded">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
