# Select reference image
FROM node:16.17-bullseye as builder

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL warn
ARG STORYBOOK_GOOGLE_API_KEY


# Create app directory
WORKDIR /shared

RUN echo pwd

# Copy project files into the docker image
COPY . .


# Install app dependencies
RUN npm set progress=false && npm install
RUN npm run build

FROM nginx:1.21.1-alpine

WORKDIR /usr/share/nginx/html/

RUN rm -fr * .??*

COPY --from=builder /shared/nginx/default.conf /etc/nginx/conf.d/

COPY --from=builder /shared/storybook-static /usr/share/nginx/html

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'