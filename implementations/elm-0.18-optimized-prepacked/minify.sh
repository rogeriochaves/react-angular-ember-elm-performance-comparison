set -e

elm make Todo.elm --output elm.js

# prepack
sed -e "5445,5449d" -i.bak elm.js # fix: remove duplicated badIndex function declaration
prepack elm.js --out elm.prepacked.js
sed -e "s/Elm =/this['Elm'] =/" -i.bak elm.prepacked.js # fix: reexport Elm to be available on window

# closure compiler
java -jar node_modules/google-closure-compiler/compiler.jar --js elm.prepacked.js --compilation_level SIMPLE --js_output_file elm.prepacked.closured.js

echo "Todo MVC results"
du -h *.js
