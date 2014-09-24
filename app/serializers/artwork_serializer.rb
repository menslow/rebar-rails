class ArtworkSerializer < ActiveModel::Serializer
  attributes
    :artist_id,
    :title,
    :year,
    :intro,
    :description,
    :edition,
    :medium,
    :price,
    :image_url,
    :collectors,
    :views,
    :favorites
end