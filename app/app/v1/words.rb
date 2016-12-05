require 'natto'

class V1::Words < V1::Base

	resource :words do
		desc "morphological analysis api"
		params do
			requires :sentence, type: String, desc: 'Sentence'
		end
		get jbuilder: 'v1/words/index' do

			words = [] 

			mecab = Natto::MeCab.new  
			mecab.parse(params[:sentence]) do |n|

				if /^名詞/ =~ n.feature.split(/,/)[0] || /^形容詞/ =~ n.feature.split(/,/)[0] then
					if words.include?(n.surface) == false then
						words.push(n.surface)
					end
				end
			end

			@words = [words:words]
		end
	end
end