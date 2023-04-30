# Reference: This file was taken from Chris Scully's code for the guest Docker lecture.

FROM mongo:6

COPY dump /dump

# This command takes over 200 seconds!
RUN mongod --fork --logpath /var/log/mongodb.log; \
    mongorestore /dump  && \
    mongod --shutdown
# RUN mongorestore -d mydatabase /dump
EXPOSE 27017
