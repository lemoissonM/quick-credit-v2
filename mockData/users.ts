import { v4 as uuidv4 } from 'uuid';

type User = {
    email: string;
    password: string;
    role: string;
    firstName: string;
    lastName: string;
    id: string;
}
const users: User[] = [
    {
        email: 'johndoe@email.com',
        password: '123456',
        role: 'user',
        firstName: 'John',
        lastName: 'Doe',
        id: uuidv4()
    },
    {
        email: 'johndoeadmin@email.com',
        password: '123456',
        role: 'admin',
        firstName: 'John',
        lastName: 'Doe',
        id: uuidv4()
    }
];

export const findByEmailAndPassword = (email: string, password: string) => {
    return users.find(user => user.email === email && user.password === password);
}

export const createUser = (userData: User) => {
    const user = {...userData, id: uuidv4()};
    users.push(user);
    return user;
}

export const findByID = (id: string) => {
    return users.find(user => user.id === id)
}

export const findByEmail = (email: string) => {
    return users.find(user => user.email === email);
}