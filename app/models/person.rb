# -*- coding:utf-8 -*-
class Person < ActiveRecord::Base
  attr_accessible :entry_date, :expiry_date, :author_name, :author_email,
    :author_phone, :source_name, :source_date, :source_url,
    :full_name, :given_name, :family_name, :alternate_names, :description,
    :sex, :date_of_birth, :age, :home_street, :home_neighborhood, :home_city,
    :home_state, :home_postal_code, :home_country,
    :in_city_flag, :shelter_name, :refuge_status, :refuge_reason,
    :shelter_entry_date, :shelter_leave_date, :next_place, :next_place_phone,
    :injury_flag, :injury_condition, :allergy_flag, :allergy_cause, :pregnancy,
    :baby, :upper_care_level_three, :elderly_alone, :elderly_couple,
    :bedridden_elderly, :elderly_dementia, :rehabilitation_certificate,
    :physical_disability_certificate, :photo_url, :profile_urls, :remote_photo_url_url,
    :public_flag, :link_flag, :house_number, :notes_disabled, :email_flag

  has_many :notes

  acts_as_paranoid
  before_create :set_attributes
  mount_uploader :photo_url, PhotoUrlUploader

  validates :family_name, :presence => true # 避難者_姓
  validates :given_name, :presence => true # 避難者_名
  validates :author_name, :presence => true # レコード作成者名

  # before_createで設定する項目
  def set_attributes
    self.source_date = Time.now
    self.entry_date  = Time.now
    self.full_name   = "#{self.family_name} #{self.given_name}"
  end

  # 避難者を検索する
  # ==== Args
  # _sp_ :: 検索条件
  #
  def self.find_for_seek(sp)
    return nil if sp[:name].blank?
    
    find(:all,
      :conditions => ["(full_name LIKE :name) OR (alternate_names LIKE :name)",
        :name => "%#{sp[:name]}%"])
  end

  # 情報提供する避難者情報が既に登録されているか確認する
  # ==== Args
  # _sp_ :: 検索条件
  #
  def self.find_for_provide(sp)
    return nil if sp[:family_name].blank? || sp[:given_name].blank?
    
    find(:all,
      :conditions => ["((family_name LIKE :family_name) AND (given_name LIKE :given_name)) OR
        ((alternate_names LIKE :family_name) AND (alternate_names LIKE :given_name))",
        :family_name => "%#{sp[:family_name]}%", :given_name => "%#{sp[:given_name]}%"])
  end
  

  # 重複Noteを持っているか確認する
  # === Args
  # _pid_ :: 避難者id
  #
  def self.check_dup(pid)
    notes = Note.find_all_by_person_record_id(pid)
    notes.each do |note|
      if note.linked_person_record_id.present?
        return true
      end
    end
    return false
  end

  # 重複するpersonを抽出する
  # === Args
  # _pid_ :: 避難者id
  #
  def self.duplication(pid)
    dup_notes = Note.duplication(pid) # pidが持つ重複note
    people = []
    dup_notes.each do |note|
      people << self.find_by_id(note.linked_person_record_id)
    end
    return people
  end

  # 入力値調整
  # === Args
  # _record_ :: 避難者ハッシュ
  # === Return
  # _person_ :: 入力値調整をした避難者
  #
  def self.set_values(record)
    record[:email_flag] = record[:email_flag] == "true" ? true : false
    person = self.new(record)
    person.expiry_date = Time.now.advance(:days => record[:expiry_date].to_i)  # 削除予定日時
    person.injury_flag = person.injury_condition.present? ? 1:2  # 負傷の有無
    person.allergy_flag = person.allergy_cause.present? ? 1:2   # アレルギーの有無

    if person.home_state =~ /^(宮城)県?$/ && person.home_city =~ /^(石巻)市?$/  # 市内・市外区分
      person.in_city_flag = 1  # 市内
    else
      person.in_city_flag = 2  # 市外
    end

    return person
  end

end