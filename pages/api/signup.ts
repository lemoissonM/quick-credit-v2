import { createUser, findByEmail} from '../../mockData/users';

export default function handler({ body }, res) {
    const user = findByEmail(body.email);
    if(user) return res.status(403).json({message: 'Email already exist'});
    const userData = createUser(body);
    return res.status(200).json(userData)
}