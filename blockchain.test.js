const {Block, Blockchain} = require('./blockchain');

let blockchain
beforeAll(() => {
    blockchain = new Blockchain()
  });

test('creates a blockchain', () => {
  expect(blockchain.isValid()).toBeTruthy();
});

test('adds a block', () => {
  blockchain.addBlock(100)
  expect(blockchain.isValid()).toBeTruthy();
});

test('resists attack', () => {
  [11, 12, 13, 14, 15, 16, 17, 18, 19].forEach(el => blockchain.addBlock(el))

  blockchain.chain[4] = new Block(blockchain.chain[3].hash, 100)

  expect(blockchain.isValid()).not.toBeTruthy();
});