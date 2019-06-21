Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/about', to: 'pages#about'
  get '/projects', to: 'pages#projects'
  get '/experience', to: 'pages#experience'
end
