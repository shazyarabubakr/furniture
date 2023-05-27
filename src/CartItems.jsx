import kitchen from "./asset/image/kitchen.jpg";
import modernSofa from "./asset/image/furn1.jpg";
import bedroom from "./asset/image/bedroom.jpg";
import outdoor from "./asset/image/outdoor.jpg";
export const items = [
  {
    id: 1,
    images: [{ url: outdoor }],
    image2: bedroom,
    alt: "kitchen",
    name: "Modern kitchen",
    price: 678,
    amount: 3,
  },
  {
    id: 2,
    images: [{ url: kitchen }],
    image2: modernSofa,
    alt: "classic sofa",
    name: "Modern sofa",
    price: 376,
    amount: 7,
  },
  // {
  //   id: 3,
  //   image1: kitchen,
  //   image2: modernSofa,
  //   alt: "vintage sofa",
  //   name: "Modern sofa",
  //   price: 200,
  //   amount: 9,
  // },
  // {
  //   id: 4,
  //   image1: kitchen,
  //   image2: modernSofa,
  //   alt: "modern sofa",
  //   name: "Modern sofa",
  //   price: 149,
  //   amount: 3,
  // },
  // {
  //   id: 5,
  //   image1: kitchen,
  //   image2: modernSofa,
  //   alt: "vintage sofa",
  //   name: "Modern sofa",
  //   price: 200,
  //   amount: 7,
  // },
  // {
  //   id: 6,
  //   image1: kitchen,
  //   image2: modernSofa,
  //   alt: "modern sofa",
  //   name: "Modern sofa",
  //   price: 149,
  //   amount: 9,
  // },
];
