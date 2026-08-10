# Dandelions

A professional archive dedicated to documenting daily progress in backend engineering, system architectures, and server design. This repository serves as a clear, step-by-step log of core concepts mastered through daily hands-on practice.

## Environment Setup

- **System Runtime:** Node.js (v22.23.1)
- **Development Tool:** VS Code
- **Operating System:** Ubuntu Linux

---

## Day 1: Node.js Architecture and Core Foundations

Today marks the beginning of the backend journey. The focus was entirely on understanding how JavaScript runs outside of a browser and how a server handles multiple operations efficiently under the hood.

### Architectural Concepts Mastered

- **Node.js Runtime:** Discovered that Node.js is not a programming language or a framework, but an environment that executes JavaScript directly on a computer. It relies on Google's **V8 Engine** to compile human-readable code into fast, native machine language.
- **Non-Blocking I/O:** Explored how the system avoids freezing. Traditional servers handle requests by locking up resources until a task finishes. Node.js uses a **Single-Threaded** approach that offloads heavy input/output tasks immediately, staying free to accept new incoming traffic.
- **The Event Loop Infrastructure:** Learned the internal mechanics of data traffic control. The **Call Stack** processes immediate actions line by line. Meanwhile, completed background tasks wait patiently in the **Callback Queue**. The **Event Loop** acts as the ultimate supervisor, moving waiting tasks into execution the exact microsecond the main stack clears.
- **Modular Systems:** Investigated how backend applications stay organized using separate files. Focused on the **CommonJS** standard, which uses native import commands to link utilities together smoothly.

### Practical Engineering Applications

- **File System Interaction:** Utilized the built-in **File System Module** to create and read physical documents on the hard drive asynchronously. This proved that the server could successfully modify files in the background without interrupting the main application timeline.
- **HTTP Server Deployment:** Built a foundational web server from scratch using the native **HTTP Module**. Configured the server to listen to local communication channels and successfully engineered basic network routing, allowing the server to display unique text messages depending on the web path requested by the user.

## Day 2: NPM + Project Structure

- **npm(Node Package Manager)** Like a APP Store that lets me download free tools & libraries that other programmer wrote.

- **package.json** Like a menu of my project that lists name of my project,it's version & list of tools i download from npm(app store).

-**dependencies(Production Tools)** Must run on internet for real users.

-**devdependencies(Development Tools)** Only when i am writing code on my desktop. Real users doesn't need them.

-**dependencies VS devDependencies**
| Feature | dependencies | devdependencies |
| :--- | :--- | :--- |
| **where does it go?** | uploaded to live internet server | stays on computer;never sent to real users |
| **install command** | `npm i <package>` | `npm i -D <package>` |
| **example** | `express`(runs the site),`dotenv`(hold secrets) | `nodemon`(auto-restarts my code while i type) |
| **if it's missing?** | website crashes! Live users see a major issue | no effect on users. just only lose local helper. |

-**scripts** shortcuts for long, annoying terminal commands. Instead of typing a massive command like `node src/server.js --config dev` every single time i want to test my code, so create a tiny shortcut called `"start"` or `"dev"` inside my `package.json` menu.

-**Setup & installation**

-**Create package.json** `npm init -y`
-**Install nodemon as devDependency** `npm install --save-dev nodemon`
-**Install dotenv as regular dependency** `npm install dotenv`

## Day 3: Express Server,Middleware & Routing

Today focus native Node.js HTTP module to **Express.js**(framework). Mainly how data move through a server framework &
build path(routes) for **REST API**

---

* **Express.js Server Architecture** system where requests pass through middleware, are handled by routes, and return responses to the client.

* **The Middleware Pipeline:**middleware functions are like **security guards** that the request passes through *before* it hits the final destination (the controller). They can inspect, edit, or block data. Like parsing JSON text into a JavaScript object

* **Routing Infrastructure:**system that matching incoming HTTP Request Methods(`GET`,`POST`) & specific URL paths(`/users`) to clear backend handler operations.

* **REST API Conventions:**rules for designing APIs using clear URLs, HTTP methods, and structured responses to manage data:
  * `GET`: fetch data from the server.
  * `POST`: send new data to the server to create a resource.

---

### HTTP Methods & API Operations
| HTTP Method | API Endpoint | System Action | Expected Response Status |
| :--- | :--- | :--- | :--- |
| **GET** | `/users` | Fetches a list of all current users | `200 OK` |
| **POST** | `/users` | Submits a new user to the database | `201 Created` |

---

