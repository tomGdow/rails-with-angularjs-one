### Single Page Application with Rails and AngularJS

A single page application developed with Rails 5.0, Angular 1.3 and postgreSQL

The structure of Angular part of the application is based on [Angular Seed](https://github.com/angular/angular-seed)
### Brief log for the generation of the basic application

1. Generate a new rails app (here 'rorangone', with postgreSQL as database). 

   (PostgreSQL does not need to be the database). 

2. Add the [pry gem](https://github.com/rweng/pry-rails) to Gemfile (optional)
3. Generate a 'home' controller with a single action called 'index'

    rails generate controller Home index

4. Copy the 'Angular' directory to app/assets/javascripts
5. Replace (with the version given here) app/assets/javascripts/application.js
6. Replace the 'stylesheets' directory in app/assets/stylesheets (optional)
7. Replace the 'home' directory in app/views/
8. Remove everything except '<%= yield %>' from app/views/layouts/application.html.erb
9. Route to 'home#index (config/routes.rb)

   Add routes for 'template1.html.erb' and 'template2.html.erb' (config/routes.rb)

### Application struture (abridged) 

<pre>
.
├── app
│   ├── assets
│   │   ├── images
│   │   ├── javascripts
│   │   │   ├── angular
│   │   │   │   ├── ng_controllers.js
│   │   │   │   ├── ng_directives.js
│   │   │   │   ├── ng_filters.js
│   │   │   │   ├── ng_routes.js.erb
│   │   │   │   └── ng_services.js
│   │   │   ├── application.js
│   │   │   ├── cable.js
│   │   │   └── home.coffee
│   │   └── stylesheets
│   │       ├── application.scss
│   │       ├── app.scss
│   │       ├── functions.scss
│   │       ├── home.scss
│   │       ├── mixins.scss
│   │       ├── products.scss
│   │       └── variables.scss
│   ├── controllers
│   │   ├── application_controller.rb
│   │   └── home_controller.rb
│   ├── models
│   │   └── application_record.rb
│   └── views
│       ├── home
│       │   ├── index.html.erb
│       │   ├── template1.html.erb
│       │   └── template2.html.erb
│       └── layouts
│           ├── application.html.erb
│           ├── mailer.html.erb
│           └── mailer.text.erb
├── config.ru
├── Gemfile
├── Gemfile.lock
├── Rakefile
└── README.md


</pre>

### Notes

To get the code for the basic rails-angular single-page application

    git checkout ng-rails-basic

The basic application contains just two templates 



