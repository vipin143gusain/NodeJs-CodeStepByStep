Here are some important interview questions and answers based on the video about Node.js core modules and global objects, explained in simple words:

### Interview Questions & Answers (Node.js Core Concepts)

#### **1. What are "Modules" in Node.js?**

* **Question:** What are modules in Node.js? Think of them like tools in a toolbox.
* **Answer:** In Node.js, "modules" are like separate pieces of code or files that do a specific job. You can use these pieces of code in your main program without writing them again. It helps keep your code organized and reusable.

#### **2. Can you tell me about the different kinds of modules in Node.js?**

* **Question:** What are the three main types of modules you'd find in Node.js?
* **Answer:** There are three main types:
    * **Core Modules:** These are built-in tools that come with Node.js itself. You don't need to install them; they're ready to use.
    * **Third-Party Modules:** These are tools created by other people or companies that you can download and use. You usually get them using `npm` (Node Package Manager).
    * **Custom Modules:** These are pieces of code you write yourself for your specific project.

#### **3. Give an example of a "Core Module" and what it does.**

* **Question:** Can you give an example of a core module and tell me what it helps you do?
* **Answer:** A good example is the `fs` module (which stands for "File System"). It's used to work with files on your computer. For instance, you can use it to create new files, read existing files, or delete files. The video showed using `fs` to write some text into a file. Another one is `os` (Operating System), which gives you information about the computer's system, like its name or how many CPUs it has.

#### **4. What are "Global Objects" in Node.js?**

* **Question:** What do we mean by "Global Objects" in Node.js? Why are they special?
* **Answer:** "Global Objects" are special because they are available *everywhere* in your Node.js program, by default. You don't need to import them or do anything special to use them. They're just always there, ready to go.

#### **5. Can you give an example of a "Global Object" you often use?**

* **Question:** Give me an example of a global object and how you might use it.
* **Answer:** The most common one is `console.log()`. We use it all the time to print messages or see what's happening in our code. Another example is `process`. We can use `process.cwd()` to find out the folder our Node.js program is running from, or `process.pid` to get its unique ID number.

#### **6. How is `console.log` in a web browser different from `console.log` in Node.js?**

* **Question:** If you use `console.log` in your web browser's console and also in a Node.js program, is it the same? What's the main difference?
* **Answer:** While they look and act similarly (both print messages), they are used in different environments:
    * In a **web browser**, `console.log` is part of the browser's tools, and it helps you debug your website in the browser's environment. It can show you things related to the web page itself (like HTML elements).
    * In **Node.js**, `console.log` is a global object for the Node.js runtime environment. It helps you debug your server-side or command-line programs, and it doesn't know anything about web pages or HTML. The key difference is the *environment* where the code is running.

http://googleusercontent.com/youtube_content/2