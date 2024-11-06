# Working with Secrets in Python

## What's a secret?

First off, what is a secret in the context of developing web applications?

A secret is just some kind of string value that you use in your app for some external service.

<img src="../../assets/secret2.jpg" alt="drawing" height="350"/>

### Examples
1. Accessing a Databases :
You want to connect to a database, which needs your code to have access to your db details

2. Calling an API:
You need your code to have acces to an `API key` for calling an API that requires one

3. Project identification
You may have to register your project with Google Cloud console or other similar platforms to use their services such as `OAuth`. Here they provide a `client ID` and `client secret`, which should not be revealed to anyone

Basically any kind of value which you do not want to reveal to anyone, but need your code to have access to, is a `Secret`, and it's super important to handle secrets with care. They must be managed appropriately to avoid any breach.

### The Danger
Secrets can be leaked in many ways. The most common place secrets are leaked are in version control systems like Github.

If secrets are leaked, it can lead to a loss of trust, credibility, and even business. In some cases, leaked secrets can also lead to legal action. 

And noow you know, that's why it's so important to have a plan for managing secrets.

In summary, **Never hardcode any secrets in your code!**


## .env files: A method to managing secrets

The `.env` file is used to store `environment variables` in Python. 

### Environment variables?
It's exactly what you think. Think of your python code as Monty Python. He is standing in a circus environment, a lot of things all over the place, but he can interact with them all.

Point to be taken is:
* Instead of carrying all his things on himself, he has an environment to keep his important things
* He has access to the environment, and so he can interact with these things easily

This is exactly the kind of thing we want to achieve, but with secrets. Create an environment and store all your secrets, then give access to this environment to your python code.

Here, we use a `.env` file to act as an environment file.

### Accessing the environment
We will use Python's `python-dotenv` package for accessing the content of the `.env` file. 
To get started, open up your Powershell/Terminal first, and install the package using the following command:
```bash
pip install python-dotenv
```

Create a .env file and paste your secrets as key-value pairs, for example:
```env
// Secrets for Google OAuth
CLIENT_ID = xxxxxx
CLIENT_SECRET=xxxxxx
```

And now an important disclaimer,

**This file should not be committed to your git repo**

To avoid this dangerous mistake, add a line into your `.gitignore`:
```bash
.env
```
We're now ready to roll!
Use the following functions to load our secret values from the .env:

```python
from dotenv import load_dotenv
import os

load_dotenv()

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")

print("CLIENT_ID: ", client_id )
print("CLIENT_SECRET: ", client_secret)
```

And now you're all set to push to production!

