.PHONY: %
.DEFAULT_GOAL := up

dev:
	@cd src/backend/src; npm start dev

production:
	@cd src/backend/src; npm start prod

mongo:
	sudo service mongod start