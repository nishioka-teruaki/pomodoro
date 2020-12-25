Rails.application.routes.draw do
  root to: "times#destroy"
  resources :times, only: [:index, :create, :destroy]
end
