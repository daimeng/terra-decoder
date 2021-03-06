const { marshalTx, unmarshalTx, bytesToBase64 } = require('./amino.js');

// Only marshalTx and umarshalTx tested so far.
// Other functions seem to have some kind of version mismatch.
const METHODS = {
  unmarshalTx(txs, lengthPrefixed = true) {
    return txs.map(tx => {
      try {
        return unmarshalTx(Buffer.from(tx, 'base64'), lengthPrefixed);
      } catch (e) {
        console.error(e);
      }
    })
  },
  marshalTx(txData, lengthPrefixed = true) {
    return bytesToBase64(marshalTx(JSON.parse(txData), lengthPrefixed));
  }
}

function run(cmd, ...args) {
  const fn = METHODS[cmd];
  if (fn == null) {
    console.error(`Function call not found: ${cmd}`);
    return 1;
  }

  try {
    const result = fn(args);
    console.log(
      JSON.stringify(result, null, 2)
    );
  } catch (e) {
    console.log(e);
    return 1;
  }
  return 0;
}

// Example: unmarshalTx yAXGwQI/CuQDlNtAvgoENWY2NBKrAzE5LjY4MjQ0MTU2NDc4NzM0MjUwOXVhdWQsMTguNTI3MDkwNDk5OTE1MDQxNTMxdWNhZCwxMy43ODc1ODQwMzc1NjIwNTE3Njd1Y2hmLDk4LjU5ODI1NzQyMDc1MDQyNDU3dWNueSwxMi42MTE1NTA5MzkyODEzMzU3NjZ1ZXVyLDEwLjg0NTU1MDY0ODk3NTMzMDE4NHVnYnAsMTE4Ljk4MTM4NDI5MTEyMDA5MDYxMnVoa2QsMTEyMi41NjE2NzQxNTQyNjQwODc5MDV1aW5yLDE2NzUuMzkxNjkyODMzNTY3OTM0NTYydWpweSwxOTI0MS41ODgzNTk3ODY0OTI0MDIzMzJ1a3J3LDQzNjc3LjQwMzAzMDUyODg0NzUzOTIzOHVtbnQsMTAuNjU0MDQwMDg0MTI3Njg4Mzc0dXNkciwxMjcuNjkzNjc5MzgyMDg4MTU5MDk2dXNlaywyMC4zODQzMDIxMTkyMjM3NDY5NDJ1c2dkLDQ4MC4zMDA0NTA4NjY5MDk1MDg3NzR1dGhiLDE1LjMwMzI3Mzk2MDMzMDcyMTY4M3V1c2QaFG8TmzmEVgj7dH54iE2lMrwyXDy/IhQt0/GXpD8gA0DbqIQ4GSSJheuHVgpGFTRibQoUhpwN82lD53PUOL8k4sm4/T1QuV4SFG8TmzmEVgj7dH54iE2lMrwyXDy/GhQt0/GXpD8gA0DbqIQ4GSSJheuHVhIEEMCaDBpqCibrWumHIQKNc2H+DSFquZb/m3ksrc4QBVP8fb52HbrkycjpLRPumBJATX17EkBUoP+MFZt9QBNq9NIaIWU+eeE4fWU2UcyLtNNIpQM14sgtH/HWK6DDNvRY9Ry6PimpDsqTNyBwRx4y5CIhQHRlcnJhLW1vbmV5L29yYWNsZS1mZWVkZXJAMS4zLjEx
const args = process.argv.slice(2);

process.exit(run(...args));
