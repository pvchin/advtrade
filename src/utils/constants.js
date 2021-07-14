import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import img1 from "../assets/imgs/nestaudio.jpg";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "To empower people & organizations with smart technology to build smart life, homes, offices & businesses on planet earth",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "To build a smart world",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

export const products = [
  {
    id: "sm1",
    name: "AI Smart Lock",
    price: 25000,
    image: "./products/smartlock-sm1.jpg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "AI",
    description: "AI Smart Lock with Handle Movement",
    category: "smart locks",
    shipping: true,
  },
  {
    id: "sm2",
    name: "AI Smart lock v2 ",
    price: 109999,
    image: "./products/smartlock-sm2.jpg",
    colors: ["#000", "#ffb900"],
    company: "AI",
    description: "AI-SLO-528 v2",
    category: "smart locks",
  },
  {
    id: "sm3",
    name: "AI smart lock with logo",
    price: 30999,
    image: "./products/smartlock-sm3.jpg",
    colors: ["#ffb900", "#0000ff"],
    company: "AI",
    description: "AI-SLO_528 w AI Smart Logo",
    category: "smart locks",
  },
  {
    id: "sm4",
    name: "AI smart glass biometric lock",
    price: 12599,
    image: "./products/smartlock-sm4.jpg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "AI",
    description: "AI smart glass biometric lock with Time Attendance",
    category: "smart locks",
    shipping: true,
  },
  {
    id: "ss1",
    name: "AI Front Left with Labels View",
    price: 12599,
    image: "./products/smartsecurity-ss1.jpg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "AI",
    description: "AI Front Left with Labels View",
    category: "smart security",
    shipping: true,
    featured: true,
  },
  {
    id: "ss2",
    name: "AI Smart Wireless 4 Channels 2.0MP",
    price: 12599,
    image: "./products/smartsecurity-ss2.jpg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart security",
    shipping: true,
    featured: true,
  },
  {
    id: "ss3",
    name: "AI Smart Wireless 2.0MP 8 Channels",
    price: 4099,
    image: "./products/smartsecurity-ss3.jpg",
    colors: ["#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart security",
    shipping: true,
  },
  {
    id: "ss4",
    name: "AI Smart Alarm System Set & Accessories",
    price: 42999,
    image: "./products/smartsecurity-ss4.jpg",
    colors: ["#00ff00", "#0000ff", "#ff0000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart security",
    shipping: true,
  },
  {
    id: "ds1",
    name: "AI Door Sensors",
    price: 23999,
    image: "./products/smartsensor-ds1.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart sensors",
    shipping: true,
  },
  {
    id: "ds2",
    name: "AI PIR Motion sensor",
    price: 23999,
    image: "./products/smartsensor-ds2.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart security",
    shipping: true,
    featured: true,
  },
  {
    id: "sl1",
    name: "AI Smart WW+CW+RGB Bulb",
    price: 23999,
    image: "./products/smartlighting-sl1.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart lighting",
    shipping: true,
    featured: true,
  },
  {
    id: "sl2",
    name: "AI RGB LED 5m Light Strip",
    price: 23999,
    image: "./products/smartlighting-sl2.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart lighting",
    shipping: true,
    featured: true,
  },
  {
    id: "sl3",
    name: "AI RGB LED 10m Light Strip",
    price: 23999,
    image: "./products/smartlighting-sl3.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart lighting",
    shipping: true,
    featured: true,
  },
  {
    id: "se1",
    name: "AI IR Remote Controller",
    price: 23999,
    image: "./products/smartelec-se1.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart electricals",
    shipping: true,
    featured: true,
  },
  {
    id: "se2",
    name: "AI Smart Touch Switch 1 Ch",
    price: 23999,
    image: "./products/smartelec-se2.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart electricals",
    shipping: true,
    featured: true,
  },
  {
    id: "se3",
    name: "AI Smart Touch Switch 2 Ch",
    price: 23999,
    image: "./products/smartelec-se3.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart electricals",
    shipping: true,
    featured: true,
  },
  {
    id: "se4",
    name: "AI Smart Touch Switch 3 Ch",
    price: 23999,
    image: "./products/smartelec-se4.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart electricals",
    shipping: true,
    featured: true,
  },
  {
    id: "se5",
    name: "AI Smart Socket",
    price: 23999,
    image: "./products/smartelec-se5.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart electricals",
    shipping: true,
    featured: true,
  },
  {
    id: "se6",
    name: "AI Smart Socket",
    price: 23999,
    image: "./products/smartelec-se6.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart electricals",
    shipping: true,
    featured: true,
  },
  {
    id: "sa1",
    name: "AI Floor Cleaning Robot A",
    price: 23999,
    image: "./products/smartapp-sa1.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart appliances",
    shipping: true,
    featured: true,
  },
  {
    id: "sa2",
    name: "AI Floor Cleaning Robot B",
    price: 23999,
    image: "./products/smartapp-sa2.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart appliances",
    shipping: true,
    featured: true,
  },
  {
    id: "sa3",
    name: "AI Floor Cleaning Robot C",
    price: 23999,
    image: "./products/smartapp-sa3.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart applicances",
    shipping: true,
    featured: true,
  },
  {
    id: "sh1",
    name: "AI Smart Curtain",
    price: 23999,
    image: "./products/smartshade-sh1.jpg",
    colors: ["#0000ff", "#000"],
    company: "AI",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "smart shading",
    shipping: true,
    featured: true,
  },
];

//export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
