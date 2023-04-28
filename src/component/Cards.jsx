import { items } from "../CartItems";
import Card from "./Card";

const Cards = () => {
  return (
    <section className="text-darkBlue">
      <div className="container px-4 ">
        <div className=" ">
          <div className=" w-full mb-12 ">
            <div className="lg:w-1/2 w-full mb-2 lg:mb-0">
              <h1 className="md:text-3xl text-lg font-medium title-font mb-2 pt-6 ">
                All Products
              </h1>
              <div className="h-1 w-20 bg-beige rounded"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 md:col-span-2 grid-cols-2 col-span-3">
            {items.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </div>
        <div className="w-full flex flex-row-reverse">
          <button
            className="  mt-8 bg-beige md:px-7 md:py-2.5 px-5 py-1.5 font-medium
            rounded-md text-white w-auto"
          >
            See more <i className="fi fi-rr-angle-small-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
