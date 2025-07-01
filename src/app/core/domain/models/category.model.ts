import { CategoryColors } from '../types/category-colors';

export interface Category {
  id: string;
  name: string;
  color?: CategoryColors;
  icon?: string;
}
