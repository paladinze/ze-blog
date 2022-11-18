export const META_HOME_TITLE = 'Ze Cheng'
export const META_POST_TITLE_SUFFIX = ' | Ze Blog'
export const META_HOME_DESCRIPTION = 'A portfolio of Ze Cheng\'s thoughts, stories and dreams.'
export const POST_DETAIL_SIGNATURE_TEXT = 'ZE.'

export const DB_CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.${process.env.MONGODB_DB}.mongodb.net/?retryWrites=true&w=majority`;

export const PLATFORMS = {
  'DESKTOP': 'desktop'
}

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
  'platforms',
  'content',
  'excerpt',
  'externalLink'
];

export const TAGS = {
  ALL: 'all',
  PROJECT: 'project',
  LAB: 'lab',
  WEB3D: 'web3d',
  WEBAPP: 'webapp',
  TOOL: 'tool'
}
export const DEFAULT_TAG = TAGS.ALL;

export const PROJECT_LINKS = [
  {
    name: 'Zefolio',
    url: 'posts/zefolio',
    tag: TAGS.WEB3D
  },
  {
    name: 'Mirage Web3D editor',
    url: 'posts/web3d-editor',
    tag: TAGS.WEB3D
  },
  {
    name: 'Rigid body collision',
    url: 'posts/rigid-body-collisions',
    tag: TAGS.WEB3D
  },
  {
    name: 'Galaxy particle simulation',
    url: 'posts/galaxy',
    tag: TAGS.WEB3D
  }, {
    name: 'QQ Browser Mobile',
    url: 'posts/qq-browser',
    tag: TAGS.WEBAPP
  }, {
    name: 'Best of Flutter',
    url: 'posts/best-of-flutter',
    tag: TAGS.WEBAPP
  }, {
    name: 'Course Review App',
    url: 'posts/huoshui-course-review',
    tag: TAGS.WEBAPP
  }, {
    name: 'ESLint Formatter Bottleneck',
    url: 'posts/eslint-bottleneck-formatter',
    tag: TAGS.TOOL
  }, {
    name: 'Perlin Noise shader',
    url: 'posts/perlin-noise',
    tag: TAGS.LAB
  }, {
    name: 'Digital Farming App',
    url: 'posts/digital-farming.md',
    tag: TAGS.WEBAPP
  }, {
    name: 'StartCraft Distortion Shader',
    url: 'posts/starcraft-shader.md',
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


