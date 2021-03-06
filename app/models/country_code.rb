# -*- coding:utf-8 -*-
class CountryCode < ActiveRecord::Base
  attr_accessible :name, :code

  # コンスタントマスタからデータを取得する
  # === Args
  # === Return
  # CountryCodeハッシュオブジェクト {:code=>:name, :code=>:name}
  def self.hash_for_selectbox
    country_list = {}
    countries = CountryCode.all
    countries.each do |c|
      country_list[c.code] = c.name
    end
    return country_list
  end

end