class Workbgm < ActiveHash::Base
  self.data = [
    { id: 1, name: '波の音' },
    { id: 2, name: '雨の音' },
    { id: 3, name: 'カフェ店内' },
    { id: 4, name: 'BGM無し' }
  ]
  include ActiveHash::Associations
  belongs_to :articles
end