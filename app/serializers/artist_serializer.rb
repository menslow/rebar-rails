class ArtistSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :bio
end