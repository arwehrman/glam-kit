Rails.application.routes.draw do
  get '/' => 'sessions#welcome', as: 'welcome'
  get '/highest_rated'=> 'items#highest_rated', as: 'highest_rated'
  get '/auth/facebook/callback' => 'sessions#create'
  get '/kits/:id/details', to:'kits#details'
  get '/signin' => 'sessions#new', as: 'signin'
  post '/login' => 'sessions#login'
  delete '/signout' => 'sessions#destroy'

  resources :items, only: [:index, :show]

  resources :users, only: [:new, :show, :create]
  resources :kits do
      resources :items, only: [:new, :create, :edit, :update, :destroy]
    end

end
