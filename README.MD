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
node bin/cli.js -i in/a_example.in -o out/a_example.out
node bin/cli.js -i in/b_should_be_easy.in -o out/b_should_be_easy.out
node bin/cli.js -i in/c_no_hurry.in -o out/c_no_hurry.out
node bin/cli.js -i in/d_metropolis.in -o out/d_metropolis.out
node bin/cli.js -i in/e_high_bonus.in -o out/e_high_bonus.out

All (it takes everything from in, and save them on out):
node bin/cli.js -a
```