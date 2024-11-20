import sqlite3

# Connect to the database (creates the file if it doesn't exist)
conn = sqlite3.connect('comments.db')

# Create a cursor object to execute SQL commands
cursor = conn.cursor()

# Create the comments table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        position TEXT,
        comment TEXT NOT NULL
    )
''')

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Database and table created successfully.")
