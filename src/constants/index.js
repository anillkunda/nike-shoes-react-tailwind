import {
  delivery,
  exchange,
  support,
  github,
  instagram,
  linkedin,
  x,
} from '../assets/icons';
import {
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  soccerShoes,
  runningShoes,
  basketballShoes,
  soccerTackle,
  basketballPlay,
} from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#collections', label: 'Collections' },
  { href: '#performance', label: 'Performance' },
  { href: '#spotlight', label: 'Spotlight' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    id: 1,
    name: 'Nike Terra Manta – Black/White/Gum',
    category: "Men's Shoes",
    price: '$80',
    image: productImage1,
  },
  {
    id: 2,
    name: 'Nike Phantom 6 Low Elite – White/Red/Black',
    category: 'Soccer Cleats',
    price: '$283',
    image: productImage2,
  },
  {
    id: 3,
    name: 'Nike Field General – White/Turquoise',
    category: 'Lifestyle Sneakers',
    price: '$95',
    image: productImage3,
  },
  {
    id: 4,
    name: 'Nike Mercurial Vapor 16 Academy – White/Red',
    category: 'Soccer Cleats',
    price: '$124',
    image: productImage4,
  },
];

export const collection = [
  {
    title: 'ENGINEERED FOR PURE SPEED',
    description:
      'Lightweight studs and a streamlined upper make these boots ideal for explosive acceleration.',
    image: soccerShoes,
    buttonText: 'Shop Now',
  },
  {
    title: 'RUN FURTHER, PLAY FASTER',
    description:
      'Designed for dynamic movement with smooth cushioning and responsive energy return.',
    image: runningShoes,
    buttonText: 'Shop Now',
  },
  {
    title: 'DOMINATE EVERY DRIVE',
    description:
      'High-grip outsoles and reinforced lateral support for aggressive moves on the court.',
    image: basketballShoes,
    buttonText: 'Shop Now',
  },
];

export const services = [
  {
    imgURL: delivery,
    label: 'Fast Delivery',
    subtext:
      'Get your orders delivered quickly and reliably right to your doorstep.',
  },
  {
    imgURL: exchange,
    label: 'Easy Returns',
    subtext:
      'Enjoy hassle-free returns and exchanges with our flexible return policy.',
  },
  {
    imgURL: support,
    label: '24/7 Support',
    subtext: 'Our customer support team is available anytime to assist you.',
  },
];

export const performanceData = [
  {
    src: { soccerTackle },
    alt: 'Soccer',
    style: 'w-full h-auto rounded-lg',
  },
  {
    src: { basketballPlay },
    alt: 'Basketball',
    style: 'w-full h-auto rounded-lg mb-4',
  },
];

export const footerLinks = [
  {
    title: 'Resources',
    links: [
      { name: 'Gift Cards', link: '/' },
      { name: 'Find a Store', link: '/' },
      { name: 'Become a Member', link: '/' },
      { name: 'Saturn x NBA', link: '/' },
      { name: 'Saturn Journal', link: '/' },
      { name: 'Site Feedback', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Get Help', link: '/' },
      { name: 'Order Status', link: '/' },
      { name: 'Return', link: '/' },
      { name: 'Shipping and Delivery', link: '/' },
      { name: 'Order Cancellation', link: '/' },
      { name: 'Payment Options', link: '/' },
      { name: 'Contact Us', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
];

export const footerIcons = [
  { src: instagram, alt: 'Instagram logo' },
  { src: linkedin, alt: 'Linkedin logo' },
  { src: x, alt: 'X logo' },
];

export const socialMedia = [
  { src: github, alt: 'Github logo' },
  { src: instagram, alt: 'Instagram logo' },
  { src: linkedin, alt: 'Linkedin logo' },
  { src: x, alt: 'X logo' },
];
