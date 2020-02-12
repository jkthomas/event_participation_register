.PHONY: %
.DEFAULT_GOAL := up

mongo_up:
	sudo service mongod start

mongo_down:
	sudo service mongod stop

dev:
	@cd src/backend; yarn dev

production:
	@cd src/backend; yarn prod

test:
	@cd src/backend; yarn test

client:
	@cd src/frontend; yarn start