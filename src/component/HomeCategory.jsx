import React from "react";
import kitchen from "../asset/image/kitchen.jpg";
import livingroom from "../asset/image/livingroom.jpg";
import bedroom from "../asset/image/bedroom.jpg";
import bathroom from "../asset/image/bathroom.jpg";
import office from "../asset/image/office.jpg";
import outdoor from "../asset/image/outdoor.jpg";

const HomeCategory = () => {
  const category = [
    {
      id: 1,
      imgUrl: kitchen,
      name: "kitchens",
      alt: "kitchen",
    },
    {
      id: 2,
      imgUrl: livingroom,
      name: "living rooms",
      alt: "living room",
    },
    {
      id: 3,
      imgUrl: bedroom,
      name: "bedrooms",
      alt: "bedroom",
    },
    {
      id: 4,
      imgUrl: bathroom,
      name: "bathrooms",
      alt: "bathroom",
    },
    {
      id: 5,
      imgUrl: office,
      name: "offices",
      alt: "office",
    },
    {
      id: 6,
      imgUrl: outdoor,
      name: "outdoors",
      alt: "outdoor",
    },
  ];
  return (
    <>
      <section className="text-white">
        <div className="container px-2 py-14 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            {/**categories */}
            {category.map(({ id, imgUrl, name, alt }) => (
              <div key={id} className="lg:w-1/3 w-1/2 relative">
                <img
                  src={imgUrl}
                  alt={alt}
                  className="object-cover lg:h-80 md:h-36 h-60 w-full"
                />
                <h1 className="sm:text-2xl text-xl font-medium uppercase text-white absolute center-absolute">
                  {name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCategory;
