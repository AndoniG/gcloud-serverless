/* Máquinas Virtuales de Google (Serve Just React App)
1. Creamos la máquina virtual en Google Cloud - Compute Engine (UBUNTU)
2. Accesamos mediante ssh a la instancia.
3. Actualizamos los paquetes con - sudo apt update
4. Instalamos node y npm - sudo apt install nodejs | sudo apt install npm
5. Instalamos nginx para servir el proyecto - sudo apt-get install nginx
6. Vamos a /etc/nginx/sites-available/ y copiamos el contenido de 'default' - sudo cp default ./example
7. Editamos el contenido para servir el proyecto de react.
*/
