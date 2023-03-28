import { NextPageContext } from 'next'
import { getSession ,  signOut} from 'next-auth/react'



export async  function getServerSideProps( context : NextPageContext){
const session = await getSession(context)

if ( !session){
  return {
    redirect: {
      destination: '/auth',
      permanent: false,
    }
  }
}
return { }
}
export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Main Page 
    </h1>

    <button onClick={
      () => signOut()
    }></button>
    </>
  )
}
