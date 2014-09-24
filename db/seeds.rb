# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.destroy_all

categories = Category.create([
  { name: 'Landscape', slug: 'landscape' },
  { name: 'Cityscape', slug: 'cityscape' },
  { name: 'Abstract', slug: 'abstract' },
  { name: 'Humor', slug: 'humor' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Animals', slug: 'animals' },
  { name: 'text', slug: 'text' },
  { name: 'Figurative', slug: 'figurative' },
  { name: 'Anime', slug: 'anime' },
  { name: 'Pattern', slug: 'pattern' },
  { name: 'Geometric', slug: 'geometric' },
  { name: 'Street Art', slug: 'street-art' },
  { name: 'Illustration', slug: 'illustration' },
])
