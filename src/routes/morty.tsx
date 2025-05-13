import { graphql } from '@/gql';
import { preloadQuery } from '@/utils/graphql';
import { useReadQuery } from '@apollo/client'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

const GetMortyDocument = graphql(`
  query GetMorty {
    characters(page: 1, filter: { name: "Morty" }) {
      results {
        id
        name
      }
    }
  }
`)

export const Route = createFileRoute('/morty')({
  component: RouteComponent,
  loader: async () => {
    // If I don't use toPromise, it works as expected but the query doesn't block
    // the loader.
    //
    // const queryRef = preloadQuery(GetMortyDocument);

    const queryRef = await preloadQuery(GetMortyDocument).toPromise();
    
    // Looks correct even when navigating pages
    console.log('queryRef from loader', queryRef);
    
    return queryRef;
  }
})

function RouteComponent() {
  const queryRef = useLoaderData({ from: Route.id })

  // Missing internal refs when navigating pages (but not on refresh)
  console.log('queryRef from component', queryRef)

  const { data: { characters }} = useReadQuery(queryRef);

  return (
    <div>
      <h1>Mortys</h1>
      <ul>
        {characters?.results?.map(character => (
          <li key={character?.id}>{character?.name}</li>
        ))}
      </ul>
    </div>
  )
}
