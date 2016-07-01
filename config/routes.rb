Rails.application.routes.draw do

  root 'home#index'

  devise_for :users


  namespace :api do
    post 'run_code', to: 'lessons#run_code'
    resources :classrooms
    resources :friends, only: [:index]
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # KEEP THIS AT BOTTOM
  get '*unmatched_route', to: 'home#index'
end
