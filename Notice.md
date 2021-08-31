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
Error: Failed to compile data source mapping: Import file '~lib/exchange/generated/Factory/Factory.ts' not found.
```


Log output

```
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmWgFozVQjSwTkQsUKedYVbhNJR6Vgxzdcphq67bwoSCgL
  Add file to IPFS build/MiniChef/packages/abis/MiniChef.json
                .. QmejR9EoUqpeyPgoD1vwP5KGw4F1enDF2XPby8rQETjzqE
  Add file to IPFS node_modules/@sushiswap/core/build/abi/UniswapV2Factory.json
                .. QmTuHPfzf8mbRksxjJpUMdszZ9YLZySQQVAs5jJnwcqbCH
  Add file to IPFS node_modules/@sushiswap/core/build/abi/UniswapV2Pair.json
                .. QmVduuKWkyu5XccFMDFxXkrNU6ZqFQp6RMDHsb9pXDeXoR
  Add file to IPFS node_modules/@sushiswap/core/build/abi/ERC20.json
                .. QmTbFuUNTTEkRVQZPUofpbCofEVRniQhdzy2LZWn6vZL8i
  Add file to IPFS build/MiniChef/MiniChef.wasm
                .. QmaEAAgouPAvJdrCTAxoJbb2PrVqpjN8dhFrpD79vqynRT
  Add file to IPFS build/ComplexRewarderTime/packages/abis/ComplexRewarderTime.json
                .. QmeX1KJPhLMvmtAKbLDJ8GuVVCeeQFmdiY6Kbz2LQftFze
  Add file to IPFS build/templates/ComplexRewarderTime/ComplexRewarderTime.wasm
                .. QmSLhkfdTYAXjPqvYpVQELNBFcAsGskfSwULa8R6PXBzcB
✔ Upload subgraph to IPFS

Build completed: QmXmeewUEMH7oz6X2gJRzWs1ffKrm9oFaMbc1SCgQFaX7s

✖ Failed to deploy to Graph node https://api.thegraph.com/deploy/: Invalid account name or access token
error Command failed with exit code 1.

```