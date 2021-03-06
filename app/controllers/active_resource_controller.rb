# -*- coding:utf-8 -*-
class ActiveResourceController < ApplicationController
  
  # ActiveResource[LGDPF <=> LGDPM]
  # People取得処理
  # ==== Args
  # ==== Return
  # ==== Raise
  def people
    @people = Person.where(:link_flag => false)
    
    respond_to do |format|
      format.json { render :json => @people.to_json }
    end
  end
  
  # ActiveResource[LGDPF <=> LGDPM]
  # Person登録処理
  # ==== Args
  # _person_ :: 避難者情報
  # ==== Return
  # ==== Raise
  def people_create
    @person = Person.new(params[:person])
    
    if @person.save
      respond_to do |format|
        format.json { render :json => @person.to_json }
      end
    else
      respond_to do |format|
        format.json { render :json => @person.to_json, :status => :internal_server_error }
      end
    end
  end
  
  # ActiveResource[LGDPF <=> LGDPM]
  # People更新処理
  # ==== Args
  # _id_ :: 避難者ID
  # ==== Return
  # ==== Raise
  def people_update
    @person = Person.find(params[:id])
    
    if @person.update_attributes(:link_flag => true)
      respond_to do |format|
        format.json { render :json => @person.to_json }
      end
    else
      respond_to do |format|
        format.json { render :json => @person.to_json, :status => :internal_server_error }
      end
    end
  end
  
  # ActiveResource[LGDPF <=> LGDPM]
  # Note取得処理
  # ==== Args
  # _person_record_id_ :: 避難者ID
  # ==== Return
  # ==== Raise
  def notes
    @notes = Note.where(:person_record_id => params[:person_record_id], :link_flag => false).order("created_at DESC")
      
    respond_to do |format|
      format.json { render :json => @notes.to_json }
    end
  end
  
  # ActiveResource[LGDPF <=> LGDPM]
  # Note登録処理
  # ==== Args
  # _note_ :: 安否情報
  # ==== Return
  # ==== Raise
  def notes_create
    @note = Note.new(params[:note])
    
    if @note.save
      respond_to do |format|
        format.json { render :json => @note.to_json }
      end
    else
      respond_to do |format|
        format.json { render :json => @note.to_json, :status => :internal_server_error }
      end
    end
  end
  
  # ActiveResource[LGDPF <=> LGDPM]
  # Note更新処理
  # ==== Args
  # _id_ :: 安否情報ID
  # ==== Return
  # ==== Raise
  def notes_update
    @note = Note.find(params[:id])
    
    if @note.update_attributes(:link_flag => true)
      respond_to do |format|
        format.json { render :json => @note.to_json }
      end
    else
      respond_to do |format|
        format.json { render :json => @note.to_json, :status => :internal_server_error }
      end
    end
  end
end
