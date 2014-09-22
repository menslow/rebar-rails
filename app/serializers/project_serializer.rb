class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :active
end