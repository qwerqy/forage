class WallController < ApplicationController
  def index
  end

  def reloader
    respond_to do |format|
      format.html { render partial: 'wall/show'}
    end
  end
end
