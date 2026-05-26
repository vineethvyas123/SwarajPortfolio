export interface MetricCard {
  value: string;
  label: string;
}

export interface JobExperience {
  id: string;
  startDate: string;
  endDate: string;
  location: string;
  role: string;
  company: string;
  bullets: string[];
}

export interface ProjectInitiative {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  impact: string;
  tags: string[];
}

export interface AchievementItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface EducationItem {
  id: string;
  badge: string;
  degree: string;
  institution: string;
  year: string;
  note: string;
}
