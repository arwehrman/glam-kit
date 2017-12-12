Rails.application.routes.draw do
  get '/' => 'sessions#welcome', as: 'welcome'

  get '/auth/facebook/callback' => 'sessions#create'

  get '/signin' => 'sessions#new', as: 'signin'
  post '/login' => 'sessions#login'
  post '/signout' => 'sessions#destroy'

  resources :items
  resources :users, only: [:new, :show, :create]  do
    resources :kits
  end


end
