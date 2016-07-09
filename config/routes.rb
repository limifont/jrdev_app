Rails.application.routes.draw do

  root 'home#index'

  namespace :api do
    get 'classroom_jrdevs/:id', to: 'classroom_jrdevs#index', as: 'classroom_jrdevs'
    get 'show_stats/:id', to: 'users#show_stats', as: 'show_stats'

    get 'student_stats/:id', to: 'classrooms#student_stats', as: 'student_stats'
    resources :friends, only: [:index]
    resources :mentors, controller: 'users', type: 'Mentor'
    resources :educators, controller: 'users', type: 'Educator'
    resources :jrdevs, controller: 'users', type: 'Jrdev'
    resources :mentors_jrdevs, only: [:index, :create, :destroy]
    resources :classrooms
    resources :classroom_jrdevs, only: [:create, :destroy]
    resources :completed_lessons, only: [:index, :create]
    resources :completed_exercises, only: [:index, :create]

    resources :lessons do
      resources :exercises
    end
    
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # KEEP THIS AT BOTTOM
  get '*unmatched_route', to: 'home#index'

end
