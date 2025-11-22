export type Category = {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  nextDate: string;
  frequency?: string;
  reminders?: string[];
};
