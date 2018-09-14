<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
Sessions stores users data. Each session is unique to every user accessing the api and they are active even when the server is down. There is an expiration date on how long a session lasts until the user has to log in again. 

2. What does bcrypt do to help us store passwords in a secure manner.
Bcrypt hashes/encrypts the passwords.

3. What does bcrypt do to slow down attackers?
In order to slow down attackers, bcrypt hashes the passwords and adds salt to prevent the rainbow attacks.

4. What are the three parts of the JSON Web Token?
The three parts of JWT are:
 # Header - contains info about how the JWT signature should be computed.
 # Payload - data that is stored inside JWT
 # Signature - to get a signature, data string is hashed with secret key, using hashing algorithm that is specified in JWT header.
