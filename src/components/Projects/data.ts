import CVImage from '../../assets/projects/cv.png'
import RSImage from '../../assets/projects/rslang.png'
import KBImage from '../../assets/projects/kanban.png'

export interface IProject {
  mainImage: string
}

export const projectData: Record<string, IProject> = {
  cv: {
    mainImage: CVImage
  },
  rslang: {
    mainImage: RSImage
  },
  kanban: {
    mainImage: KBImage
  }
}