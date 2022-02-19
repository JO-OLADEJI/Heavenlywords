# Heavenly Words
To deploy, run the following:
npm install
npm run build
(for production) Replace the contents of utils folder with prod files
aws s3 sync build/ s3://heavenlywords.io --profile <your AWS profile>
