export class Task {
  id: string;
  name: string;
  description: string;
  deadline: string;
  comments: Comment[];
  check: boolean;
  level: string;
  added: string;
  userId: string;

  constructor(task: {
    id: string;
    name: string;
    description: string;
    deadline: string;
    comments: { user: string; comment: string }[];
    check: boolean;
    level: string;
    added: string;
    userId: string;
  }) {
    this.id = task.id || '';
    this.name = task.name || '';
    this.description = task.description || '';
    this.deadline = task.deadline || '';
    this.comments = this.mapComments(task.comments);
    this.check = task.check || false;
    this.level = task.level || '';
    this.added = task.added || '';
    this.userId = task.userId || '';
  }
  private mapComments(comments: { user: string; comment: string }[]) {
    return (
      comments?.map((comment) => {
        return new Comment(comment);
      }) || []
    );
  }
}
export class Comment {
  public user: string;
  public comment: string;

  constructor(singleComment: { user: string; comment: string }) {
    this.user = singleComment.user || '';
    this.comment = singleComment.comment || '';
  }
}
export interface DbTask {
  id: string;
  name: string;
  description: string;
  deadline: string;
  comments: { user: string; comment: string }[];
  check: boolean;
  level: string;
}
