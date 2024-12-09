import json
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    try:
        # Load the posts from posts.json in the static folder
        with open('static/posts.json', 'r') as f:
            posts = json.load(f)
        return render_template('blog.html', posts=posts)
    except FileNotFoundError:
        return "Error: posts.json not found!", 500

if __name__ == '__main__':
    app.run(debug=True)
