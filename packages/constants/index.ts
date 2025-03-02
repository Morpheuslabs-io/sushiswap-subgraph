import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";

export const NULL_CALL_RESULT_VALUE =
  "0x0000000000000000000000000000000000000000000000000000000000000001";

export const ADDRESS_ZERO = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const BIG_DECIMAL_1E6 = BigDecimal.fromString("1e6");

export const BIG_DECIMAL_1E12 = BigDecimal.fromString("1e12");

export const BIG_DECIMAL_1E18 = BigDecimal.fromString("1e18");

export const BIG_DECIMAL_ZERO = BigDecimal.fromString("0");

export const BIG_DECIMAL_ONE = BigDecimal.fromString("1");

export const BIG_INT_ONE = BigInt.fromI32(1);

export const BIG_INT_TWO = BigInt.fromI32(2);

export const BIG_INT_ONE_HUNDRED = BigInt.fromI32(100);

export const BIG_INT_ONE_DAY_SECONDS = BigInt.fromI32(86400);

export const BIG_INT_ZERO = BigInt.fromI32(0);

export const LOCKUP_POOL_NUMBER = BigInt.fromI32(29);

export const LOCKUP_BLOCK_NUMBER = BigInt.fromI32(10959148);

export const MASTER_CHEF_START_BLOCK = BigInt.fromI32(10750000);

export const UNISWAP_SUSHI_ETH_PAIR_FIRST_LIQUDITY_BLOCK =
  BigInt.fromI32(10750005);

export const ACC_SUSHI_PRECISION = BigInt.fromString("1000000000000");

export const BENTOBOX_DEPOSIT = "deposit";

export const BENTOBOX_TRANSFER = "transfer";

export const BENTOBOX_WITHDRAW = "withdraw";

export const KASHI_PAIR_MEDIUM_RISK_TYPE = "medium";

export const PAIR_ADD_COLLATERAL = "addCollateral";

export const PAIR_REMOVE_COLLATERAL = "removeCollateral";

export const PAIR_ADD_ASSET = "addAsset";

export const PAIR_REMOVE_ASSET = "removeAsset";

export const PAIR_BORROW = "borrow";

export const PAIR_REPAY = "repay";

export const FACTORY_ADDRESS = Address.fromString("0xbE75Fc10f5209cd43403891d1Ddda09D856B730D");

export const MASTER_CHEF_ADDRESS = Address.fromString(
  "0xf575975Dfc55c6809434D37f61e0d4244E418DB9" 
);

export const MASTER_CHEF_V2_ADDRESS = Address.fromString(
  "0xef0881ec094552b2e128cf945ef17a6752b4ec5d"
);

export const SUSHI_BAR_ADDRESS = Address.fromString("0x74a077c8348c9B7AA8fc0a758A8731786a45eFC2");

export const SUSHI_MAKER_ADDRESS = Address.fromString(
  "0x6EB347023899882e9608F2eE6fC5e14cEd32dd51"
);

export const SUSHI_TOKEN_ADDRESS = Address.fromString(
  "0xc18934e3273B45f4ae807cee80beBA020B292016"
);

export const SUSHI_USDT_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const XSUSHI_USDC_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const XSUSHI_WETH_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const SUSHI_DISTRIBUTOR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const USDC_WETH_PAIR = "0x34965ba0ac2451a34a0471f04cca3f990b8dea27";

export const DAI_WETH_PAIR = "0x6ff62bfb8c12109e8000935a6de54dad83a4f39f";

export const USDT_WETH_PAIR = "0xc2755915a85c6f6c1c0f3a86ac8c058f11caa9c9";

export const SUSHI_USDT_PAIR = "0x0000000000000000000000000000000000000000";

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString(
  "3000"
);

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString(
  "1000"
);

export const WETH_ADDRESS = Address.fromString("0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa");

export const SUSHISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const USDT_ADDRESS = Address.fromString("0x0000000000000000000000000000000000000000");

export const UNISWAP_FACTORY_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const UNISWAP_WETH_USDT_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const UNISWAP_SUSHI_ETH_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const UNISWAP_SUSHI_USDT_PAIR_ADDRESS = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

// Bentobox constants
export const BENTOBOX_ADDRESS = Address.fromString("0xF5BCE5077908a1b7370B9ae04AdC565EBd643966");

export const KASHI_PAIR_MEDIUM_RISK_MASTER_ADDRESS = Address.fromString(
  "0x2cba6ab6574646badc84f0544d05059e57a5dc42"
);

// MiniChef
export const MINI_CHEF_ADDRESS = Address.fromString("0xa8D2552cA4e4e9Ec6464F2c481EC4d1f20552068");

export const COMPLEX_REWARDER = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const CONVEX_REWARDERS: Array<Address> = [Address.fromString('0x9e01aac4b3e8781a85b21d9d9f848e72af77b362'), Address.fromString('0x1fd97b5e5a257b0b9b9a42a96bb8870cbdd1eb79')]

export const ALCX_REWARDER = Address.fromString('0x7519c93fc5073e15d89131fd38118d73a72370f8')

export const NATIVE = Address.fromString("0x5B67676a984807a212b1c59eBFc9B3568a474F0a");

export const USDC = "0x0000000000000000000000000000000000000000";

export const USDT = "0x0000000000000000000000000000000000000000";

export const DAI = "0x0000000000000000000000000000000000000000";

export const WHITELIST: string[] = "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619,0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270,0x2791bca1f2de4661ed88a30c99a7a9449aa84174,0x8f3cf7ad23cd3cadbd9735aff958023239c6a063,0xc2132d05d31c914a87c6611c10748aeb04b58e8f,0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6,0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a,0xd6df932a45c0f255f85145f286ea0b292b21c90b,0x104592a158490a9228070e0a8e5343b499e125d0".split(",");

// export const WHITELIST: string[] = [
//   "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a", 
//   "0x6983d1e6def3690c4d616b13597a09e6193ea013", 
//   "0x3095c7557bcb296ccc6e363de01b760ba031f2d9", 
//   "0x985458e523db3d53125813ed68c274899e9dfab4", 
//   "0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f", 
//   "0xe176ebe47d621b984a73036b9da5d834411ef734",
// ]

// export const WHITELIST: string[] = [
//   "0x471ece3750da237f93b8e339c536989b8978a438",
//   "0xd629eb00deced2a080b7ec630ef6ac117e614f1b",
//   "0x765de816845861e75a25fca122bb6898b8b1282a",
//   "0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73"
// ];

const CUSTOM_BASES = new Map<string,string>();