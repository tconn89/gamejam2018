# Excalibur Hearthstone Simulator

Hearthstone is so amazing I decided to emulate it at GameJam 2018.  This is the beginning of an engine that can run a card game in the browser.

## Current Features 
- json deck loading
- deck shuffling
- Card draw
- Hand management
- Hand interaction `onHover` and `onSelect`
- Playing minions

## Upcoming Features
- Turn based play
- minion effects like `Martyr`, `BattleCry` and `Deathrattle`
- Minion interaction

To run:

    npm install
    npm run all

This example uses [`webpack`](https://webpack.github.io/) and 
[`ts-loader`](https://github.com/TypeStrong/ts-loader) to compile the TypeScript. 
Excalibur is bundled via webpack into the output **public/dist/bundle.js** file.

See **webpack.config.js** for the bundle configuration.