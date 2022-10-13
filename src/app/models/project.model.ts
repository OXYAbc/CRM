export class Project {
  id: string;
  name: string;
  people: [string];
  discription: string;
  level: string;
  time: string;

  constructor(project: {
    id: string;
    name: string;
    people: [string];
    discription: string;
    level: string;
    time: string;
  }) {
    this.id = project.id || '';
    this.name = project.name || '';
    this.people = project.people || [''];
    this.discription = project.discription || '';
    this.level = project.level || '';
    this.time = project.time || '';
  }
}
export interface DbProject {
  id: string;
  name: string;
  people: [string];
  discription: string;
  level: string;
  time: string;
}
