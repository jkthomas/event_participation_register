.PHONY: %
.DEFAULT_GOAL := up

dev:
	@cd src/backend/src; npm run dev

production:
	@cd src/backend/src; npm run prod

mongo_up:
	sudo service mongod start

mongo_down:
	sudo service mongod stop

test:
	@cd src/backend/src; npm run test