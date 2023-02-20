<h1>Agent Bank</h1>

A secured web app for internet banking. Backend and HTML static elements created by OpenClassrooms team. Frontend running on React created by me.

<h2>Screenshots</h2>

 Landing Page
  
  ![](https://github.com/lukablasi/AgentBank/blob/master/screenshots/mainpage.PNG)
  
  Sign In Page
  
  ![](https://github.com/lukablasi/AgentBank/blob/master/screenshots/signin.PNG)
  
  User's Page - Steve
  
  ![](https://github.com/lukablasi/AgentBank/blob/master/screenshots/stevepage.PNG)
  
  User's Page - Tony
  
  ![](https://github.com/lukablasi/AgentBank/blob/master/screenshots/tonypage.PNG)

<h2>How to install</h2>

<h3>Back End</h3>

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

<h4>Instructions</h4>

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

<h4>Populated Database Data</h4>

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs
