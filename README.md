# Finimize Code Test

## Setup instructions
1. First, run `git clone git@github.com:elliefarrer/finimize.git`
2. Next run `cd ./finimize`
3. Install the dependencies with `yarn`
4. Run both the server and client with `yarn start`. Or, to run the server separately, do `yarn server`.
5. To run the client-side unit tests, do `cd ./client` then `yarn test`

## How I approached the challenge
Normally I like to approach the back end before building the front end, so this project was no different. My aim was to get some mock data returning from the server before working on the front end.

Once I had enough of a UI to actually display the data, I went back to the back end and worked on building the logic to calculate the compound interest.

After doing this, I decided to do a couple more "extra" tasks, like form validation and neatening up the UI, before adding some front end unit tests at the end.

Before I really started on the front end, however, I swapped Chakra for Material UI (because I'm more familiar with it). I'm using it with the styled-components engine and not the Emotion one as, again, I'm more familiar with styled-components.

I also had a think about swapping the CRA set up for a Next.js one, which would improve performance. However this would have taken quite a little while. I also thought about swapping the start-client script for Webpack or Vite, but dropped this idea due to time.

## What bits of the solution I like
Firstly, I like that the compound interest is actually calculated on the back end, and my solution doesn't just use test data. It gives the back end more purpose. I also like how I've split some of the back end functions into `utils` functions that could definitely be reused.

On the front end side, I like the Yup form validation, as it makes it much more user-friendly. I like that Context is used for state management, as this has saved a lot of prop-drilling. Finally, I like that Material UI is present, as it allows for greater flexibility when it comes to the design and content of the components.

## What bits of your solution I'd like to improve upon
On the back end, I'd really like to add some validation too. I'd use `Joi` for this, however this is a package I have limited experience with so decided against it in the time. I'd also like to add some unit tests. I've only ever used Jest for testing (not Mocha), and found some `babel-jest` issues when I set it up, so dropped it for time.

On the front end, I'd ideally like to swap the set up for a Next.js one. It would be nice to actually test the axios request in the unit tests as well (perhaps by using MSWJS), instead of just using a test context component. The UI could also be prettier, and more mobile-friendly.

## Visuals
![Example of the finished task]('https://./../example.gif')