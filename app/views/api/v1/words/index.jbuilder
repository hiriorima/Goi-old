json.array! @words do |word|
json.extract! word, :words
end