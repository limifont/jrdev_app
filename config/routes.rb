Rails.application.routes.draw do

  root 'home#index'

  namespace :api do
    post 'run_code', to: 'lessons#run_code'
    resources :friends, only: [:index]
    resources :mentors, controller: 'users', type: 'Mentor'
    resources :educators, controller: 'users', type: 'Educator'
    resources :jrdevs, controller: 'users', type: 'Jrdev'
    resources :mentors_jrdevs, only: [:index, :create]
    resources :classrooms
    resources :lessons do
      resources :exercises
    end
    resources :completed_lessons, only: [:index, :create]
    resources :completed_exercises, only: [:index, :create]
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # KEEP THIS AT BOTTOM
  get '*unmatched_route', to: 'home#index'
end
