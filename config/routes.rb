Rails.application.routes.draw do
  get '/' => 'sessions#welcome', as: 'welcome'

  get '/auth/facebook/callback' => 'sessions#create'

  get '/signin' => 'sessions#new', as: 'signin'
  post '/login' => 'sessions#login'
  delete '/signout' => 'sessions#destroy'

  resources :items, only: [:index]

  resources :users, only: [:new, :show, :create]
  resources :kits do
      resources :items, only: [:new, :create, :edit, :update, :destroy]
    end

end
