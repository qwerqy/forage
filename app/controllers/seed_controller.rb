class SeedController < ApplicationController
  def create
    @seed = Seed.new(seed_params)
    if @seed.save
      redirect_back(fallback_location: root_path)
    else
      flash[:danger] = "Something went wrong (#{@seed.errors.full_messages.to_sentence})"
      redirect_back(fallback_location: root_path)
    end
  end

  private

  def seed_params
    params.require(:seed).permit(
      :description
    )
  end
end
