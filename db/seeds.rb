Occasion.destroy_all

10.times do
    Occasion.create(
      name: Faker::Music.band,
      description: Faker::Lorem.sentence,
      time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
      additional_info: Faker::Lorem.sentence,
    )
  end
  
  puts "10 Events Seeded"
  