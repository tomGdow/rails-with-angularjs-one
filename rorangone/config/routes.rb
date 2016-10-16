Rails.application.routes.draw do
	get 'home/index'

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

	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end 
