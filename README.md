# Reproduction Example For Apollo Client Loader Bug

See [apollographql/apollo-client #12619](https://github.com/apollographql/apollo-client/issues/12619) for more details.

## Getting Started

```shell
git clone https://github.com/jeremyoerman/apollo-loader-demo.git
cd apollo-loader-demo
npm install
npm run dev
```

## Reproduction Steps

1. Navigate to either `Rick` or `Morty`
2. Notice the `Expected a QueryRef object, but got something else instead.` error
3. Check the console to see the incorrect value of `queryRef from component`
4. Refresh the page, notice it loads as expected