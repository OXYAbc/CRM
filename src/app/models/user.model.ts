export class User {
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
    position: string;
    departament: string;
    constructor(task: {
      userId: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      emailAddress: string;
      position: string;
      departament: string;
    }) {
      this.userId = task.userId || '';
      this.firstName = task.firstName || '';
      this.lastName = task.lastName || '';
      this.emailAddress = task.emailAddress || '';
      this.phoneNumber = task.phoneNumber || '';
      this.position = task.position || '';
      this.departament = task.departament || '';
    }
  }
  export interface DbUser {
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
    position: string;
    departament: string;
  }
  