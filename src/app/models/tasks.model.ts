export interface TasksData {
  id: string;
  name: string;
  discription: string;
  deadline: string;
  comments: [{ user: string; comments: [string] }];
  check: boolean;
  level: string;
}
