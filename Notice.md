# Generate subgraph for MasterChef on mumbai (Matic testnet)

1. 
cd sushiswap-subgraph/subgraphs/masterchef

2.
Create new config for `mumbai`

`subgraphs/masterchef/config/mumbai.json`

3.
In file `package.json`, add this new cmd

`"prepare:mumbai": "mustache config/mumbai.json template.yaml > subgraph.yaml",`

4.
Run the cmd `yarn prepare:mumbai` to generate the file `subgraph.yaml`

Log output

```
sushiswap-subgraph/subgraphs/masterchef$ yarn prepare:mumbai
yarn run v1.22.5
$ mustache config/mumbai.json template.yaml > subgraph.yaml
Done in 0.12s.
```

5.
Run the cmd `yarn codegen` to generate required things like `schema`.
The folder `generated` will show up

Log output

```
sushiswap-subgraph/subgraphs/masterchef$ yarn codegen
yarn run v1.22.5
$ graph codegen subgraph.yaml
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2 (graph-ts dependency not installed yet)
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3 (graph-ts dependency not installed yet)
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4 (graph-ts dependency not installed yet)
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Load contract ABI from ../../node_modules/@sushiswap/core/build/abi/MasterChef.json
  Load contract ABI from ../../node_modules/@sushiswap/core/build/abi/UniswapV2Factory.json
  Load contract ABI from ../../node_modules/@sushiswap/core/build/abi/UniswapV2Pair.json
  Load contract ABI from ../../node_modules/@sushiswap/core/build/abi/ERC20.json
✔ Load contract ABIs
  Generate types for contract ABI: MasterChef (../../node_modules/@sushiswap/core/build/abi/MasterChef.json)
  Write types to generated/MasterChef/MasterChef.ts
  Generate types for contract ABI: Factory (../../node_modules/@sushiswap/core/build/abi/UniswapV2Factory.json)
  Write types to generated/MasterChef/Factory.ts
  Generate types for contract ABI: Pair (../../node_modules/@sushiswap/core/build/abi/UniswapV2Pair.json)
  Write types to generated/MasterChef/Pair.ts
  Generate types for contract ABI: ERC20 (../../node_modules/@sushiswap/core/build/abi/ERC20.json)
  Write types to generated/MasterChef/ERC20.ts
✔ Generate types for contract ABIs
✔ Generate types for data source templates
✔ Load data source template ABIs
✔ Generate types for data source template ABIs
✔ Load GraphQL schema from schema.graphql
  Write types to generated/schema.ts
✔ Generate types for GraphQL schema

Types generated successfully
```

6.
Run the cmd `yarn build`

Log output

```
sushiswap-subgraph/subgraphs/masterchef$ yarn build
yarn run v1.22.5
$ graph build subgraph.yaml
  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2 (graph-ts dependency not installed yet)
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3 (graph-ts dependency not installed yet)
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4 (graph-ts dependency not installed yet)
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: MasterChef => build/MasterChef/MasterChef.wasm
✖ Failed to compile subgraph: Failed to compile data source mapping: Import file '~lib/exchange/generated/Factory/Factory.ts' not found.
```

# Generate subgraph for MiniChef on mumbai (Matic testnet)

1.
Repeat the above steps from #1 to #6

2.
Login to thegraph dashboard and create a subgraph, give it some name like `minichefMumbai`

3.
Run the cmd for `auth`. Pls use your own `key`

`graph auth --product hosted-service 62fc9c732dbc432395312a1cec862db9`

4.
Run the cmd for deploy

subgraphs/minichef

`graph deploy --product hosted-service --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ midotrung/minichefMumbai subgraph.yaml`


subgraphs/masterchef

`graph deploy --product hosted-service --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ midotrung/masterChefMumbai masterchef.yaml`


subgraphs/exchange:

`graph deploy --product hosted-service --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ midotrung/mumbaiExchange subgraph.yaml`
