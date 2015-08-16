clean:
	rm -rf build

build: clean
	mkdir build
	browserify main.js -o build/build.js
	uglifyjs build/build.js \
		-o build/build.js --overwrite \
		--compress unsafe,screw_ie8,hoist_vars \
		--mangle toplevel \
		--mangle-props
	cp index.html build/index.html
	cp -R media build
	# TODO: The $line variable is coming out blank
	#find build -name '*.png' | while read line; do pngcrush -ow -brute "$line"; done

develop:
	watchify main.js -o build.js --debug
