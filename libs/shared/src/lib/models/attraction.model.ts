import { Category } from './category.model';
import { Link } from './link.model';
import { File } from './file.model';
import { Image } from './image.model';

export interface Attraction {
  id: number;
  name: string;
  name_zh: string;
  open_status: number;
  introduction: string;
  open_time: string;
  zipcode: string;
  distric: string;
  address: string;
  tel: string;
  fax: string;
  email: string;
  months: string;
  nlat: number;
  elong: number;
  official_site: string;
  facebook: string;
  ticket: string;
  remind: string;
  staytime: string;
  modified: string;
  url: string;
  category: Category[];
  target: Category[];
  service: Category[];
  friendly: Category[];
  images: Image[];
  files: File[];
  links: Link[];
}
