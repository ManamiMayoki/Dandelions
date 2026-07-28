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


