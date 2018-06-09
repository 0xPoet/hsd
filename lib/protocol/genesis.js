// Autogenerated, do not edit.

'use strict';

const data = require('./genesis-data.json');
const genesis = exports;

/*
 * Main
 */

genesis.main = {
  version: 0,
  hash: '3fc37b7093486d77b852515eecd1c2cdb0a07b24dfe60679d3b2d8e8a5fa8aec',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '234027cdac5eb6e34191bc3976fcc5cd3a211c1f46ce5206b178c7e84e0658b9',
  witnessRoot:
    '8de0a4308cbfb63bc01cfa323cce5b20be659a08c08f85ecc3868a05d694f4ff',
  treeRoot:
    '0000000000000000000000000000000000000000000000000000000000000000',
  reservedRoot:
    '0000000000000000000000000000000000000000000000000000000000000000',
  time: 1514765688,
  bits: 0x1f07ffff,
  nonce: Buffer.from('0000000000000000000000000000000000000000', 'hex'),
  solution: new Uint32Array([
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000
  ]),
  height: 0
};

genesis.mainData = Buffer.from(data.main, 'base64');

/*
 * Testnet
 */

genesis.testnet = {
  version: 0,
  hash: 'acd141c6d7bca81461a392370e1d9d6eaf196fb23efbae6f7433283aaa2647e0',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    'f75b0921655d827beca8fd9b86fb16653686f410c445f023860e28a1a97d3d1c',
  witnessRoot:
    '71e88973ee0ea4b46f6cfb03a2c7077df8eac0d4f08715f67ac93a2e6f70bef7',
  treeRoot:
    '0000000000000000000000000000000000000000000000000000000000000000',
  reservedRoot:
    '0000000000000000000000000000000000000000000000000000000000000000',
  time: 1514765689,
  bits: 0x2007ffff,
  nonce: Buffer.from('0000000000000000000000000000000000000000', 'hex'),
  solution: new Uint32Array([
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000
  ]),
  height: 0
};

genesis.testnetData = Buffer.from(data.testnet, 'base64');

/*
 * Regtest
 */

genesis.regtest = {
  version: 0,
  hash: 'a7a251e31eb2ee39d53fa31e855acab2218d6247a9b3bfe7f774f91f1eea79ce',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '593c989662634e82a859caf0e061fc25c46a5ae9748bf2a3108ad6074a5a0f8e',
  witnessRoot:
    '50f7de14474c648b8d2f0a57ac70e6ddc6703f8fb0afa52c253fd48ac0c5ce4a',
  treeRoot:
    '0000000000000000000000000000000000000000000000000000000000000000',
  reservedRoot:
    '0000000000000000000000000000000000000000000000000000000000000000',
  time: 1514765690,
  bits: 0x207fffff,
  nonce: Buffer.from('0000000000000000000000000000000000000000', 'hex'),
  solution: new Uint32Array([
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000
  ]),
  height: 0
};

genesis.regtestData = Buffer.from(data.regtest, 'base64');

/*
 * Simnet
 */

genesis.simnet = {
  version: 0,
  hash: '53d13bc3f560223c4be6dd040d62a3a08345f51cb85d3bf2801f77e252024609',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    'b71fa5b00d7e9a6111d5b19970d77e0b09b2f8a43dacd82e948c657a7cff10a0',
  witnessRoot:
    'ed52a9ea5b2c2a92a7fd58b4a06040ea90f6bbb74ee0f57d2e07dd187d9e6606',
  treeRoot:
    '0000000000000000000000000000000000000000000000000000000000000000',
  reservedRoot:
    '0000000000000000000000000000000000000000000000000000000000000000',
  time: 1514765691,
  bits: 0x207fffff,
  nonce: Buffer.from('0000000000000000000000000000000000000000', 'hex'),
  solution: new Uint32Array([
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000,
    0x00000000
  ]),
  height: 0
};

genesis.simnetData = Buffer.from(data.simnet, 'base64');