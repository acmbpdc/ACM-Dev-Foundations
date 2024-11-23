# Git and GitHub: Version Control System

![Git and Github](../assets/git-github.jpg)
Git is a super powerful version control system. 

It's essential for managing and tracking changes in code or files, especially when collaborating with a team. 

With Git, developers can work on multiple features simultaneously, track changes, and avoid conflicts.

## What’s the Point?

In our case, git provides an easy and organized way to access and manage our code for deployment.

It ensures that we have the latest version of the code across all devices and environments.

## Key Benefits:
1. **Collaboration:** Multiple developers can work on the same project without overwriting each other's work.

2. **Version History:** Every change is tracked, making it easy to roll back to previous versions if needed.

3. **Branching:** Create different versions of your project for features, testing, or bug fixes.

4. **Deployment:** Easily pull the latest version of your code for deploying to production.

## How to Install Git?

Windows / Mac / Linux: [Click here to download Git.](https://git-scm.com/downloads)

## Git Cheatsheet

### Configuring user information for local repos:
* Set the name you want attached to your commit transactions
```bash
git config --global user.name "[name]"
```
* Set the email you want attached to your commit transactions
```bash
git config --global user.email "[email address]"
```

### Creating repositories

When starting out with a new repo, you only need to do it once; either locally, then push to GitHub, or by cloning an existing repository.
* Turn an existing directory into a git repository
```bash
git init
```
* Clone a repo that exists on GitHub
```bash
git clone [url]
```

### The .gitignore file

Sometimes it may be a good idea to exclude files from being tracked with Git. This can be done by using a special file named `.gitignore`. Just put in the file names that you dont want to track here.

**For example:**
```env
.env
__pycache__/
*.pyc
instance/
*.db
myenv
test.py
```

Here, there are a few things going on..
1. **.env**: Never forget to add this onto .gitignore! Your secrets will get leaked!
2. **__pycache__/ and .pyc**: This folder contains the bytecode files that python compiles, of the extension `.pyc`. Not really useful for Development purposes, so no point of pushing this into the repo
3. **instance/ and .db**: This folder contains the SQLite3 db file, no need to push this as the server will maintain the database itself
4. **myenv**: Your python virtual environment folder name, please don't push this, it's just annoying to see 10,000+ lines of code added and going through those changes. Instead, we push ```requirements.txt```, so that the person who wants to run your code will make his own virtual environment and install all dependencies onto it manually.

### Making changes

* List version history
```bash
git log
```
* See differences from the previous commit in the branch
```bash
git diff
```
* Set files in current directory up for tracking, in preparation to `commit`
```bash
git add .
```
* Permanently save the file changes as a `commit` with a message
```bash
git commit -m "[descriptive message]"
```
## Want to Know More?

If you're new to Git and GitHub, or want to dive deeper, here's an amazing resource that will guide you through everything you need to know to get started with Git.

Introducing...

> ### [The Git Guide, by ACM BPDC](https://gitguide.acmbpdc.org)

