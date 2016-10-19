
### Single Page Application with Rails and AngularJS

A 'skeleton' single-page [application](http://rangone.tomgdow.com)  with full asynchronous CRUD functionality, developed with
 Rails 5.0, AngularJS 1.5.x  and PostgreSQL

The structure of the AngularJS part of the application is based on [Angular Seed](https://github.com/angular/angular-seed)

### Deployment

 http://rangone.tomgdow.com

### Brief log for the generation of a basic Rails/AngularJS App

  Clone the repository and check out the 'rails-ng-basic' branch

       git clone https://github.com/tomGdow/rails-with-angularjs-one.git
       git checkout rails-ng-basic
       cd rorangular
       rails s
       localhost:3000   # from browser

  To generate a Rails/AngularJS app based on 'rails-ng-basic' 

  1.   Generate a new rails app 

       `rails new <app-name>`

       Or, with postgreSQL as database:

       `rails new <app-name> -d postgresql` 
  
       (Here, 'rorangular', with postgreSQL) 

  2.   Add the [angular-rails](https://rubygems.org/gems/angularjs-rails/) gem to Gemfile
  3.   Add the [pry](https://github.com/rweng/pry-rails) gem to Gemfile (development branch) [optional]
  4.   Generate a 'home' controller with a single action called 'index'

       `rails generate controller Home index`

  5.   Copy the 'angular' directory to app/assets/javascripts
  6.   Replace (with the version given here) app/assets/javascripts/application.js
  7.   Replace the 'stylesheets' directory in app/assets/stylesheets (optional)
  8.   Replace the 'home' directory in app/views/
  9.   Remove everything except '<%= yield %>' from app/views/layouts/application.html.erb
  10.  Route to 'home#index (config/routes.rb)

  11.  Add routes for 'template1.html.erb' and 'template2.html.erb' (config/routes.rb)

 To continue beyond the basic app, add the following scaffold (or equivalent)
      to implement CRUD functionality: 

      rails generate scaffold Product name:string description:text price:float

### Application struture (abridged) 

  The application struture for branch 'dry-crud-single-page-app'
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
│   │   │   └── products.coffee
│   │   └── stylesheets
│   │       ├── application.scss
│   │       ├── app.scss
│   │       ├── functions.scss
│   │       ├── home.scss
│   │       ├── mixins.scss
│   │       ├── navbar.scss
│   │       ├── products.scss
│   │       ├── scaffolds.scss
│   │       └── variables.scss
│   ├── controllers
│   │   ├── application_controller.rb
│   │   ├── home_controller.rb
│   │   └── products_controller.rb
│   ├── models
│   │   ├── application_record.rb
│   │   └── product.rb
│   └── views
│       ├── home
│       │   ├── index.html.erb
│       │   ├── infong.html
│       │   ├── navbar.html
│       │   ├── template1.html.erb
│       │   ├── template2.html.erb
│       │   ├── template3.html.erb
│       │   ├── template4.html.erb
│       │   ├── template5.html.erb
│       │   └── template6.html.erb
│       ├── layouts
│       │   ├── application.html.erb
│       │   ├── mailer.html.erb
│       │   └── mailer.text.erb
│       └── products
│           ├── createErr.js.erb
│           ├── create.js.erb
│           ├── destroy.js.erb
│           ├── edit.html.erb
│           ├── _editPartial.html.erb
│           ├── _form.html.erb
│           ├── index.html.erb
│           ├── index.json.jbuilder
│           ├── new.html.erb
│           ├── _newPartial.html.erb
│           ├── _noticeBanner.html.erb
│           ├── _product.json.jbuilder
│           ├── show.html.erb
│           ├── show.json.jbuilder
│           ├── updateErr.js.erb
│           └── update.js.erb
├── config.ru
├── Gemfile
├── Gemfile.lock
└── Rakefile
</pre>

## Branches

To get the code, clone the repository and checkout the relevant branch.

    git checkout -b rails-ng-basic  # basic single page application  with 2 templates

    git checkout -b add-ng-functionality # single page app with extended Angular functionality

    git checkout -b single-page-app-with-crud # single page application with full CRUD functionality 

    git checkout -b dry-crud-single-page-app # (this version) single page application with DRYer CRUD 

**rails-ng-basic**

> A basic single page application combining Rails and AngularJS (with postgreSQL as database)

**add-ng-functionality**

> A single page application with extended AngularJS functionality.

**single-page-app-with-crud**

> All Rails CRUD functionality done by AJAX (using AngularJS), but not in a  very DRY fashion. Products are shown
by retrieving the data as both JSON and HTML, for example. 

**dry-crud-single-page-app**

> A single page application where  Rails CRUD functionality is implemented asynchronously in DRYer fashion. 

## Notes

    Angular.version.full    # (from Browser console)

> "1.5.6"
