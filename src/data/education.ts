import RssPre from '../assets/image-ee/pre-rss.png'

export interface IEducation {
  name: string
  time: number
  class: string
  modal: {
    image: string
  }
}

export const education: Record<string, IEducation> = {
  JavaRush: {
    name: 'JavaRush : JAVA Core',
    time: 8,
    class: 'javarush',
    modal: {
      image: RssPre
    }
  },
  rssS1: {
    name: 'RS School PRE-RSS',
    time: 3,
    class: 'rss-pre',
    modal: {
      image: ''
    }
  },
  rssS2: {
    name: 'RS School : FRONT-END',
    time: 7,
    class: 'rss-front',
    modal: {
      image: ''
    }
  },
  rssReact: {
    name: 'RS School REACT',
    time: 7,
    class: 'rss-react',
    modal: {
      image: ''
    }
  },
  rssNode: {
    name: 'RS School NODE',
    time: 3,
    class: 'rss-node',
    modal: {
      image: ''
    }
  }
}