# dandelions

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