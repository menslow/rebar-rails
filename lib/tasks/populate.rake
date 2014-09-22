namespace :db do
  task populate: :environment do

    Project.destroy_all

    def random_active
      ['t','f'].sample
    end

    10.times do
      Project.create(
        name: Faker::HipsterIpsum.words(2).join(' '),
        description: Faker::HipsterIpsum.words(10).join(' '),
        active: random_active
      )
    end

  end

end