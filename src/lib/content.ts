import type {
  AchievementsData,
  CertificatesData,
  ContactData,
  EducationData,
  ExperienceData,
  GitHubConfig,
  LearningData,
  NavigationData,
  Profile,
  ProjectData,
  ResumeData,
  SkillsData,
  SocialLinks,
} from '@/types/content';

import profileJson from '../../content/profile.json';
import experienceJson from '../../content/experience.json';
import skillsJson from '../../content/skills.json';
import achievementsJson from '../../content/achievements.json';
import certificatesJson from '../../content/certificates.json';
import socialJson from '../../content/social.json';
import contactJson from '../../content/contact.json';
import githubJson from '../../content/github.json';
import resumeJson from '../../content/resume.json';
import educationJson from '../../content/education.json';
import learningJson from '../../content/learning.json';
import navigationJson from '../../content/navigation.json';

const projectModules = import.meta.glob('../../content/projects/*/project.json', {
  eager: true,
}) as Record<string, { default: ProjectData }>;

export function getProfile(): Profile {
  return profileJson as Profile;
}

export function getExperience(): ExperienceData {
  return experienceJson as ExperienceData;
}

export function getEducation(): EducationData {
  return educationJson as EducationData;
}

export function getLearning(): LearningData {
  return learningJson as LearningData;
}

export function getNavigation(): NavigationData {
  return navigationJson as NavigationData;
}

export function getSkills(): SkillsData {
  return skillsJson as SkillsData;
}

export function getAchievements(): AchievementsData {
  return achievementsJson as AchievementsData;
}

export function getCertificates(): CertificatesData {
  return certificatesJson as CertificatesData;
}

export function getSocial(): SocialLinks {
  return socialJson as SocialLinks;
}

export function getContact(): ContactData {
  return contactJson as ContactData;
}

export function getGitHubConfig(): GitHubConfig {
  return githubJson as GitHubConfig;
}

export function getResume(): ResumeData {
  return resumeJson as ResumeData;
}

export function getProjects(): ProjectData[] {
  return Object.values(projectModules)
    .map((mod) => mod.default)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return getProjects().find((project) => project.slug === slug);
}

/**
 * Calculates verified dynamic stats based on actual content collections.
 */
export function getCalculatedStats() {
  const projects = getProjects();
  const skills = getSkills();
  const certificates = getCertificates();

  const totalSkills = skills.categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  const iotProjects = projects.filter((p) => p.category === 'IoT / Embedded').length;

  return [
    { value: `${projects.length}`, label: 'Featured Projects' },
    { value: `${totalSkills}+`, label: 'Core Technologies' },
    { value: `${iotProjects}`, label: 'IoT Projects' },
    { value: `${certificates.items.length}`, label: 'Certificates' },
  ];
}
