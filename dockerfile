FROM nginx:1.23
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log
COPY ./vhost.conf /etc/nginx/templates/default.conf.template
COPY ./dist/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
