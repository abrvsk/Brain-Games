#!/usr/bin/env node
install:
		npm install
start:
		npm run babel-node -- src/bin/brain-games.js
publish:
		npm publish
lint:
		npm run eslint .
even:
		npm run babel-node -- src/bin/brain-even.js
calc:
		npm run babel-node -- src/bin/brain-calc.js
gcd:
		npm run babel-node -- src/bin/brain-gcd.js
balance:
		npm run babel-node -- src/bin/brain-balance.js
prog:
		npm run babel-node -- src/bin/brain-progression.js
prime:
		npm run babel-node -- src/bin/brain-prime.js