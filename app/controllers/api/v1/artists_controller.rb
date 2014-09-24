class Api::V1::ArtistsController < ApplicationController
  respond_to :json

  def index
    respond_with Artist.all
  end

  def show
    respond_with artist
  end

  def create
    respond_with :api, :v1, Artist.create(artist_params)
  end

  def update
    respond_with artist.update(artist_params)
  end

  def destroy
    respond_with artist.destroy
  end

  private

  def artist
    Artist.find(params[:id])
  end

  def artist_params
    params.require(:artist).permit(
      :first_name,
      :last_name,
      :bio
    )
  end

end