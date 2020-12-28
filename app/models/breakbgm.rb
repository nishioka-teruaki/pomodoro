class Breakbgm < ActiveHash::Base
  self.data = [
    { id: 1, name: '1.キビタキの声' },
    { id: 2, name: '2.Midnight_Moon' },
    { id: 3, name: '3.Like_A_Lemon' },
    { id: 4, name: '4.BGM無し' }
  ]
  include ActiveHash::Associations
  belongs_to :articles
end
