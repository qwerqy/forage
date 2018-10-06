class WallController < ApplicationController
  def index
  end

  def reloader
    respond_to do |format|
      format.js
    end
  end
end
