# Name comparator

Website to allow upcoming parents to compare their chosen name with other parents to be, without sharing the actual names.

It takes a name as input and returns an MD5-hash of that name, after being stripped from accents, non-word characters and captitalization.

## Used technology

This website is built with Next.js, is statically served and runs entirely in the browser.

## Hashing

This website hashes the name with SHA-224 and then MD5 (to make it shorter). The result of this is a string that cannot be Googled, as opposed to just MD5 hashes.

## Images

Images are made by [Katerina Limpitsouni](https://twitter.com/ninaLimpi).
