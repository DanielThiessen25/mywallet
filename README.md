# mywallet-back-end
Backend of MyWallet App. Here are the instructions for connecting a local server as well as constructing a database in your machine.
Check MyWallet App [here](https://github.com/DanielThiessen25/mywallet-front-end)

## Instructions

1. Connect to Postgres
```
sudo su postgres
psql
```
2. Create a database named mywallet
```
CREATE DATABASE mywallet;
```
3. Enter the database and create the tables (make sure you create these tables under a user called 'postgres' and password 'senha')
```
\c mywallet
CREATE TABLE clientes (id SERIAL, name TEXT, email TEXT, password TEXT);
CREATE TABLE users (id SERIAL, userId INTEGER, token TEXT);
CREATE TABLE logs (id SERIAL, date TEXT, description TEXT, value FLOAT, userId INTEGER, operation TEXT);
```
4. Clone this repository
```bash
git clone https://github.com/DanielThiessen25/mywallet-back-end.git

cd mywallet-back-end
```
5. Install Dependencies
```bash
npm i
```
6. Start the server with
```bash
npm run start
```
7. Now you should have a running server on port 4000

## API Funcionalities

### Login:

- Endpoint: http://localhost:4000/
- HTTP Method: POST
- Request:
{
  email: "email@exampĺe.com",
  password: "passwordExample123"
}

### Sign Up:

- Endpoint: http://localhost:4000/sign-up
- HTTP Method: POST
- Request: 
{
  name: "name Example",
  email: "email@exampĺe.com",
  password: "passwordExample123"
}

### View Records:

- Endpoint: http://localhost:4000/records
- HTTP Method: GET
- Request: 
Authorization Header: "Bearer " + userId



### New Income:

- Endpoint: http://localhost:4000/nova-entrada
- HTTP Method: POST
- Request: 
{
  value: 23.00,
  email: "Your description"
} - Authorization Header: "Bearer " + userId

### New Outcome:

- Endpoint: http://localhost:4000/nova-saida
- HTTP Method: POST
- Request: 
{
  value: 23.00,
  email: "Your description"
} - Authorization Header: "Bearer " + userId
