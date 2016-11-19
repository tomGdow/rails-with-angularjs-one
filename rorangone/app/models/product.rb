class Product < ApplicationRecord

	CATEGORY_TYPES = ['household', 'outdoor', 'sport']

	validates :name,	:presence => true

	scope :outdoor, -> {where("category = ?","outdoor")}
	scope :household, -> {where("category = ?","household")}
	scope :sport, -> {where("category = ?","sport")}

end
