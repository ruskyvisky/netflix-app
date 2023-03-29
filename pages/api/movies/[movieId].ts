import { NextApiRequest , NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
      }

      try {
        await serverAuth(req);

        const { movieId } = req.query;

        if(typeof movieId !== 'string') {
          return res.status(400).end();
        }
        if(!movieId) {
          return res.status(400).end();
        }
        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        })
        if(!movie) {
            return res.status(404).end();
        }
        return res.status(200).json(movie);
        
      } catch (error) {
        
      }
}