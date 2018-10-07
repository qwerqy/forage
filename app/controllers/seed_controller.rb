class SeedController < ApplicationController
  def create
    @seed = Seed.new(seed_params)
    if @seed.save
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  private

  def seed_params
    params.require(:seed).permit(
      :description
    )
  end
end
