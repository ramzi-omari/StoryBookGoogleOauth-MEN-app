#Story Books Server side application
App to create public and private stories using MongoDB Express Node GoogleOauth

## dependencies

- npm init
- npm i express mongoose connect-mongo express-session express-handlebars dotenv method-override moment morgan passport passport-google-oauth20

> connect-mongo : to store sessions, when we restart server we wont be logged out

> express-session: for sessions and cookies

> express-handlebars: template engin (like EJS)

> moment: to format date

> morgan: for loggin (to follow request in terminal)

> passport: for authentication

- npm i -D nodemon cross-env

### Google Oauth :

google cloud console > g++ api > identifiants > create ID client Oauth > set redirection URI
