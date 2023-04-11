import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <section class="text-darkBlue ">
        <div class="container px-5 py-14 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h2 class=" font-semibold capitalize -tracking-wider text-xl mb-8">
              about us
            </h2>
            <p class="leading-relaxed md:text-lg sm:text-sm mb-8">
              This is a company that has been manufactoring and selling
              furniture in kurdistan according to italian standards for more
              than 10 years. The site presents the entire range of manufactured
              products, there is a complete description of the goods, as well as
              delivery services. This company also has off-line stores where the
              buyer can see the goods with his own eyes.
            </p>
            <button>
              <Link
                to="/About"
                className="mt-10 bg-beige md:px-7 md:py-2.5 px-5 py-1.5 font-medium
                rounded-md text-white capitalize w-auto text-sm"
              >
                read all
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
