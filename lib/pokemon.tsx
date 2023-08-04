import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonData {
    results: Pokemon[]
}

const fetchingThePokemon = async () => {
    const res = await axios.get<PokemonData>('https://pokeapi.co/api/v2/pokemon/');
    return res.data;
}

// the prefetchQuery function is used in getStaticProps for initial data fetching during server-side rendering (SSR) at build time, while the useQuery hook is responsible for cache management and handling subsequent data fetches on the client-side after hydration.
const usePokemon = () => {
    return useQuery<PokemonData>({
        queryKey: ['pokemon'],
        queryFn: fetchingThePokemon
    })
}

export default usePokemon