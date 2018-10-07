class WallController < ApplicationController
  def index
    @seeds = Seed.order(created_at: :desc)
  end

  def reloader
    respond_to do |format|
      format.js
    end
  end
end
