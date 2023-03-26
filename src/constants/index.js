
import { people01, people02, people03, facebook, instagram, twitter, linkedin, shield, star, send, image1, valentine, ruiruWater, muthokinju, boxer  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact"
  },
  {
    id: "gallery",
    title: "Gallery"
  }
];
export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "FAQ",
        link: "/",
      },
      {
        name: "Customer Relations",
        link: "/",
      },
      {
        name: "Privacy",
        link: "/",
      },
    ],
  },
  {
    title: "Recommendations",
    links: [
      {
        name: "Tool Kit",
        link: "/",
      },
      {
        name: "Spare Parts",
        link: "/",
      },
      {
        name: "Testimonials",
        link: "/",
      },
    ],
  },
  {
    title: "Account",
    links: [
      {
        name: "Ways to book",
        link: "/",
      },

      {
        name: "Terms & Services",
        link: "/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
 
export const stats = [
  {
    id: 1,
    value: 700,
    title: "Bikes repaired"
  },
  {
    id: 2,
    value: 5,
    title: "Cities Covered"
  },
  {
    id: 3,
    value: 43,
    title: "Work Partners"
  }
]

export const benefits = [
  {
    id: 1,
    icon: star,
    title: "Benefits",
    content:
      "A youth owned enterprise that is fast growing and accomodative of your needs",
  },
  {
    id: 2,
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your bike is safe from the moment you leave it with us until you collect it.",
  },
  {
    id: 3,
    icon: send,
    title: "Convinient",
    content:
      "Our mechanics are flexible and can come to you or pick up your motorbike for servicing and deliver it after.",
  },
];

export const feedback = [
  {
    id: 1,
    desc: "I especially value that Jasper comes to our warehouses, no matter the location, and gets us back on track.",
    name: "Kevin Mwangi",
    title: "Fleet Manager, Muthokinju",
    img: people03
  },
  // {
  //   id: 2,
  //   desc: "The garage is easily accessible through Limuru Road, which is great for me as I do not have to worry about getting there.",
  //   name: "James Doe",
  //   title: "Bodaboda Rider",
  //   img: people02
  // },
  {
    id: 3,
    desc: "I have been training under Biker's garage for a while now. The hands-on teaching approach is unparalleled.",
    name: "Joel Chomba",
    title: "Apprentice",
    img: people02
  },
  {
    id: 4,
    desc: "They are patient with clients and the pick-up and drop-off serveice saves so much on my time.",
    name: "Beryll Martin",
    title: "Bike Enthusiast",
    img: people01
  },
]

   
export const clients = [
  // get the logo for valentine farm, ruiri water, muthokinju paints and boxer boda
  {
    id: "client-1",
    logo: valentine
  },
  {
    id: "client-2",
    logo: ruiruWater
  },
  {
    id: "client-3",
    logo: muthokinju
  },
  {
    id: "client-4",
    logo: boxer
  },
]