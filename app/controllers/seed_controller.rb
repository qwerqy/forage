class SeedController < ApplicationController
  def create
    @seed = Seed.new(seed_params)
    if @seed.save
      redirect_to root_path
    else
      render json: @seed.errors, status: :unprocessable_entity
    end
  end

  private

  def seed_params
    params.require(:seed).permit(
      :description
    )
  end
end
