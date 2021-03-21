# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
A token is like a wristband allowing entry. The client will send a username and password to the server and if it's correct the server sends a token that is saved in the client's local storage. Now, when making a request to a protected route, the client includes this token in an authorization header for every axios request

2. What steps can you take in your web apps to keep your data secure?
Secure cookies with http only flag, encription, architect entire application

3. Describe how web servers work.
There is a client/server model. The client makes requests and the server delivers. The server delivers the application code to your browser once and then the browser handles the requests.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
C- Create- post
R- Read- get
U- Update- put
D- Delete- delete