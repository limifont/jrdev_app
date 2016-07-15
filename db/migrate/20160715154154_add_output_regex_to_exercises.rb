class AddOutputRegexToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :output_regex, :boolean
    add_column :exercises, :code_regex, :boolean
  end
end
