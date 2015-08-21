build: clean
	./build.sh

clean:
	rm -rf build

develop:
	watchify main.js -o build.js --debug
