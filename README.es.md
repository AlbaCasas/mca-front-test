⚠️ **WARNING: Antes de ejecutar la aplicación, asegúrese de visitar [CORS Anywhere](https://cors-anywhere.herokuapp.com/) y habilitar el demo server (click en el botón de la web). De no hacerlo, todos los fetch fallarán** ⚠️

# Prueba Técnica para MCA

Esta es una prueba técnica desarrollada por Alba Casas Arzúa como parte del proceso de entrevistas para MCA.

Consiste en un reproductor de podcasts con las siguientes features:

- Lista los 100 mejores podcasts de iTunes.
- Permite a los usuarios filtrar estos podcasts por nombre y autor.
- Proporciona acceso a cada podcast y muestra los episodios disponibles.
- Permite a los usuarios reproducir los episodios.

## Stack Tecnológico

Esta aplicación web ha sido desarrollada con las siguientes tecnologías:

- React
- React-Router para la navegación SPA
- React-Query como solución para el fetch y caché de datos (por el requisito de mantener una caché local de 24 horas)
- TailwindCSS como solución para inline styling
- Webpack para bundlear la aplicación en diferentes modos

Todo el código ha sido escrito en TypeScript para garantizar la seguridad de los tipos.

## Consideraciones

He tenido que realizar algunos cambios debido a limitaciones con iTunes y mi stack tecnológico. Principalmente estos:

- El spinner de loading en la cabecera se muestra cuando hay un fetch, EN LUGAR de cuando se navega. Esto se debe a que la navegación con React es casi inmediata.
- Las descripciones de los podcasts las extraígo de la propiedas `feedUrl` de la API de iTunes.
  Al momento de desarrollar esta prueba, el endpoint `/lookup` no devolvía una propiedad `description` o `summary` para la entidad de podcast. Aun así quería cumplir los acceptance criteria, así que pude extraerla del sitio web del podcast.

## Ejecución de los Tests

He incluido tests de aceptación para los principales criterios descritos en el PDF de la prueba técnica.

He desarrollado los tests usando Vitest, React Testing Library y MSW como servidor mock para la API de itunes.

Para ejecutar los tests, sigue estos pasos:

1. Abre una terminal en el directorio raíz del proyecto.
2. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

3. Ejecuta los tests con el siguiente comando:

```bash
npm run test
```

## Ejecución de la Aplicación

### Modo Desarrollo

En el modo de desarrollo, los assets se sirven sin minimizar.

Para ejecutar la aplicación en modo de desarrollo, sigue estos pasos:

1. Clona el repositorio en local
2. Estoy usando CORS-Anywhere para evitar problemas de CORS con la API de iTunes, por lo que es posible que necesites visitar https://cors-anywhere.herokuapp.com/ y hacer click en "Request temporary access to the demo server" para que la aplicación pueda hacer fetch de iTunes
3. Abre una terminal en la raíz del proyecto
4. Ejecuta el siguiente comando para instalar dependencias

```bash
npm install
```

5. Después de instalar dependencias, ejecuta el servidor de desarrollo

```bash
npm start
```

Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador

### Modo Producción

En el modo de producción, los assets se sirven minimizados para mayor eficiencia.

Para ejecutar la aplicación en modo de producción, sigue estos pasos:

1. Clona el repositorio en local
2. Estoy usando CORS-Anywhere para evitar problemas de CORS con la API de iTunes, por lo que es posible que necesites visitar https://cors-anywhere.herokuapp.com/ y hacer click en "Request temporary access to the demo server" para que la aplicación pueda hacer fetch de iTunes
3. Abre una terminal en la raíz del proyecto
4. Ejecuta el siguiente comando para instalar dependencias

```bash
npm install
```

5. Después de instalar dependencias, ejecuta el servidor de producción

```bash
npm run start:prod
```

Esto iniciará el servidor de producción y abrirá la aplicación en tu navegador

## Otros Comandos

- `npm build`: Este comando bundlea la aplicación en assets minimizados para desplegarlos en un servidor web.
