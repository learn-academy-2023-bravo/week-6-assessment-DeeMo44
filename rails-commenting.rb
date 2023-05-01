# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Creating a class named BlogPostsController that will contain the actions BlogPosts for this app
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This will display all of the blog posts
    @posts = BlogPost.all
  end

  # ---3)
  # This will display one of the blog posts by finding it from its ID
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # This will create the form for creating a new BlogPost
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Once the form is submitted, It is checked to see if it passes the params
    # if it passes (is valid) user will be redirected to the new BlogPost
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # This will create the form for editing an existing BlogPost by
    # finding it by its ID
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # If the BlogPost passes the params (is valid) then it will be updated
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # This will send you to the index where you can see all of the BlogPosts
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # This is the private keyword which is used so that only methods can
  # called in the defining class
  private
  def blog_post_params
    # ---10)
    # there are the required params for creating and updating
    # it tells the table what attributes it must possess in order for an action to be done 
    params.require(:blog_post).permit(:title, :content)
  end
end
