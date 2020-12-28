class Workbgm < ActiveHash::Base
  self.data = [
    { id: 1, name: '1.波の音' },
    { id: 2, name: '2.雨の音' },
    { id: 3, name: '3.カフェ店内' },
    { id: 4, name: '4.BGM無し' }
  ]
  include ActiveHash::Associations
  belongs_to :articles
end