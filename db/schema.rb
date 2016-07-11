# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160711222700) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classroom_jrdevs", force: :cascade do |t|
    t.integer  "classroom_id"
    t.integer  "jrdev_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "classrooms", force: :cascade do |t|
    t.string   "name"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "classrooms", ["user_id"], name: "index_classrooms_on_user_id", using: :btree

  create_table "completed_exercises", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "exercise_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "completed_exercises", ["exercise_id"], name: "index_completed_exercises_on_exercise_id", using: :btree
  add_index "completed_exercises", ["user_id"], name: "index_completed_exercises_on_user_id", using: :btree

  create_table "completed_lessons", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "lesson_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "completed_lessons", ["lesson_id"], name: "index_completed_lessons_on_lesson_id", using: :btree
  add_index "completed_lessons", ["user_id"], name: "index_completed_lessons_on_user_id", using: :btree

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "delayed_jobs", ["priority", "run_at"], name: "delayed_jobs_priority", using: :btree

  create_table "exercises", force: :cascade do |t|
    t.string   "name"
    t.text     "instruction"
    t.string   "prefill"
    t.string   "expected_output"
    t.string   "expected_code"
    t.integer  "position"
    t.integer  "lesson_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "exercises", ["lesson_id"], name: "index_exercises_on_lesson_id", using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lessons", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mentors_jrdevs", force: :cascade do |t|
    t.integer  "mentor_id"
    t.integer  "jrdev_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "mentors_jrdevs", ["jrdev_id"], name: "index_mentors_jrdevs_on_jrdev_id", using: :btree
  add_index "mentors_jrdevs", ["mentor_id"], name: "index_mentors_jrdevs_on_mentor_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "type"
    t.string   "username"
    t.string   "name"
    t.string   "api_key"
    t.string   "secret_phrase"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "classrooms", "users"
  add_foreign_key "completed_exercises", "exercises"
  add_foreign_key "completed_exercises", "users"
  add_foreign_key "completed_lessons", "lessons"
  add_foreign_key "completed_lessons", "users"
  add_foreign_key "exercises", "lessons"
end
