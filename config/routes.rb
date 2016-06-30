Rails.application.routes.draw do
  devise_for :users
  root 'home#index'

  get '*unmatched_route', to: 'home#index'
end
