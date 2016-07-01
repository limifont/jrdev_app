Rails.application.routes.draw do

  root 'home#index'

  devise_for :users


  namespace :api do
    post 'run_code', to: 'lessons#run_code'
    resources :classrooms
    resources :friends, only: [:index]
  end

  get '*unmatched_route', to: 'home#index'
end
