## HOW-TO

```javascript

Yarn:
yarn install

NPM:
npm install
```

### CLI Usage

Install as global module for testing:

```javascript

npm link
./rides -i example.in -o example.out
```

Test CLI command:

```javascript

Individual:
node bin/cli.js -i fixtures/a_example.in -o fixtures/a_example.out
node bin/cli.js -i fixtures/b_should_be_easy.in -o fixtures/b_should_be_easy.out
node bin/cli.js -i fixtures/c_no_hurry.in -o fixtures/c_no_hurry.out
node bin/cli.js -i fixtures/d_metropolis.in -o fixtures/d_metropolis.out
node bin/cli.js -i fixtures/e_high_bonus.in -o fixtures/e_high_bonus.out

All:
node bin/cli.js -a
```