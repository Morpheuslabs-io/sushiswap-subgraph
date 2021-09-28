# Generate subgraph for "exchange" on mumbai (Matic testnet)

1. cd in the root folder
cd sushiswap-subgraph

2. 
check config file `config/mumbai.json`

3. take config into account
yarn prepare:mumbai

4. generate code
yarn codegen

5. build code
yarn build

6. cd in the `exchange` subgraph folder
cd subgraphs/exchange

7.
Login to thegraph dashboard and create a subgraph, give it some name like `mumbaiExchange`

8.
Run the cmd for `auth`. Pls use your own `key`

`graph auth --product hosted-service 62fc9c732dbc432395312a1cec862db9`

9. deploy subgraph

`graph deploy --product hosted-service --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ midotrung/mumbaiExchange subgraph.yaml`

**Notice**
If the `mumbaiexchange` subgraph is not updated on thegraph dashboard, then head to deploy the 
`minichef` subgraph and then deploy again the `mumbaiexchange`


# Generate subgraph for "minichef" on mumbai (Matic testnet)

1. 
cd sushiswap-subgraph/subgraphs/minichef

2.
Create or check new config for `mumbai`

`subgraphs/minichef/config/mumbai.json`

3.
In file `package.json`, add this new cmd

`"prepare:mumbai": "mustache config/mumbai.json template.yaml > subgraph.yaml",`

4.
Run the cmd `yarn prepare:mumbai` to generate the file `subgraph.yaml`

5.
Run the cmd `yarn codegen` to generate required things like `schema`.
The folder `generated` will show up

6.
Run the cmd `yarn build`

7.
Login to thegraph dashboard and create a subgraph, give it some name like `minichefMumbai`

8.
Run the cmd for `auth`. Pls use your own `key`

`graph auth --product hosted-service 62fc9c732dbc432395312a1cec862db9`

9.
Run the cmd for deploy

subgraphs/minichef

`graph deploy --product hosted-service --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ midotrung/minichefMumbai subgraph.yaml`


subgraphs/masterchef

`graph deploy --product hosted-service --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ midotrung/masterChefMumbai subgraph.yaml`

------------------

ISSUE

`packages/constants/index.ts`

```
export const MASTER_CHEF_START_BLOCK = BigInt.fromI32(17953262);
```