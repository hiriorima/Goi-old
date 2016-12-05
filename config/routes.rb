Rails.application.routes.draw do
	namespace :api do
		mount API => '/'
    #if Rails.env.development?
    mount GrapeSwaggerRails::Engine => '/v1/swagger'
end
end