-**Setup & installation**

-**Install Express** `npm install express`


## Day 4: Middleware

Series of checkpoints/gates that a request passes through before it finally hits route handler and sends back a response.

---

* **Middleware Lifecycle:** Every middleware function in Express has to access three things:
  * Request object `req`
  * Response object `res`
  * special function `next()`

[Incoming Request] --> [Middleware 1 (req,res,next)] --> [Middleware 2] --> [Route Controller] --> [Response Sent]

## Core Middleware Classifications

| Middleware Type | Where it Works | Purpose | Binding Target | Function Signature | Example Code |
| :--- | :--- | :-------------------- | :--------------- | :---------- | :--- |
| **Application Middleware** | Whole app | Runs for every request (logging, parsing) | `app.use()` | `(req, res, next) => {}` | `app.use((req, res, next) => { console.log("Request received"); next(); });` |
| **Router Middleware** | Specific route | Runs only for certain routes or sub-paths | `router.use()` or inline in routes like `router.get(path, middleware, handler)` | `(req, res, next) => {}` | `router.get('/user', authMiddleware, (req, res) => { res.send("User route"); });` |
| **Error Middleware** | Handles errors | Catches and handles app errors gracefully | `app.use()` *(placed at the very bottom)* | `(err, req, res, next) => {}` | `app.use((err, req, res, next) => { res.status(500).send("Something went wrong"); });` |

---

## Practical Implementation Strategy

During this session, we built two custom middleware systems to intercept and manage traffic through our REST API architecture:

### 1. Application-Level: Custom Logger Middleware
* **File Location:** `src/middleware/logger.js` (or `src/utils/logger.js`)
* **Objective:** Capture a clean, standardized console log showing the precise UTC timestamp, HTTP method, and exact path targeted by every client interaction.

### 2. Router-Level: Mock Authentication Middleware
* **File Location:** `src/middleware/auth.js`
* **Objective:** Protect specific data mutation endpoints (`POST /users`) by inspecting the client's request headers. 
* **Validation Logic:** Checks for the presence of a custom header key (`x-api-key`). If the key matches the secret string, it passes access forward via `next()`; if it is missing or incorrect, it immediately terminates the lifecycle with a `401 Unauthorized` block.



## Day 5: REST & HTTP Status Codes

REST (Representational State Transfer) is just a set of standard rules for how a client (like Postman or a website) communicates with a server.

* **Resources** Everything in REST is a resource(users, products, orders).Resources are represented as nouns in plural form(/users).
* **Verbs** Use standard HTTP methods to tell the server what action to take:
  * `GET` --> Read/Fetch data
  * `POST` --> Create new data
  * `PUT` --> Update existing data completely
  * `DELETE` --> Remove data
 
* **HTTP Status Codes** Status codes are three-digit numbers thats server sends back to tell the client what happened. Think of them as traffic signals:
  * `200 OK`: Everything worked! Here is your data.
  * `201 Created`: Success! A new resource was created.
  * `400 Bad Request`: Client error. You sent missing or invalid data (missing an email).
  * `404 Not Found`: Client error. The resource or user ID doesn't exist.
  * `500 Internal Server Error`: Server error. Something crashed or broke on the database end.


## Day 6: MongoDB, NoSQL & Mongoose

* **SQL vs NoSQL**
  * **SQL** → Stores data in fixed tables with rows and columns. Examples: `MySQL`, `PostgreSQL`
  * **NoSQL** → Stores data in flexible documents. Example: `MongoDB`
  * **SQL** is more structured, while **NoSQL** is more flexible.

MongoDB is a **NoSQL database** that stores data in flexible, JSON-like documents instead of fixed tables and rows. Mongoose helps Node.js applications work with MongoDB using schemas and models.

* **Collections**
  A collection is a container that stores related documents. It is similar to a **table** in SQL.
  Example: `users`

* **Documents**
  A document is a single record stored inside a collection. It is similar to a **row** in SQL and uses a JSON-like format.
  Example:

* **Mongoose**
  Mongoose is an **ODM (Object Data Modeling)** library that helps Node.js communicate with MongoDB using JavaScript.

* **Schema**
  A schema defines the **structure and rules** of the data.
  Example: A user's `name` must be a string.

* **Model**
  A model is created from a schema and provides functions to work with the database, such as:

  * `.find()` → Find data
  * `.save()` → Save data
  * `.findOne()` → Find one document
  * `.deleteOne()` → Delete a document

### Setup

```bash
npm install mongoose
```

## Day 7




