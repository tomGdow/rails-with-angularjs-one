Rails.application.routes.draw do

	root to: 'home#index'

	resources :products do
		collection do
			get 'sport', defaults: {format: :json}
			get 'outdoor', defaults: {format: :json}
			get 'household', defaults: {format: :json}
		end
	end

	get "home/template1"
	get "home/template2"
	get "home/template3"
	get "home/template4"
	get "home/template5"
	get "home/template6"
	get "home/template7"
	get "home/template8"
	get "home/template9"

	get "home/tablep"

	get "home/navbar"
	get "home/subnavbar"
	get "home/infong"

	get '/view1' => redirect('#view1')
	get '/view2' => redirect('#view2')
	get '/view3' => redirect('#view3')
	get '/view4' => redirect('#view4')

	get '/sport' => redirect('#view7')
	get '/outdoor' => redirect('#view8')
	get '/household' => redirect('#view9')

end 
