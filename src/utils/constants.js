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
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
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
    id: "recZkNf2kwmdBcqd0",
    name: "smart speakers",
    price: 25000,
    image: "./images/smartspeakers.jpg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "living room",
    shipping: true,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "Google Nest Audio",
    price: 109999,
    image: "./images/nestaudio.jpg",
    colors: ["#000", "#ffb900"],
    company: "liddy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "living room",
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "sonos one",
    price: 30999,
    image: "./images/sonosone.png",
    colors: ["#ffb900", "#0000ff"],
    company: "liddy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "living room",
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "fingerprint lock",
    price: 12599,
    image: "./images/fingerprintlock.jpg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "bedroom",
    shipping: true,
    featured: true,
  },
  {
    id: "recd1jIVIEChmiwhy",
    name: "fingerprint door lock",
    price: 12599,
    image: "./images/fingerprintdoorlock.jpg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "bedroom",
    shipping: true,
    featured: true,
  },
  {
    id: "recd6jIVIEChmiwhy",
    name: "smart led bulb",
    price: 12599,
    image: "./images/smartbulb.jpg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "bedroom",
    shipping: true,
    featured: true,
  },
  {
    id: "recoM2MyHJGHLVi5l",
    name: "home security camera",
    price: 4099,
    image: "./images/homesecuritycamera.jpg",
    colors: ["#000"],
    company: "liddy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "camera",
    shipping: true,
  },
  {
    id: "recotY5Nh00DQFdkm",
    name: "wyze camera",
    price: 42999,
    image: "./images/wyzecam.png",
    colors: ["#00ff00", "#0000ff", "#ff0000"],
    company: "ikea",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "camera",
    shipping: true,
  },
  {
    id: "rec1Ntk7siEEW9ha1",
    name: "wifi video door bell",
    price: 23999,
    image: "./images/wifivideodoorbell.jpg",
    colors: ["#0000ff", "#000"],
    company: "ikea",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ea. Perferendis corrupti reiciendis nesciunte",
    category: "outdoor",
    shipping: true,
    featured: true,
  },
];

//export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
