export interface ProfileStat {
  value: string;
  label: string;
}

export interface HeroCta {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface ProfileAbout {
  journey: string[];
  goal: string;
  currentlyLearning: string[];
  hobbies: string[];
}

export interface Profile {
  name: string;
  title: string;
  headline?: string;
  biography: string;
  location: string;
  country?: string;
  email: string;
  phone: string;
  education: string[];
  availability: string[];
  profilePhoto: string;
  resumeUrl: string;
  stats: ProfileStat[];
  heroCtas: HeroCta[];
  about: ProfileAbout;
}

export interface ExperienceItem {
  id: string;
  category?: string;
  title: string;
  company: string;
  location?: string;
  duration: string;
  role?: string;
  description?: string;
  highlights: string[];
}

export interface ExperienceData {
  items: ExperienceItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  startDate?: string;
  expectedGraduation?: string;
  status?: string;
  relevantCoursework?: string[];
  achievements?: string[];
}

export interface EducationData {
  items: EducationItem[];
}

export interface SkillItem {
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  experience?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  description?: string;
  skills: (string | SkillItem)[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface AchievementItem {
  id: string;
  title: string;
  description?: string;
}

export interface AchievementsData {
  items: AchievementItem[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface TestimonialsData {
  items: TestimonialItem[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  previewImage?: string;
  verificationUrl?: string;
  pdfUrl?: string;
  description?: string;
}

export interface CertificatesData {
  items: CertificateItem[];
}

export interface LearningItem {
  id: string;
  technology: string;
  category?: string;
  description: string;
  progress?: string;
  startedDate?: string;
  resources?: string[];
}

export interface LearningData {
  items: LearningItem[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  medium?: string;
  x?: string;
  devto?: string;
  stackoverflow?: string;
  youtube?: string;
  whatsapp?: string;
  dribbble?: string;
  [key: string]: string | undefined;
}

export interface ContactFormConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface ContactData {
  heading: string;
  subheading: string;
  email: string;
  phone: string;
  location: string;
  availability: string[];
  responseTime: string;
  links: SocialLinks;
  form: ContactFormConfig;
}

export interface NavItem {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface NavigationData {
  mainNav: NavItem[];
  actionNav: NavItem[];
}

export interface GitHubConfig {
  username: string;
  apiEnabled: boolean;
  tokenEnvVar: string;
  repoCount: number;
}

export interface ResumeSectionItem {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  highlights?: string[];
}

export interface ResumeSection {
  id: string;
  title: string;
  items: ResumeSectionItem[];
}

export interface ResumeData {
  summary: string;
  sections: ResumeSection[];
}

export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
}

export interface ProjectMedia {
  heroImage?: string;
  gallery?: string[];
  laptopMockup?: string;
  desktopMockup?: string;
  mobileMockup?: string;
  videoDemo?: string;
}

export interface ProjectDiagrams {
  architecture?: string;
  database?: string;
  folderStructure?: string;
  apiDocumentation?: string;
  authenticationFlow?: string;
}

export interface ProjectContent {
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  lessonsLearned?: string[];
  futureImprovements?: string[];
  performanceMetrics?: { label: string; value: string }[];
}

export interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  status: string;
  featured?: boolean;
  role?: string;
  category?: string;
  year?: string;
  duration?: string;
  teamSize?: string;
  coverImage?: string;
  techStack: string[];
  highlights: string[];
  links: ProjectLinks;
  media: ProjectMedia;
  diagrams: ProjectDiagrams;
  content: ProjectContent;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  published: boolean;
  readTime?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
