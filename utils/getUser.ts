export const getUserAndRedirect = async (router) => {
    const userString = localStorage.getItem('user');
    if(userString) {
      const user = JSON.parse(userString);
      if(user.role === 'admin') router.push('/dashboard');
      else router.push('/home');
    } else {
      router.push('/auth/login')
    }
}

export const getUser = () => {
    const userString = localStorage.getItem('user');
    if(userString) {
      const user = JSON.parse(userString);
      return user;
    }
    return null;
}

export const logout = (router) => {
    localStorage.clear();
    router.push('/');
}