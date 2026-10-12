# fabian-camayo.github.io

Sitio personal de **Fabian Camayo**, desarrollador fullstack independiente.
Es el repositorio especial de usuario de GitHub Pages: al llamarse
`fabian-camayo.github.io`, se publica directamente en
<https://fabian-camayo.github.io/>.

## Contenido

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Página única con las secciones: perfil, habilidades, experiencia, formación, apps y contacto. |
| `note-plus/privacidad/index.html` | Política de privacidad de Note Plus, en español y en inglés. Dirección obligatoria para Google Play. |
| `note-plus/seguridad-de-datos/index.html` | Seguridad de los datos: las respuestas del formulario de Play, explicadas. |
| `note-plus/terminos/index.html` | Términos y condiciones de uso de Note Plus. |
| `note-plus/soporte/index.html` | Soporte: cómo reportar un problema y preguntas frecuentes. |
| `assets/css/styles.css` | Diseño del sitio. Tema oscuro, glassmorphism, responsive y `prefers-reduced-motion`. |
| `assets/css/legal.css` | Diseño de los documentos legales (índice lateral, prosa, tablas, impresión). |
| `assets/js/main.js` | Interacciones sin dependencias: menú móvil, revelados, barras de habilidades y contador. |
| `assets/img/favicon.svg` | Icono del sitio. |
| `404.html` | Página de error. |
| `robots.txt`, `sitemap.xml` | Para buscadores. |
| `.nojekyll` | Evita que GitHub Pages procese el sitio con Jekyll. |

No hay build, ni `npm install`, ni dependencias. HTML, CSS y JavaScript puros.

## Documentos legales de Note Plus

Google Play exige publicar la política de privacidad en una dirección abierta, estática y sin
inicio de sesión. Estas son las direcciones para la ficha del Play Console:

- Política de privacidad: `https://fabian-camayo.github.io/note-plus/privacidad/`
- Seguridad de los datos: `https://fabian-camayo.github.io/note-plus/seguridad-de-datos/`
- Términos y condiciones: `https://fabian-camayo.github.io/note-plus/terminos/`
- Soporte: `https://fabian-camayo.github.io/note-plus/soporte/`

Estos documentos **no tienen una sección propia en la página de inicio**: se llega a ellos por
su dirección directa, y desde el botón «Documentos legales» del panel de Note Plus, en el
apartado de apps.

La política de privacidad es **el único documento bilingüe**, porque Google Play la exige en
inglés y en español: lleva el bloque en español y, debajo, el bloque en inglés, cada uno con su
`lang` y su índice. El idioma se elige con el conmutador `.lang-switch` de la cabecera, que son
dos anclas (`#es` y `#en`) y no necesita JavaScript. Los identificadores de las secciones en
inglés van con el prefijo `en-` para no repetir los del español. Para añadir otro documento
bilingüe basta con copiar esa estructura: `.lang-switch`, `.doc-lang-title` y los dos bloques
`.doc-layout`.

La eliminación de datos no necesita una dirección propia: Play solo la pide cuando la app
permite crear una cuenta, y Note Plus no tiene cuentas. Está explicada dentro de la política
de privacidad, en el apartado «Eliminación de datos».

## Formulario de contacto

La sección `#contacto` incluye un formulario servido por [Tally](https://tally.so/r/vG7EXA). Se
inserta como `<iframe>` con `data-tally-src` y `https://tally.so/widgets/embed.js` (cargado con
`async`) le ajusta la altura al contenido del formulario.

- Es la vía de contacto del sitio, así que **no se publica ningún correo personal** en la página.
- El `<iframe>` lleva `loading="lazy"`: Tally solo se carga cuando el visitante llega a la sección.
- Debajo hay un enlace directo al formulario, por si el embed no se muestra (JavaScript
  desactivado, bloqueadores o fallo de red).

Sobre el aspecto: el formulario se sirve con **tema claro** y Tally no permite elegir tema por
parámetro; además, el script de Tally fuerza `color-scheme: light` en el iframe cuando el fondo
es transparente. Por eso el embed va con `transparentBackground=1` y **el fondo lo pone la web**:
`.contact-embed` es un panel claro con el degradado y los acentos violeta/cian del sitio. Así el
formulario se lee bien y encaja con el diseño oscuro, en vez de aparecer como una caja blanca
suelta. Si algún día se quiere oscurecer, hay que cambiarlo en el diseño del formulario en
Tally: entonces Tally pasará a usar texto claro y el panel podría hacerse oscuro.

Para cambiar el formulario, basta con editar el de Tally: el sitio solo apunta a su ID
(`vG7EXA`). Si algún día el formulario tiene otro ID, hay que actualizar las dos apariciones en
`index.html` (el `data-tally-src` y el enlace de respaldo).

## Rutas de los recursos

Salvo en `404.html`, **todas las páginas usan rutas relativas** (`assets/css/styles.css` en la
portada y `../../assets/css/styles.css` en los documentos legales). Así el sitio funciona igual
en tres escenarios distintos, sin depender de dónde se publique:

- En la raíz del dominio, como sitio de usuario de GitHub Pages: `https://fabian-camayo.github.io/`.
- Bajo un subdirectorio, si algún día se sirviera como sitio de proyecto (`/nombre-del-repo/`).
- Abriendo los archivos directamente desde el disco, sin servidor.

`404.html` es **la única excepción, y a propósito**: usa rutas absolutas (`/assets/...`). GitHub
Pages la sirve para cualquier dirección que no exista, y la URL no cambia, así que una ruta
relativa se resolvería contra el directorio equivocado. Por ejemplo, al pedir
`/no/existe/pagina` el navegador buscaría `/no/existe/assets/...`. Con rutas absolutas siempre
apunta a la raíz. No la cambies a rutas relativas.

Las direcciones canónicas (`rel="canonical"`) y `sitemap.xml` también son absolutas, porque por
definición deben serlo.

## Ver en local

Se puede abrir `index.html` directamente con el navegador: las rutas relativas funcionan sin
servidor. Aun así, para reproducir lo más parecido a GitHub Pages conviene servirlo:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

La página de error solo se comporta como en producción si se sirve (por lo de las rutas
absolutas), y para comprobar el sitio como si estuviera bajo un subdirectorio se puede servir
la carpeta padre y abrir `http://localhost:8000/fabian-camayo.github.io/`.

## Publicar en GitHub Pages

1. El repositorio debe llamarse exactamente **`fabian-camayo.github.io`**.
2. Sube el contenido:

   ```bash
   cd /run/media/devapps/Datos/UBUNTU/PROYECTOS/fabian-camayo.github.io
   git add -A
   git commit -m "Sitio de desarrollador independiente"
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)`**.
4. En 1–2 minutos estará en <https://fabian-camayo.github.io/>.

## Nota sobre privacidad

El sitio **no publica datos de contacto personales** (ni correo, ni teléfono, ni dirección).
Solo muestra habilidades, empresas por nombre, formación, las aplicaciones propias y los
documentos legales. Para escribir hay un formulario de Tally, de modo que quien quiera
contactar deja sus datos ahí y no hace falta exponer ninguna dirección en el sitio. Los
documentos legales remiten al correo de soporte que figure en la ficha de Google Play.

Aun así, el formulario es contenido de terceros: el sitio carga `tally.so/widgets/embed.js` y el
`<iframe>` del formulario. Es el único script externo, además de las fuentes de Google.
