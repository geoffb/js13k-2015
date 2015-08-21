# Build/minify/mangle JavaScript
browserify lib/main.js -o build.js
uglifyjs build.js \
	-o build.js --overwrite \
	--compress unsafe,screw_ie8,hoist_vars \
	--mangle toplevel \
	--mangle-props

# Copy files to build folder
mkdir -p build
cp -R index.html build.js media build
cd build

# Compress images using pngcrush
# TODO: The $line variable is coming out blank
#find build -name '*.png' | while read line; do pngcrush -ow -brute "$line"; done

# Compress files into final zip package
# Options: quiet, recursive, best compression
zip -qr9 package.zip index.html build.js media

# Output the package size
ls -l package.zip
