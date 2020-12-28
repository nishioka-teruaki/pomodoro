class TimesController < ApplicationController
  def index
    @music = Music.new
    if user_signed_in?
      current_user_id = Music.where(user_id: current_user.id)
      @selectmusic = current_user_id.last
      unless @selectmusic
        Music.create(workbgm_id: 1, breakbgm_id: 1) 
        @selectmusic = Music.last
      end
    else
      current_user_id = Music.where(user_id: nil)
      @selectmusic = current_user_id.last
      unless @selectmusic
        Music.create(workbgm_id: 1, breakbgm_id: 1) 
        @selectmusic = Music.last
      end
    end
  end

  def create
    if user_signed_in?
      @music = Music.new(music_params)
    else
      @music = Music.new(music_params_gest)
    end

    musicdes = Music.where(user_id: @music.user_id)
    musicdes.delete_all
    if @music.save
      @selectmusic = Music.last
      redirect_to times_path(@selectmusic)
    else
      render :index
    end
  end

  def destroy
    musicdes = Music.where(user_id: nil)
    musicdes.delete_all
    redirect_to times_path
  end

  private

  def music_params
    params.require(:music).permit(:workbgm_id, :breakbgm_id).merge(user_id: current_user.id)
  end

  def music_params_gest
    params.require(:music).permit(:workbgm_id, :breakbgm_id)
  end

end
