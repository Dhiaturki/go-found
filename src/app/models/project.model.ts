import { UserProfile } from "./user.model";

export interface Project {
  id: number;
  creator: UserProfile;
  title: string;
  category: string;
  description: string;
  goal_amount: number;
  raised_amount: number;
  website_link?: string;
  isActive: boolean;
  image?: Image[];
  commentary?: Commentary[];
  investments?: Investment[];
}

export interface Investment {
  id: number;
  investor: UserProfile;
  project: string;
  amount: number;
  created_at: string;
}

export interface Commentary {
  id: number;
  project: string;
  user: UserProfile;
  text: string;
  created_at: string;
  image?: string; 
}

export interface Image {
  id: number;
  project: string; 
  image: string; 
}
