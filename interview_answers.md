# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
-Tokens are Jason Web Tokens (JWT)s. JWT tokens are issued by the server. The token is a streing that consists of crptic text that loks like a bunch of jumbled text. These tokens are stored in the client-side using local storage or session storage. 

2. What steps can you take in your web apps to keep your data secure?
-Steps that you can take to keep data secure is to create a Private Route that can only be accessed once the user is authenticated by the token.  the client will make a login request by sdending the server the user's username and password. Then the server checks if those credentials with the databas, and if the user is authenicated the server will return a token. 

3. Describe how web servers work.
-A web server could be a computer that stores the code for a website or a program that runs on a computer. A computer is connected to the internet and storesx code from different websites that are shared worldwide. When the code is loaded for our website on a computer we then say the computer is hosting our website

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
PUT, POST, DELETE