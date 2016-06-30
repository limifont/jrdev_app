Rails.application.routes.draw do
  namespace :api do
  get 'friendships/index'
  end

  namespace :api do
  get 'classrooms/index'
  end

  namespace :api do
  get 'classrooms/show'
  end

  namespace :api do
  get 'classrooms/new'
  end

  namespace :api do
  get 'classrooms/edit'
  end

  devise_for :users
  root 'home#index'
  get '*unmatched_route', to: 'home#index'
end
