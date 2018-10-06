Rails.application.routes.draw do
  get '/' => 'wall#index'
  root 'wall#index'

  resources :seed, only: [:create, :show]
  get '/reloader' => 'wall#reloader'
end
