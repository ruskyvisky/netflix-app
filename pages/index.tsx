import { NextPageContext } from 'next'
import { getSession ,  signOut} from 'next-auth/react'
import useFavorites from '../hooks/useFavorites'
import useMovieList from '../hooks/useMovieList'
import Navbar from '../components/navbar'
import Billboard from '../components/billboard'
import MovieList from '../components/movieList'
import InfoModal from '../components/infoModal'
import useInfoModalStore from '@/hooks/useInfoModelStore';

// getServerSideProps function to handle server-side rendering and authentication
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    // if user is not authenticated, redirect to the authentication page
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  // if user is authenticated, return an empty object as props
  return {
    props: {}
  }
}

// Home component
export default function Home() {
  // get movie data and favorite data using custom hooks
  const { data: movies = [] } = useMovieList()
  const { data: favorites = [] } = useFavorites()

  // use custom hook to handle information modal state
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      {/* render the information modal component */}
      <InfoModal visible={isOpen} onClose={closeModal} />
      {/* render the navbar component */}
      <Navbar />
      {/* render the billboard component */}
      <Billboard />

      <div className='pb-40'>
        {/* render the trending now movie list component */}
        <MovieList title='Trending Now' data={movies} />
        {/* render the user's favorite movie list component */}
        <MovieList title='My List' data={favorites} />
      </div>
    </>
  )
}