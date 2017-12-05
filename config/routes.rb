Rails.application.routes.draw do

  resources :items
  resources :kits
  resources :users, only: [:index, :new, :create]
  resources :sessions, only: [:new, :create]
  root 'sites#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
