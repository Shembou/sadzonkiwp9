.PHONY: gen-styles,mailhog

gen-styles:
	npx @tailwindcss/cli -i ./blocks/src/input.css -o ./sadzonkiwp9-theme/assets/css/output.css --watch

mailhog:
	docker build -t "mailhog" ./blocks && docker run -p 1025:1025 -p 8025:8025 mailhog