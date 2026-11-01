export type Language = 'ar' | 'en';

export interface ProjectItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  overview: string;
  overviewEn: string;
  url: string;
  tags: string[];
  gradient: string;
  stats: {
    label: string;
    labelEn: string;
    value: string;
  }[];
  features: {
    ar: string[];
    en: string[];
  };
  imageType: 'hotel' | 'real-estate' | 'perfume';
}

export interface SkillItem {
  name: string;
  nameEn: string;
  category: 'core' | 'architecture' | 'solutions';
  categoryAr: string;
  categoryEn: string;
  level: number;
  highlight: string;
  highlightEn: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  points: {
    ar: string[];
    en: string[];
  };
  icon: string;
}
