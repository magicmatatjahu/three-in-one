# yes, I'll be using docker here, I don't wat to have this python #$%% on my laptop
FROM python:3.7.4-alpine3.10

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000
CMD [ "python", "./django_graphql/manage.py", "runserver", "0.0.0.0:8000"]