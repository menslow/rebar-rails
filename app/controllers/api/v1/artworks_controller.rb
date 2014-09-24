class Api::V1::ArtworksController < ApplicationController
  respond_to :json

  def index
    respond_with Artwork.all
  end

  def show
    respond_with artwork
  end

  def create
    respond_with :api, :v1, Artwork.create(artwork_params)
  end

  def update
    respond_with artwork.update(artwork_params)
  end

  def destroy
    respond_with artwork.destroy
  end

  private

  def artwork
    Artwork.find(params[:id])
  end

  def artwork_params
    params.require(:artwork).permit(
      :artist_id, 
      :title, 
      :year, 
      :intro, 
      :description, 
      :edition, 
      :medium, 
      :price, 
      :image_url, 
      :collectors,
      :views,
      :favorites
    )
  end

end
