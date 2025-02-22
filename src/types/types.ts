export type Category = "general" | "work" | "sport" | "hobby";
export interface Task {
  name: string;
  done: boolean;
  category?: Category;
}
