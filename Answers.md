1.  Explain the differences between `client-side routing` and `server-side routing`.

    Server-side routing: EACH time when we're navigating to the new URL, the server is what has to compile the document or HTML file for the browser to read and render.
    Client-side routing: JS whithin a client app manages the data for that application within it's own memory, so the browser in this case has all what it needs to render different pages in his own memory. That's way the browser don't need to refresh between routs.

2.  What does HTTP stand for?

    HTTP =  Hyper Text Transfer Protocol. HTTP is a network protocol defining the exchange of documents in the web, it set the rules that govern the way web clients communicate with web servers over the Internet.

3.  What does CRUD stand for?

    CRUD are the database  operation, C for CREATE, R for READ, U for Update, D for DELETE.

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    C (Create) = POST
    R (Read) = GET
    U (Update) = PUT
    D (Delete) = DELETE (Surprise!)

5.  Mention three tools we can use to make AJAX requests

    - create our own Promise
    - use browser fetch API
    - use library called Axios