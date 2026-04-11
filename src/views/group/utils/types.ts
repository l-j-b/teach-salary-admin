/** 分组表单类型 */
export interface FormItemProps {
  _id?: string;
  sort?: number;
  name: string;
  remark?: string;
}

/** 分组列表项类型 */
export interface GroupItem {
  _id: string;
  sort: number;
  name: string;
  remark: string;
  createTime?: string;
  updateTime?: string;
}
