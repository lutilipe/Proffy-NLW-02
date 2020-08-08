<a href='https://github.com/lutilipe/Proffy-NLW-02'>
  <p align="center" style="border-radius:6px">
    <kbd>
    <img width="520" height="auto" src='https://github.com/lutilipe/Proffy-NLW-02/blob/master/web/src/assets/images/landing.svg'>
    </kbd>
  </p>
</a>

# Proffy
> Developed during Next Level Week #02.

Proffy is a project that allow students get in touch with teachers of an specific subject and take a classes with them. All of this thanks to [Rocketseat](https://rocketseat.com.br/) :rocket:.

## :rocket: Technologies
  - [NodeJs](https://nodejs.org/en/)
  - [React](https://pt-br.reactjs.org/)
  - [React Native](https://reactnative.dev/)
  - [Expo](https://expo.io/)
  - [Knex](http://knexjs.org/)
  - [MySQL](https://www.mysql.com/)

## :information_source: Installation

You'll need to have installed on your computer before starting the project:
[yarn](https://yarnpkg.com/getting-started), 
[NodeJs](https://nodejs.org/en/).

```bash
# Clone the repository
$ git clone https://github.com/lutilipe/Proffy-NLW-02.git
```
 
### Configuring the DataBase and Server
Create a .env file in the root of your project. After that, create variables according to the .env.example file.

### :computer: API
```bash
# Go to server directory
$ cd server

# To install the dependencies
$ yarn install

# Create the DataBase
$ yarn knex:migrate

# Run the server
$ yarn dev
```
### :computer: Web 
 ```bash
# Go to web directory
$ cd web

# To install the dependencies
$ yarn install

# Run the web application
$ yarn start
```

### :iphone: Mobile 
For this part, it's recommend to install Expo on your cellphone and use it. But you can also use a Android/IOS simulator.
 ```bash
# Go to mobile directory
$ cd mobile

# To install the dependencies
$ yarn install

# Run the mobile application
$ yarn start
```

## :pencil: License
To view the license, check out [MIT](https://choosealicense.com/licenses/mit/)!
