Rails.application.routes.draw do
  get '/' => 'sessions#welcome', as: 'welcome'

  get '/auth/facebook/callback' => 'sessions#create'

  get '/signin' => 'sessions#new', as: 'signin'
  post '/login' => 'sessions#login'
  post '/signout' => 'sessions#destroy'


  resources :users, only: [:new, :show, :create]
    resources :kits do
      resources :items, only: [:new, :edit, :update, :destroy] 
    end
end
