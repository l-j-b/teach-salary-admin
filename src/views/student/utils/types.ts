/** 学生表单类型 */
export interface FormItemProps {
  _id?: string;
  name: string;
  gender?: string;
  avatar?: string;
  birthday?: string;
  age?: number;
  tags?: string;
  grades?: string;
  phone?: string;
  remarks?: string;
  wechart?: string;
  address?: string;
  email?: string;
  status?: number;
  groupId?: string;
}

/** 学生列表项类型 */
export interface StudentItem {
  _id: string;
  name: string;
  gender: string;
  avatar: string;
  birthday: string;
  age: number;
  tags: string;
  grades: string;
  phone: string;
  remarks: string;
  wechart: string;
  address: string;
  email: string;
  status: number;
  groupId: string;
  createTime?: string;
  updateTime?: string;
}