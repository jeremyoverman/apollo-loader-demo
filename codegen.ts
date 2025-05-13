import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: "https://rickandmortyapi.com/graphql",
   documents: ['src/**/*.tsx'],
   generates: {
      './src/gql/': {
        preset: 'client',
        config: {
          useTypeImports: true,
        },
      }
   }
}
export default config