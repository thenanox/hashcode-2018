## HOW-TO

```javascript

yarn install
yarn test
```

### CLI Usage

Install as global module for testing:

```javascript

npm link
./rides -i example.in -o example.out
```

Test CLI command:

```javascript

node bin/cli.js -i spec/fixtures/a_example.in -o spec/fixtures/a_example.out
node bin/cli.js -i spec/fixtures/b_should_be_easy.in -o spec/fixtures/b_should_be_easy.out
node bin/cli.js -i spec/fixtures/c_no_hurry.in -o spec/fixtures/c_no_hurry.out
node bin/cli.js -i spec/fixtures/d_metropolis.in -o spec/fixtures/d_metropolis.out
node bin/cli.js -i spec/fixtures/e_high_bonus.in -o spec/fixtures/e_high_bonus.out
```