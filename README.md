# Tracking Challenges

> A react app to keep track of the number of coding challenges solved daily.

![tracking](https://user-images.githubusercontent.com/15898299/93793254-f6e17800-fc0c-11ea-9a40-d34f42e7bc7b.jpg)

This webapp helps to keep track of the number of coding challenges learned and reviewed daily, keeping all information for a user stored in a Rails API. All information is sent/retrieved from the API and can be accessed by the endpoints provided dependending on a JWT authentication/authorization.

## Features

- Login to keep track of the number of challenges solved each day.
- Add *Reviewed* or *Learned* amount of challenges for the current day.
- Set a daily goal.
- List all days with entries.

- Redux store to keep user data.
- JWT authentication/authorization using redux thunk.
- Circular progressbars to increment UI/UX.

## Built With

- React
- Redux
- CSS Modules
- JWT (authentication/authorization)
- Yarn

## Live URL

- https://trackingchallenges.netlify.app/

## Setup

- Clone this repository with: `git clone https://github.com/flpfar/tracking-challenges.git`
- Navigate to the project folder `cd tracking-challenges`
- Run `yarn install`.
- Run `yarn start`.
- Navigate to `http://localhost:3000` in your browser.

### Run tests

This project uses RSpec for testing. In order to run the tests, type `rspec` in the terminal, inside this project folder. For more information about the running tests, use `rspec -f d`

## Development Notes

- I've been using a trello board to manage some of the tasks for this project. This board is available [here](https://trello.com/b/RXSpBmA0/tracking-challenges).

## 👤 Author

### Felipe Rosa (@flpfar)

[Github](https://github.com/flpfar) | [Twitter](https://twitter.com/flpfar) | [Linkedin](https://www.linkedin.com/in/felipe-augusto-rosa)

## Acknowledgements

- The API used in this project can be found [here](https://github.com/flpfar/tracking-challenges-backend).
- The requirements for this project were given by [Microverse](https://www.microverse.org/) as the final project of their Bootcamp program.
- The specifications and requirements for this project are [here](https://www.notion.so/Final-Capstone-Project-Tracking-App-22e454da738c46efaf17721826841772).
- This project design was based on [Body Trackit](https://www.behance.net/gallery/13271423/Bodytrackit-An-iOs-app-Branding-UX-and-UI) app concept by [Gregoire Vella](https://www.behance.net/gregoirevella).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/flpfar/tracking-challenges/issues).


## Show your support

Give a ⭐️ if you like this project!