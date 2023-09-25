import star from '../assets/star.svg'
import shield from '../assets/shield.svg'
import send from '../assets/send.svg'
import people01 from '../assets/people01.png'
import people02 from '../assets/people02.png'
import people03 from '../assets/people03.png'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import airbnb from '../assets/airbnb.png'
import binance from '../assets/binance.png'
import coinbase from '../assets/coinbase.png'
import dropbox from '../assets/dropbox.png'

// TODO: Navlinks
export const navLinks = [
  { id: 'home', title: 'Home', href: '/' },
  { id: 'features', title: 'Features', href: '/features' },
  { id: 'product', title: 'Product', href: '/product' },
  { id: 'clients', title: 'Clients', href: '/clients' },
]

// TODO: features
export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Rewards',
    content: 'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: '100% Secured',
    content: 'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Balance Transfer',
    content: 'A balance transfer credit card can save you a lot of money in interest charges.',
  },
]

// TODO: feedback
export const feedback = [
  {
    id: 'feedback-1',
    content:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
]

// TODO: Stats
export const stats = [
  { id: 'stats-1', title: 'User Active', value: '3800+' },
  { id: 'stats-2', title: 'Trusted by Company', value: '230+' },
  { id: 'stats-3', title: 'Transaction', value: '$230M+' },
]

// TODO: footerlinks
export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      { name: 'Content', link: 'https://www.hoobank.com/content/' },
      { name: 'How it Works', link: 'https://www.hoobank.com/how-it-works/' },
      { name: 'Create', link: 'https://www.hoobank.com/create/' },
      { name: 'Explore', link: 'https://www.hoobank.com/explore/' },
      { name: 'Terms & Services', link: 'https://www.hoobank.com/terms-and-services/' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Help Center', link: 'https://www.hoobank.com/help-center/' },
      { name: 'Partners', link: 'https://www.hoobank.com/partners/' },
      { name: 'Suggestions', link: 'https://www.hoobank.com/suggestions/' },
      { name: 'Blog', link: 'https://www.hoobank.com/blog/' },
      { name: 'Newsletters', link: 'https://www.hoobank.com/newsletters/' },
    ],
  },
  {
    title: 'Partner',
    links: [
      { name: 'Our Partner', link: 'https://www.hoobank.com/our-partner/' },
      { name: 'Become a Partner', link: 'https://www.hoobank.com/become-a-partner/' },
    ],
  },
]

// TODO: SocialMedia
export const socialMedia = [
  { id: 'social-media-1', icon: instagram, link: 'https://www.instagram.com/' },
  { id: 'social-media-2', icon: facebook, link: 'https://www.facebook.com/' },
  { id: 'social-media-3', icon: twitter, link: 'https://www.twitter.com/' },
  { id: 'social-media-4', icon: linkedin, link: 'https://www.linkedin.com/' },
]

// TODO: clients
export const clients = [
  { id: 'client-1', logo: airbnb },
  { id: 'client-2', logo: binance },
  { id: 'client-3', logo: coinbase },
  { id: 'client-4', logo: dropbox },
]
