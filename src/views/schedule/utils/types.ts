export interface FormItemProps {
  _id?: string;
  sectionId?: string;
  studentId?: string[];
  beginDateTime?: string;
  endDateTime?: string;
  hourlyfee?: number;
  status?: number;
}

export interface ScheduleItem {
  _id: string;
  sectionId?: string;
  studentId?: string[];
  status: number;
  beginDateTime: string;
  endDateTime: string;
  hourlyfee?: number;
  totalFee?: number;
  totalHour?: number;
  checkout?: number;
  checkoutId?: string;
  sectionName?: string;
  studentName?: string;
  subject?: string;
  courseId?: string;
}

export { ScheduleStatus } from "@/api/schedule";