interface Resume {
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
  expertise: ResumeExpertise[]
  education: ResumeEducation[]
  experience: ResumeExperience[]
  langages: ResumeLangage[]
  social: ResumeSocial[]
  hobbies: ResumeHobby[]
}

interface ResumeSocial {
  name: string
  link: string
}

interface ResumeExpertise {
  name: string
  description: string
}

interface ResumeEducation {
  startdate: string
  enddate: string
  school: string
  diploma: string
  description: string
  skills: string[]
}

interface ResumeExperience {
  startdate: string
  enddate: string
  company: string
  jobtitle: string
  description: string
  skills: string[]
}

interface ResumeLangage {
  lang: string
  skill: string
}

interface ResumeHobby {
  name: string
  description: string
}