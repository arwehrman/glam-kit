Rails.application.routes.draw do
  get '/' => 'sessions#welcome', as: 'welcome'

  get '/auth/facebook/callback' => 'sessions#create'

  get '/signin' => 'sessions#new', as: 'signin'
  post '/signin' => 'sessions#create'
  post '/signout' => 'sessions#destroy'

  resources :items
  resources :users do
    resources :kits
  end

  
end
