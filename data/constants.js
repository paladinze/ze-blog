export const THEME_MODE = {
  DARK: 'dark',
  DAY: 'day',
}

export const POST_METADATA_FIELDS = [
  'title',
  'date',
  'slug',
  'tags',
  'coverImage',
  'projectLink',
  'repoLink',
  'techStackFront',
  'techStackBack',
  'techStackTools',
  'content',
  'excerpt',
  'externalLink'
];

export const TAGS = {
  ALL: 'all',
  PROJECT: 'project',
  LAB: 'lab',
  WEB3D: 'web3d',
  TOOL: 'tool'
}
export const DEFAULT_TAG = TAGS.ALL;

export const PROJECT_LINKS = [
  {
    name: 'Zefolio',
    url: 'https://shaderly.com',
    tag: TAGS.WEB3D
  },
  {
    name: 'Mirage Web3D editor',
    url: 'https://static.res.qq.com/nav/web3d/editor/index.html?w3d=https://static.res.qq.com/nav/web3d/editor/examples/beautiful-planet/app.w3d',
    tag: TAGS.WEB3D
  },
  {
    name: 'Galaxy particle simulation',
    url: 'https://galaxy-olive.vercel.app/',
    tag: TAGS.WEB3D
  },
  {
    name: 'Best of Flutter',
    url: 'https://github.com/paladinze/best-of-flutter',
    tag: TAGS.TOOL
  }, {
    name: 'ESLint Formatter Bottleneck',
    url: 'https://github.com/paladinze/eslint-formatter-bottleneck',
    tag: TAGS.TOOL
  }, {
    name: '2048 - Angel Attack',
    url: 'https://2048.shaderly.com',
    tag: TAGS.LAB
  }
]

export const FOOTER_LINKS = [{
  name: 'Home Planet',
  url: 'https://shaderly.com'
}, {
  name: 'GitHub',
  url: 'https://github.com/paladinze'
}, {
  name: 'Linkedin',
  url: 'https://www.linkedin.com/in/paladinze/'
}, {
  name: 'paladinze@hotmail.com',
  url: 'mailto:paladinze@hotmail.com'
}]

export const CONTACT_INFO = [
  {
    name: 'paladinze@hotmail.com',
    url: 'mailto:paladinze@hotmail.com'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/paladinze'
  }, {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/paladinze/'
  },
]


