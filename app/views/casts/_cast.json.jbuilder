json.extract! cast, :id, :title, :url, :created_at, :updated_at
json.url cast_url(cast, format: :json)
