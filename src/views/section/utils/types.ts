import { SectionStatus } from "@/api/section";

export interface FormItemProps {
  _id?: string;
  name?: string;
  courseId?: string;
  courseName?: string;
  studentId?: string[];
  studentName?: string;
  beginDateTime?: string;
  endDateTime?: string;
  hourlyfee?: number;
  totalHours?: number;
  totalFee?: number;
  status?: SectionStatus | number;
  remark?: string;
  notes?: string;
}

export interface SectionItem {
  _id: string;
  name?: string;
  courseId?: string;
  courseName?: string;
  studentId?: string[];
  studentName?: string;
  beginDateTime?: string;
  endDateTime?: string;
  hourlyfee?: number;
  totalHours?: number;
  totalFee?: number;
  status?: SectionStatus | number;
  remark?: string;
  notes?: string;
  createDate?: string;
  updateDate?: string;
}

export { SectionStatus };
