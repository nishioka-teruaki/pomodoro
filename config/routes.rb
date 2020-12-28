Rails.application.routes.draw do
  devise_for :users
  root to: "times#destroy"
  resources :times, only: [:index, :create, :destroy]
end
