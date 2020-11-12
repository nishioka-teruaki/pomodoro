Rails.application.routes.draw do
  get 'time/index'
  root to: "time#index"
end
