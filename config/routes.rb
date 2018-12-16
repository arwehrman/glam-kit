Rails.application.routes.draw do
  get '/' => 'sessions#welcome', as: 'welcome'
  get 'static_pages/about'
  get 'static_pages/contact'
  get '/signin' => 'sessions#new', as: 'signin'
  post '/login' => 'sessions#login'
  delete '/signout' => 'sessions#destroy'

  resources :items, only: [:index, :show]

  resources :users, only: [:new, :show, :create]
  resources :kits do
      resources :items, only: [:new, :create, :edit, :update, :destroy]
    end

end
