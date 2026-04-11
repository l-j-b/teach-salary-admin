/** 课程表单类型 */
export interface FormItemProps {
  id?: string;
  name: string;
  content?: string;
  studentId?: string[];
  remark?: string;
  status?: string;
  dataStatus?: string;
}

/** 课程列表项类型 */
export interface CourseItem {
  id: string;
  name: string;
  content: string;
  studentId: string[];
  remark: string;
  status: string;
  dataStatus: string;
  createTime?: string;
  updateTime?: string;
}