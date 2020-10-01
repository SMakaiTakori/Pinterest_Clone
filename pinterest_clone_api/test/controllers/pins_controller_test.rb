require 'test_helper'

class PinsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pin = pins(:one)
  end

  test "should get index" do
    get pins_url, as: :json
    assert_response :success
  end

  test "should create pin" do
    assert_difference('Pin.count') do
      post pins_url, params: { pin: { img_description: @pin.img_description, img_link: @pin.img_link, owner: @pin.owner } }, as: :json
    end

    assert_response 201
  end

  test "should show pin" do
    get pin_url(@pin), as: :json
    assert_response :success
  end

  test "should update pin" do
    patch pin_url(@pin), params: { pin: { img_description: @pin.img_description, img_link: @pin.img_link, owner: @pin.owner } }, as: :json
    assert_response 200
  end

  test "should destroy pin" do
    assert_difference('Pin.count', -1) do
      delete pin_url(@pin), as: :json
    end

    assert_response 204
  end
end
