export interface TasksData{
    name: string,
    discription: string,
    deadline: string
    comments: [{user:string, comments: [string]}]
}