Rails.application.routes.draw do

	root to: 'home#index'
	resources :products


	get "home/template1"
	get "home/template2"
	get "home/template3"
	get "home/template4"
	get "home/template5"
	get "home/template6"

	get "home/navbar"
	get "home/infong"

	get '/view1' => redirect('#view1')
	get '/view2' => redirect('#view2')
	get '/view3' => redirect('#view3')
	get '/view4' => redirect('#view4')

	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end 
