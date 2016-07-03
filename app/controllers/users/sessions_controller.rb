class Users::SessionsController < Devise::SessionsController
# before_action :configure_sign_in_params, only: [:create]
  respond_to :json
  skip_before_action :verify_authenticity_token

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    self.resource = warden.authenticate!(auth_options)
    set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, resource)
    yield resource if block_given?
    token_info = gen_token
    render json: {id: current_user.id, api_key: current_user.api_key, type: current_user.type, repl_token: token_info}
  end

  private

  def gen_token
    digest = OpenSSL::Digest.new('sha256')
    binding.pry
    secret = ENV['REPL_SECRET']
    time_created = Time.now.to_i * 1000 # convert to ms
    hmac = OpenSSL::HMAC.digest(digest, secret, time_created.to_s)
    token = {
        msg_mac: Base64.encode64(hmac).strip,
        time_created: time_created
    }
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
