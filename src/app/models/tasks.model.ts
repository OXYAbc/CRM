export interface TasksData{
    id: number,
    name: string,
    discription: string,
    deadline: string,
    comments: [{user:string, comments: [string]}],
    check:boolean,
    level:string,
}