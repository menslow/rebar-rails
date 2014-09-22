class Api::V1::ProjectsController < ApplicationController
  respond_to :json

  def index
    respond_with Project.all
  end

  def show
    respond_with project
  end

  def create
    respond_with :api, :v1, Project.create(project_params)
  end

  def update
    respond_with project.update(project_params)
  end

  def destroy
    respond_with project.destroy
  end

  private

  def project
    Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :description, :active)
  end

end