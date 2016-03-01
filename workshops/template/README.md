# Template

This is a blank project template that you can use to jumpstart your project.
The project assumes that you have already installed browser-sync globally.  

## Step 1: Test for Browser Sync installation
To test whether or not you have browser-sync installed enter the following on your command line:

```
which browser-sync
```

if you get an output that looks something like
```
/something/something/..../browser-sync
```

then you have installed browser-sync and you can skip to step 3

## Step 2: Initialize the project
After you have cloned this project to your machine go to the project directory and enter:

```
npm init
```

this command will install browser-sync to this project folder

## Step 3: Running the project

Enter:
```
npm start
```

this will start browser-sync serving web pages from the public directory in the project, open your default web browser and watch for html,css and javascript file changes in the  public folder.  

You should now be able to edit files in the project directory and have the changes automatically reflected in the browser.

