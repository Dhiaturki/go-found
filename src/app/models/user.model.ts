export interface UserProfile {
    id: number; 
    user: User;
    desc?: string; 
    role:string;
    image?: string; 
    isActive: boolean;
  }
  
interface User {
    id:number;
    username:string;
    first_name:string;
    last_name:string;
}