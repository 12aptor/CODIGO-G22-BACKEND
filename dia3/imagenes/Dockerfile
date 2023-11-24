#imagen base
FROM ubuntu

#ejecutamos comandos
RUN apt update
RUN apt install python3 python3-dev -y

COPY index.html .

CMD python3 -m http.server 5000

EXPOSE 5000