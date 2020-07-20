/* Máquinas Virtuales de Google (Serve Just React App)
1. Creamos la máquina virtual en Google Cloud - Compute Engine (UBUNTU)
2. Accesamos mediante ssh a la instancia.
3. Actualizamos los paquetes con - sudo apt update -y
4. Instalamos node y npm - sudo apt install nodejs | sudo apt install npm
5. Instalamos nginx para servir el proyecto - sudo apt-get install nginx
6. Vamos a /etc/nginx/sites-available/ y copiamos el contenido de 'default' - sudo cp default ./example
7. Editamos el contenido para servir el proyecto de react.
server {
   listen 80 default_server;
   root /var/www/[Your repo name]/(build | public);
   server_name [your.domain.com] [your other domain if you want to];
   index index.html index.htm;
   location / {
   }
}
 location /files/ { 
   autoindex on;
   root /var/www/[your repo name]/files;
}

8. Clonamos el repositorio en la ruta /var/www/
9. Reiniciamos nginx usando el comando sudo service nginx restart
    http://35.238.245.161/
*/
