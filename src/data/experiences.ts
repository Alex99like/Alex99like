export interface IExperiences {
  company: string
  jobTitle: string
  class: string
}

export const experiences: Record<string, IExperiences> = {
  nursoft: { 
    company: 'NurSoft',
    jobTitle: 'FRONT-END',
    class: 'nursoft'
  },
  freelanceOne: { 
    company: 'FREELANCE',
    jobTitle: 'FRONT-END',
    class: 'freelance'
  },
  freshBerry: { 
    company: 'FRESH BERRY',
    jobTitle: 'FRONT-END',
    class: 'freshberry'
  },
  rss: { 
    company: 'RS School',
    jobTitle: 'INTERN',
    class: 'rss'
  },
  freelanceTwo: { 
    company: 'FREELANCE',
    jobTitle: 'FULL-STACK',
    class: 'freelance-two'
  },
  realtor: { 
    company: 'Realtor PL',
    jobTitle: 'FULL-STACK',
    class: 'realtor'
  }
}