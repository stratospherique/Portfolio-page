import PJ_11 from 'assets/img/screenshots/pj-11.png';
import PJ_12 from 'assets/img/screenshots/pj-12.png';
import PJ_21 from 'assets/img/screenshots/pj-21.png';
import PJ_22 from 'assets/img/screenshots/pj-22.png';
import PJ_23 from 'assets/img/screenshots/pj-23.png';
import PJ_31 from 'assets/img/screenshots/pj-31.png';
import PJ_32 from 'assets/img/screenshots/pj-32.png';
import PJ_33 from 'assets/img/screenshots/pj-33.png';
import PJ_41 from 'assets/img/screenshots/pj-41.png';
import PJ_42 from 'assets/img/screenshots/pj-42.png';
import PJ_43 from 'assets/img/screenshots/pj-43.png';
import PJ_51 from 'assets/img/screenshots/pj-51.png';
import PJ_52 from 'assets/img/screenshots/pj-52.png';
import PJ_53 from 'assets/img/screenshots/pj-53.png';
import MC_1 from 'assets/img/mockups/mock-1.jpg';
import MC_2 from 'assets/img/mockups/mock-2.jpg';
import MC_3 from 'assets/img/mockups/mock-3.jpg';
import MC_4 from 'assets/img/mockups/mock-4.jpg';
import MC_5 from 'assets/img/mockups/mock-5.jpg';
import JS from 'assets/img/javascript.png';
import RUBY from 'assets/img/ruby.png';
import CSS from 'assets/img/css.png';
import HTML from 'assets/img/html.png';
import POSTGRESQL from 'assets/img/postgresql.png';
import RAILS from 'assets/img/rails.png';
import REACT from 'assets/img/react.png';
import COM from 'assets/img/communication.png';
import EQ from 'assets/img/EQ.png';
import EMPATHY from 'assets/img/empathy.png';
import PROBLEM_SOLVING from 'assets/img/problem-solving.png';

export const SKILLS = {
  Languages: [
    {
      name: 'JavaScript',
      icon: JS,
    },
    {
      name: 'Ruby',
      icon: RUBY,
    },
    {
      name: 'CSS',
      icon: CSS,
    },
    {
      name: 'HTML',
      icon: HTML,
    },
    {
      name: 'PostgreSQL',
      icon: POSTGRESQL,
    },
  ],
  Frameworks: [
    {
      name: 'Rails',
      icon: RAILS,
    },
    {
      name: 'React',
      icon: REACT,
    },
  ],
  Skills: [
    {
      name: 'Communication',
      icon: COM,
    },
    {
      name: 'Emotional Intelligence',
      icon: EQ,
    },
    {
      name: 'Problem Solving',
      icon: PROBLEM_SOLVING,
    },
    {
      name: 'Empathy',
      icon: EMPATHY,
    },
  ],
};

export const PROJECTS = [
  {
    _id: 0,
    title: 'Battleship Game',
    description: 'Battleship (also Battleships or Sea Battle) is a strategy type guessing game for two players. We implemented a web version of the app where the two players are the user and his bot opponent.',
    previews: [PJ_11, PJ_12],
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Webpack',
    ],
    repoLink: 'https://github.com/stratospherique/battleship-js',
    demoLink: 'https://stratospherique.github.io/battleship-js/',
    mockView: MC_1,
  },
  {
    _id: 1,
    title: 'REMA',
    description: 'REMA is a full stack web app that enables the user to navigate through a wide variety of real estate via nice and easy to use responsive interface.',
    previews: [PJ_22, PJ_23, PJ_21],
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'React',
      'Redux',
      'Rails API',
    ],
    repoLink: 'https://github.com/stratospherique/real-estate-app',
    demoLink: 'https://real-estate-mania.netlify.app/',
    mockView: MC_2,
  },
  {
    _id: 2,
    title: 'ODIN Book',
    description: 'Odin Book is a mini blog that allows users to publish new posts about a variety of topics.',
    previews: [PJ_31, PJ_32, PJ_33],
    technologies: [
      'HTML',
      'CSS',
      'Rails',
      'Ruby',
    ],
    repoLink: 'https://github.com/stratospherique/odin-facebook',
    demoLink: 'https://desolate-badlands-67931.herokuapp.com/',
    mockView: MC_3,
  },
  {
    _id: 3,
    title: 'Weather-App-JS',
    description: 'Weather app is a web app that enables the user to get weather related info about any city in the world from reliable sources (OpenWeather API).',
    previews: [PJ_41, PJ_42, PJ_43],
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'Webpack',
      'API',
    ],
    repoLink: 'https://github.com/stratospherique/Weather-App-JS/tree/development',
    demoLink: 'https://stratospherique.github.io/Weather-App-JS/',
    mockView: MC_4,
  },
  {
    _id: 4,
    title: 'Dashboard',
    description: 'Dashboard is a web app that mimics the behaviour and the look & feel of a dashboard along with validation-enabled forms.',
    previews: [PJ_51, PJ_52, PJ_53],
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'React',
      'Redux',
    ],
    repoLink: 'https://github.com/stratospherique/Dashboard',
    demoLink: 'https://proto-dashboard.netlify.com/',
    mockView: MC_5,
  },
];

export const BREAK_POINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const theme = {
  colors: {
    primary: '#F9855B',
    secondary: '#F0F0F0',
    tertiary: '#000',
    fourth: '#423B39',
    hover: '#fff',
  },
  spacing: (val = 1) => `${val * 8}px`,
  buttons: {
    spacings: {
      small: '.5rem',
      medium: '1rem',
      large: '1.5rem',
    },
  },
  typography: {
    fontSizes: {
      xs: '.75em',
      medium: '1.5em',
      large: '2em',
      small: '1em',
    },
    spacings: {
      small: '1rem',
      medium: '1.5rem',
      large: '2rem',
    },
  },
  icons: {
    size: {
      small: 'xs',
      medium: 'sm',
      large: 'lg',
    },
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export const responsiveTypographyCSS = `
  @media and (max-width: 760px) {
    font-size: 16px;
  }
  @media and (max-width: 900px and min-width: 600px) {
    font-size: 20px;
  }
  @media and (max-width: 1279px and min-width: 960px) {
    font-size: 24px;
  }

  @media and (max-width: 1279px and min-width: 960px) {
    font-size: 32px;
  }
`;
