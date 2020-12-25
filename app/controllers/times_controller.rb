class TimesController < ApplicationController
  def index
    @music = Music.new
    if Music.last == nil
      Music.create(workbgm_id: 1, breakbgm_id: 1) 
    end
    @selectmusic = Music.last
  end

  def create
    @music = Music.new(music_params)
    if @music.save
      @selectmusic = Music.last
      redirect_to times_path(@selectmusic)
    else
      render :index
    end
  end

  def destroy
    Music.delete_all
    redirect_to times_path
  end

  private

  def music_params
    params.require(:music).permit(:workbgm_id, :breakbgm_id)
  end
end
