import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <>
      <div className="text-white">
        {Icons.map((icon) => (
          <span
            key={icon.name}
            className=" cursor-pointer inline-flex items-center
            rounded-full mx-1.5 text-xl hover:text-beige hover:scale-110
             "
          >
            <i class={icon.class}></i>
          </span>
        ))}
      </div>
    </>
  );
};

export default SocialIcons;
