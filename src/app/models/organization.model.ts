import { Project } from './projects.model';
import { Task } from './tasks.model';
import { User } from './user.model';

export class Organization {
  name: string;
  description: string;
  sector: string
  projects: Project;
  tasks: Task;
  users: User;

  constructor(organization: {
    name: string;
    description: string;
    projects: Project;
    tasks: Task;
    users: User;
    sector: string
  }) {
    this.name = organization.name || '';
    this.description = organization.description || '';
    this.sector = organization.sector || ''
    this.projects = organization.projects || null;
    this.tasks = organization.tasks || null;
    this.users = organization.users || null
  }
}
