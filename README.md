# Stencil interop examples

Demo app for Przeprogramowani.pl [YouTube channel](https://www.youtube.com/channel/UCb2Y3vMeD6N4WDt5Acw7Arw).

## Before you start

1. Build stencil components by opening `reusable-avatar` and running `npm install && npm run build`
2. Use npm link to add it to global registry - run `npm link` in `reusable-avatar` directory
3. For both `jquery-demo` and `angular-demo` execute `npm link reusable-avatar` to link stencil component

## How to run demo apps

1. Run `npm install && npm start` in jquery-demo to run jquery app and live-server hosting fake data
2. Run `npm install && npm start` in angular-demo to run angular app (make sure live-server is already started)
