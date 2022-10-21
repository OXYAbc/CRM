export class Project {
  id: string;
  name: string;
  people: string[];
  description: string;
  level: string;
  time: string;
  tasks: Task[];

  constructor(project: {
    id: string;
    name: string;
    people: string[];
    description: string;
    level: string;
    time: string;
    tasks: {
      title: string;
      description: string;
      score: number;
      stage: string;
    }[];
  }) {
    this.id = project.id || '';
    this.name = project.name || '';
    this.people = project.people || '';
    this.description = project.description || '';
    this.level = project.level || '';
    this.time = project.time || '';
    this.tasks = this.mapTasks(project.tasks);
  }
  private mapTasks(
    tasks: {
      title: string;
      description: string;
      score: number;
      stage: string;
    }[]
  ) {
    return (
      tasks?.map((task) => {
        return new Task(task);
      }) || []
    );
  }
}
export interface DbProject {
  id: string;
  name: string;
  people: [string];
  description: string;
  level: string;
  time: string;
}
export class Task {
  public title: string;
  public description: string;
  public score: number;
  public stage: string;
  constructor(singleTask: {
    title: string;
    description: string;
    score: number;
    stage: string;
  }) {
    this.title = singleTask.title || '';
    this.description = singleTask.description || '';
    this.stage = singleTask.stage || '';
    this.score = singleTask.score || 0;
  }
}
