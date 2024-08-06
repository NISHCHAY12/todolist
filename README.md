# todolist
To Do List Web Application

## Table of Contents

1. [Introduction](#1-introduction)
2. [Project Overview](#2-project-overview)
3. [Implementation](#3-implementation)
4. [Installation](#4-installation)


## 1. Introduction

The documentation for the To Do List web App, a simple  project designed to manage your tasks efficiently. This document provides an overview of the project, the code structure of the project and the Installation instructions.

## 2. Project Overview

The To Do List Web App is an application developed to help users to manage all their tasks. The Application provides an inetrface for creating, updating, marking and deleting tasks. The app also supports task search based on the title or the name of the task.

## 3. Implementation

The project follows a modular and organized structure to enhance readability, maintainability, and scalability. It has been implemented with:

- **react Js :** For implementing the Front End of the Web App.
- **tailwind CSS :** Used for styling the appearance of the web App.
- **Fonts (`Poppins`):** Imported from Google Fonts for consistent typography.
- **Json-Server :** For creating a temporary Database to store data and provide data to Front End.

### 4. Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/NISHCHAY12/todolist.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd todolist/client
   ```

3. **Setup application:**

   ```bash
   npm install
   ```

4. **run command for Json-server in another terminal:**

   ```bash
   npm i json-server
   ```
   ```bash
   npx json-server db.json --port 3030
   ```
   
5. **Run react Js command to start application:**

   ```bash
   npm start
   ```

