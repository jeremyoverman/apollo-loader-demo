import { graphql } from '@/gql'
import { preloadQuery } from '@/utils/graphql'
import { useReadQuery } from '@apollo/client'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

const GetRickDocument = graphql(`
  query GetRick {
    characters(page: 1, filter: { name: "Rick" }) {
      results {
        id
        name
      }
    }
  }
`)

export const Route = createFileRoute('/rick')({
  component: RouteComponent,
  loader: async () => {
    // If I don't use toPromise, it works as expected but the query doesn't block
    // the loader.
    //
    // const queryRef = preloadQuery(GetRickDocument);

    const queryRef = await preloadQuery(GetRickDocument).toPromise();
    
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
      <h1>Ricks</h1>
      <ul>
        {characters?.results?.map(character => (
          <li key={character?.id}>{character?.name}</li>
        ))}
      </ul>
    </div>
  )
}
