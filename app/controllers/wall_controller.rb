class WallController < ApplicationController
  def index
    @seeds = Seed.all
  end

  def reloader
    respond_to do |format|
      format.js
    end
  end
end
