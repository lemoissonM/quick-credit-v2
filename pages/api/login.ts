import { findByEmailAndPassword } from '../../mockData/users';

export default function handler({body: {email, password : providedPassword}}, res) {
    const user = findByEmailAndPassword(email, providedPassword);
    if(user) { 
        const {password, ...userData} = user;
        return res.status(200).json(userData)
    }
    return res.status(401).json({message: 'Wrong credentials'})
}


