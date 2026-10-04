import { describe, it, expect } from 'vitest';
import {
  getProfile,
  getProjects,
  getSkills,
  getCalculatedStats,
} from '@/lib/content';

describe('Content System', () => {
  it('should load profile data correctly', () => {
    const profile = getProfile();
    expect(profile).toBeDefined();
    expect(profile.name).toBe('Ahmed Abdelhalim');
    expect(profile.title).toContain('Frontend Developer');
  });

  it('should load project case studies', () => {
    const projects = getProjects();
    expect(projects.length).toBeGreaterThan(0);
    const collegePlatform = projects.find((p) => p.slug === 'college-platform');
    expect(collegePlatform).toBeDefined();
    expect(collegePlatform?.title).toBe('College Student Helper Platform');
  });

  it('should load skill categories and items', () => {
    const skills = getSkills();
    expect(skills.categories.length).toBeGreaterThan(0);
    const frontendCategory = skills.categories.find((c) => c.id === 'frontend');
    expect(frontendCategory).toBeDefined();
  });

  it('should compute dynamic profile statistics', () => {
    const stats = getCalculatedStats();
    expect(stats.length).toBe(4);
    expect(stats[0].label).toBe('Featured Projects');
  });
});
