# We do it in three phases : install Node for building, build the app, and then run it in a minimal image
# 1. Install Node
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# 2. Run the app
FROM nginx
# Expose port 80 for AWS Elastic Beanstalk
EXPOSE 80
# Copy the build folder from the previous phase
COPY --from=builder /app/build /usr/share/nginx/html
# Nginx will start automatically

# To run the container locally, use the following command:
# docker run -p 8080:80 <image_id>
# Then go to localhost:8080 in your browser

