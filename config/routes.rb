Rails.application.routes.draw do
  get 'time/index'
  root to: "messages#index"
end
