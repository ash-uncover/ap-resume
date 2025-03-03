interface ModelResume {
  firstname: string
  lastname: string
  birthdate: string
  nationality: string
  title: string
  description: string
  contact: {
    phone: string
    email: string
    address: string
  }
  social: {
    linkedin?: string
    facebook?: string
    instagram?: string
    codingame?: string
    stackoverflow?: string
    github?: string
  }
  experience: ModelResumeExperience[]
  expertise: ModelResumeExpertise[]
  education: ModelResumeEducation[]
  langages: ModelResumeLangage[]
  hobbies: ModelResumeHobby[]
}

interface ModelResumeExpertise {
  name: string
  description: string
}

interface ModelResumeEducation {
  startdate: string
  enddate: string
  school: string
  diploma?: string
  description?: string
  skills?: string[]
}

interface ModelResumeExperience {
  startdate: string
  enddate: string
  company: string
  jobtitle?: string
  description?: string
  skills?: string[]
}

interface ModelResumeLangage {
  lang: string
  icon?: string
  skill: string
}

interface ModelResumeHobby {
  name: string
  icon?: string
  description?: string
}