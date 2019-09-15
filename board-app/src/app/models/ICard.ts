import IUser from './IUser';

export default interface ICard {
    id: string,
    name: string,
    description: string,
    dueDate?: Date | string,
    assignee?: IUser,

}