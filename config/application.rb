require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module Goi
	class Application < Rails::Application

		config.active_record.raise_in_transactional_callbacks = true

		config.paths.add File.join('app', 'api'), glob: File.join('**', '*.rb')
		config.autoload_paths += Dir[Rails.root.join('app', 'api', '*')]

		config.middleware.use(Rack::Config) do |env|
			env['api.tilt.root'] = Rails.root.join 'app', 'views', 'api'
		end
		end
	end