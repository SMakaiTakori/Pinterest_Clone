class PinsController < ApplicationController
  before_action :set_pin, only: [:show, :update, :destroy]

  # GET /pins
  def index
    @pins = Pin.all

    render json: @pins
  end

  # GET /pins/1
  def show
    render json: @pin
  end

  # POST /pins
  def create
    @pin = Pin.new(pin_params)

    if @pin.save
      render json: @pin, status: :created, location: @pin
    else
      render json: @pin.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pins/1
  def update
    if @pin.update(pin_params)
      render json: @pin
    else
      render json: @pin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pins/1
  def destroy
    @pin.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pin
      @pin = Pin.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def pin_params
      params.require(:pin).permit(:owner, :img_link, :img_description)
    end
end
