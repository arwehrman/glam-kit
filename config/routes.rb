Rails.application.routes.draw do
  get '/' => 'sessions#welcome', as: 'welcome'
  get '/signin' => 'sessions#new', as: 'signin'
  post '/signin' => 'sessions#create'
  post '/signout' => 'sessions#destroy'
  
  resources :items
  resources :kits
  resources :users

end
