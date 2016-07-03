if Rails.env.development?
	replit = "#{Rails.root}/config/replit.yml"
	if File.exists? replit
		config = YAML.load_file(replit)
		config.each { |key, value| ENV[key] = value }
	else
		raise "You must create a replit.yml file and put your repl it API secret in it"
	end
end