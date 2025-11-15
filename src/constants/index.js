import {
  productGuarantee,
  truckDelivery,
  returnExchange,
  customerSupport,
  github,
  instagram,
  linkedin,
  x,
} from '../assets/icons';
import {
  productImage1,
  productImage2,
  productImage3,
  runningShoes,
  sportsShoes,
  workoutShoes,
  workoutTraining,
  basketballBag,
} from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#categories', label: 'Categories' },
  { href: '#trends', label: 'Trends' },
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
    name: 'Nike Pacific - Black/White',
    category: 'Lifestyle Shoes',
    colors: 2,
    price: '$80',
    image: productImage1,
  },
  {
    id: 2,
    name: 'Jordan Tatum 4 PF - Black/Red',
    category: 'Basketball Shoes',
    colors: 3,
    price: '$130',
    image: productImage2,
  },
  {
    id: 3,
    name: 'Jordan Tatum 4 PF - Grey',
    category: 'Workout Shoes',
    colors: 2,
    price: '$130',
    image: productImage3,
  },
];

export const categories = [
  {
    id: 1,
    title: 'Running Shoes',
    img: runningShoes,
    buttonText: 'Shop Now',
  },
  {
    id: 2,
    title: 'Sports & Activities',
    img: sportsShoes,
    buttonText: 'Shop Now',
  },
  {
    id: 3,
    title: 'Workout Essentials',
    img: workoutShoes,
    buttonText: 'Shop Now',
  },
];

export const services = [
  {
    id: 1,
    icon: productGuarantee,
    title: '100% Genuine Product Guarantee',
  },
  {
    id: 2,
    icon: truckDelivery,
    title: 'Guaranteed On-Time Delivery',
  },
  {
    id: 3,
    icon: returnExchange,
    title: '100% Return Guarantee & Exchange',
  },
  {
    id: 4,
    icon: customerSupport,
    title: '24×7 Customer Support',
  },
];

export const trendingStyles = [
  {
    id: 1,
    title: 'Men',
    categories: [
      'Casual Sneakers',
      'Basketball Shoes',
      'Sports Bags',
      'Sports Essentials',
      'Lifestyle Shoes',
    ],
    image: basketballBag,
  },
  {
    id: 2,
    title: 'Men',
    categories: [
      'Training Shoes',
      'Gym Essentials',
      'Performance Wear',
      'CrossFit Shoes',
      'Active Sneakers',
    ],
    image: workoutTraining,
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
