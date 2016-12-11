Rails.application.routes.draw do
  root "home#index" 
	namespace :api do
		mount API => '/'
    #if Rails.env.development?
    mount GrapeSwaggerRails::Engine => '/v1/swagger'
end
end
