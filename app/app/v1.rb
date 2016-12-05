class V1 < Grape::API

	mount V1::Words

	add_swagger_documentation(
		base_path: "/api/v1",
		hide_documentation_path: true
		)
end