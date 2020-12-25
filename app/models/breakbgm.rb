class Breakbgm < ActiveHash::Base
  self.data = [
    { id: 1, name: 'キビタキの声' },
    { id: 2, name: 'Midnight_Moon' },
    { id: 3, name: 'Like_A_Lemon' },
    { id: 4, name: 'BGM無し' }
  ]
  include ActiveHash::Associations
  belongs_to :articles
end
