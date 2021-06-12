# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

2. What steps can you take in your web apps to keep your data secure?
Use properly validated cookies to store API tokens. Use JWT with React router redirect component to easily implement secured routing of data.
- DON'T store your JWT tokens on localStorage. 
- Rate limiting on APIs.
- Make calls on the server and NOT on the client-side.
- Add some tests to secure the app layer.

3. Describe how web servers work.
On a web server, the HTTP server is responsible for processing and answering incoming requests. Upon receiving a request, an HTTP server first checks if the requested URL matches an existing file. If so, the web server sends the file content back to the browser. If not, an application server builds the necessary file.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create = PUT with a new URI
         POST to a base URI returning a newly created URI
Read   = GET
Update = PUT with an existing URI
Delete = DELETE