import { CheckoutStatus } from "@/api/checkout";

export interface FormItemProps {
  _id?: string;
  title?: string;
  type?: string;
  totalFee?: number;
  totalHour?: number;
  beginDateTime?: string;
  endDateTime?: string;
}

export interface CheckoutItem {
  _id: string;
  title?: string;
  type?: string;
  totalFee?: number;
  totalHour?: number;
  beginDateTime?: string;
  endDateTime?: string;
  createDateTime?: string;
  status?: CheckoutStatus;
}

export { CheckoutStatus };
