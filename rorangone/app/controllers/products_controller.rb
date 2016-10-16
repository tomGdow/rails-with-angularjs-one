class ProductsController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :set_product, only: [:show, :edit, :update, :destroy]

	# GET /products
	# GET /products.json
	def index
		@products = Product.all
	end

	# GET /products/1
	# GET /products/1.json
	def show
		respond_to :html, :json, :js
	end

	# GET /products/new
	def new
		@product = Product.new
	end

	# GET /products/1/edit
	def edit
	end

	# POST /products
	# POST /products.json
	def create
		@product = Product.new(product_params)

		respond_to do |format|
			if @product.save
				format.html { redirect_to @product, notice: 'Product was successfully created.' }
				format.json { render :show, status: :created, location: @product }
				format.js { flash.now[:notice] = "Product was successfully created" }
			else
				format.html { render :new }
				format.json { render json: @product.errors, status: :unprocessable_entity }
				format.js { render :action => "createErr.js.erb" }
			end
		end
	end

	# PATCH/PUT /products/1
	# PATCH/PUT /products/1.json
	def update
		respond_to do |format|
			if @product.update(product_params)
				format.html { redirect_to @product, notice: 'Product was successfully updated.' }
				format.json { render :show, status: :ok, location: @product }
				format.js { flash.now[:notice] = "Product was successfully updated" }
			else
				format.html { render :edit }
				format.json { render json: @product.errors, status: :unprocessable_entity }
				format.js { render :action => "updateErr.js.erb" }
			end
		end
	end

	# DELETE /products/1
	# DELETE /products/1.json
	def destroy
		@product.destroy
		respond_to do |format|
			format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
			format.json { head :no_content }
			format.js { flash.now[:notice] = "Product was successfully destroyed" }
		end
	end

	private
	# Use callbacks to share common setup or constraints between actions.
	def set_product
		@product = Product.find(params[:id])
	end

	# Never trust parameters from the scary internet, only allow the white list through.
	def product_params
		params.require(:product).permit(:name, :description, :price)
	end
end
