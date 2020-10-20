# Django+React Deployed To Heroku
This project is based on [here](https://github.com/zachtylr21/django-react-starter) which I used to modify and add the ability to apply CSS, view images along with text to the React app portion of the app when using a [webpack](https://webpack.js.org/).

The major achievement of this app is successful deployment of a Django+React project to Heroku. It is currently live on [Heroku](https://cm-react-test6.herokuapp.com/)

## Prerequisites
Must have [Django v3.1.1](https://docs.djangoproject.com/en/3.1/topics/install/) and [Node.js v12.19.0](https://nodejs.org/en/) installed, preferably in a virtual environment(virtualENV or pipENV)

## To Run Locally
Note: All bash commands should be executed at the root of this project.
```
$ git clone https://github.com/caocmai/django-react-heroku.git
$ pip install -r requirements.txt
$ npm install
$ npm run dev
$ python3 manage.py runserver
```

## To Upload Project to Your Heroku
I'm assuming you know how to deploy a simple Django project to Heroku. Below are added Heroku deployment instructions to deploy a Djano+React project.

Heroku needs a build pack of nodejs as well as python so when you run  `$ heroku buildpack` you should see something like 
```
1. heroku/nodejs
2. heroku/python
```

If you don't have something like that, to add both the build packs to your Heroku App run:
```
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/python
```


Alternatively, you can find your app's build packs under the Settings option within your app console on Heroku.com

### Screenshot (From Heroku)
![](demo.png)

## Resources Used
* [How to Serve a React Single-Page App with Django](https://dev.to/zachtylr21/how-to-serve-a-react-single-page-app-with-django-1a1l)