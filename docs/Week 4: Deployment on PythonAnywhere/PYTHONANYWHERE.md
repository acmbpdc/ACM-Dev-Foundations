# Deploying your project on Python Anywhere

<img src="../../assets/pythonanywhere.jpeg" alt="Python Anywhere Logo" height="250"/> <br />

One popular and beginner-friendly platform for deploying Python applications is PythonAnywhere.

Deploying your Python web app with PythonAnywhere is a simple and beginner-friendly process, which makes it pretty popular for deploying python based applications.

Whether you’re building a small project for fun, a portfolio, or something more complex, PythonAnywhere is a fantastic option for getting your Python app online quickly and effortlessly.

> “If you have a Python app, PythonAnywhere makes deployment as simple as a few clicks.”

We’ll walk you through what PythonAnywhere is and how you can use it to host your Python web applications online.

## What is PythonAnywhere?

PythonAnywhere is a cloud hosting service specifically designed for running Python applications.

It allows you to deploy web apps without needing to worry about server management or configuration. Plus, it has a free tier, which is perfect for beginners and small projects.

## Why Use PythonAnywhere?

* **Easy to use:** You don’t need to manage servers or install software manually.
* **Accessible:** It provides a browser-based interface for working with your code.
* **Free tier:** Perfect for hobby projects or simple web apps to get you started.

### Key Features:
1. **Web hosting:** PythonAnywhere allows you to run web apps using frameworks like Flask, Django, or even simple WSGI applications.
2. **Python environment:** You get a complete Python environment with access to libraries, frameworks, and virtual environments.
3. **Shell access:** PythonAnywhere provides an online shell, so you can run terminal commands directly from your browser.
4. **Database hosting:** You can also create and manage databases (MySQL, PostgreSQL) for your web apps.


## How Does It Work?

PythonAnywhere provides you with access to a virtual machine running on the cloud. You can use this machine to host your Python apps, run scripts, and manage your databases.

## Deploying your Python Web App on PythonAnywhere

1. **Sign up**: First, go to PythonAnywhere and create a free account.

2. **Upload your code**: After signing in, you can upload your Python app files directly via the web interface, or you can pull them from a version control system like GitHub. We'll be taking the second approach.

* Create your GitHub account
* Create a public GitHub repo, and upload in the code from the workshop.

3. **Set up a web app:**
* Go to the Web tab in PythonAnywhere’s dashboard.
* Select Add a new web app.
* Choose your Python version and framework as Flask.

4. **Configure the WSGI file**:
* PythonAnywhere uses WSGI (Web Server Gateway Interface) to serve Python apps.
* You’ll need to edit the WSGI configuration file to point to your Python app’s entry point (usually the file where app = Flask(__name__) is defined in Flask.
* * Make the following changes in the `WSGI configuration file`:
    * Set the project home, and import the application with the following line of code:
    ```python
    from run import app as application 
    ```
    * Set the `Source Code` location to the path where your main flask app code is saved.
    ```python
    # add your project directory to the sys.path
    project_home = '{{PATH TO YOUR PROJECT}}'
    if project_home not in sys.path:
        sys.path = [project_home] + sys.path
    ```

5. **Run your app:** Once everything is set up, you can click Reload to deploy your app. It will be accessible via a web link provided by PythonAnywhere, something like {{yourusername}}.pythonanywhere.com

## Adding the Quotes API

Now, we want an amazing quote to be displayed too!

Let's try and place a quote under the "Comments" header.

Add this in `style.css`:
```css
.quote {
  color: #ffffff;
  font-style: italic;
}
```
And then add in the quote div in `index.html`:

```html
<!-- Comments Section -->
<section id="comments" class="section comments-section">
    <div class="container">
        <h2 class="text-center">Comments</h2>

        <div class="quote">Insert Deep Quote Here</div>
```

Ok so now we have an idea how a quote will look like on our website. Now, for actually inserting the quote?

Check out [The Quotes API](https://www.api-ninjas.com/api/quotes)

What even is this.. what is an API?

Great question! A wise man once told me, an API is like a translator. If you want to communicate with someone in Tamil, but you don't know Tamil and only know English, an API is the person who translates between the two and helps facilitating communication with each other.

Note that it is possible for you to learn Tamil and communicate with the person you wanted to, but well, using an API is much simpler, right?

Take this analogy of an API and apply it to the situtaion of you wanting to communicate with some external database, in this case a database of some amazing quotes!

Now to test the `Quotes API`, create a temporary file `test.py` and explore how we can retrieve data from the API.

```python
import requests

category = 'amazing' # Choose one of the categories from the API docs
api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
response = requests.get(api_url, headers={'X-Api-Key': 'YOUR_API_KEY'})
if response.status_code == requests.codes.ok:
    print(response.text)
else:
    print("Error:", response.status_code, response.text)
```

> **Important note:** Here, your `API_KEY` is your [Secret](SECRETS.md), do not share it with anyone.

Now to apply this code into your website:

* Set a template variable to be passed in from flask called `amazing_quote`
```html
<!-- Comments Section -->
<section id="comments" class="section comments-section">
    <div class="container">
        <h2 class="text-center">Comments</h2>
        <div class="quote">{{amazing_quote}}</div>
```
* Now set the variable with the help of the API:
```python
# Route for the homepage
@app.route('/')
def index():
    comments = Comment.query.all()
    category = 'computers'
    api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
    response = requests.get(api_url, headers={'X-Api-Key': 'YOUR_API_KEY'})
    if response.status_code == requests.codes.ok:
        quote = response.json()[0]['quote']
    else:
        print("Error:", response.status_code, response.text)

    return render_template(
        'index.html',
        comments=[{'NAME': c.name, 'POSITION': c.position, 'COMMENT': c.comment} for c in comments],
        amazing_quote=quote
    )
```

And push your changes! 

Pushed? 

Then you're finally done! You've completed deployment and added a brand new feature! Hurray!

Or.. have you..?

You might have just made.. a grave mistake..

***Intense evil music plays***

> [Working with Secrets](SECRETS.md).. ringing any bells? Welcome to the world of cybersecurity.
