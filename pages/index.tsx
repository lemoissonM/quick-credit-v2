import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getUserAndRedirect } from '../utils/getUser';


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    getUserAndRedirect(router);
  })
  return (
    <p>Loading</p>
  )
}
