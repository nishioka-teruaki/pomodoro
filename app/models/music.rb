class Music < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :workbgm
  belongs_to :breakbgm

  # belongs_to :user　※ログインしていなくてもDBに保存するためコメントアウト（バリデーション回避）
end
