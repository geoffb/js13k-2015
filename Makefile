clean:
	rm -rf build

build: clean
	mkdir build
	browserify game.js -o build/build.js
	uglifyjs build/build.js -o build/build.js --overwrite
	cp index.html build/index.html

develop:
	watchify game.js -o build.js --debug
