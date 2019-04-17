export interface ITask {
    id: number;
    name: string;
    created_at?: string;
    due_on?: string;
    status: string;
    task_list?: number;
}

function createTask(id: number, name: string, created_at: string, due_on: string, status: string, task_list: number): ITask{
    return {
        id: id, 
        name: name, 
        created_at: created_at, 
        due_on: due_on, 
        status: status, 
        task_list: task_list
    };
}