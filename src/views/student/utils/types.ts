import { Gender, StudentGrade } from "@/api/student";

export interface FormItemProps {
  _id?: string;
  name: string;
  avatar?: string;
  grades: string;
  subjects: string[];
  hourlyfee: number;
  parentsName?: string;
  gender: Gender | string;
  birthday?: string;
  age?: number;
  phone?: string;
  tags?: string[];
  remarks?: string;
  email?: string;
  wechart?: string;
  address?: string;
}

export interface StudentItem extends FormItemProps {
  _id: string;
  userId?: string;
  createDate?: string;
  updateDate?: string;
}

export { Gender, StudentGrade };