build: clean
	./build.sh

clean:
	rm -rf build

develop:
	watchify lib/main.js -o build.js --debug
