import React from "react";

const AboutUs = () => {
  return (
    <>
      <section class="text-darkBlue ">
        <div class="container px-5 py-14 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h2 class=" font-semibold capitalize -tracking-wider text-xl mb-8">
              about us
            </h2>
            <p class="leading-relaxed text-lg">
              This is a company that has been manufactoring and selling
              furniture in kurdistan according to italian standards for more
              than 10 years. The site presents the entire range of manufactured
              products, there is a complete description of the goods, as well as
              delivery services. This company also has off-line stores where the
              buyer can see the goods with his own eyes.
            </p>
            <button
              className="mt-8 bg-beige px-7 py-2.5 font-medium
          rounded-md text-white capitalize w-auto"
            >
              read all
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
