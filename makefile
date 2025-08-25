.PHONY: gen-styles

gen-styles:
	npx @tailwindcss/cli -i ./blocks/src/input.css -o ./sadzonkiwp9-theme/assets/css/output.css --watch