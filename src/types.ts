export interface Education {
    degree: string;
    school: string;
    period: string;
}


export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    demoLink: string;
    codeLink: string;
  }
  
  export interface Certification {
    title: string;
    issuer: string;
    date: string;
    image: string;
    certificateLink: string;
  }