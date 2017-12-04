Rails.application.routes.draw do
  resources :users
  resources :items
  resources :kits
  root 'sites#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
