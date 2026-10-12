# fabian-camayo.github.io

Sitio personal de **Fabian Camayo**, desarrollador fullstack independiente.
Es el repositorio especial de usuario de GitHub Pages: al llamarse
`fabian-camayo.github.io`, se publica directamente en
<https://fabian-camayo.github.io/>.

## Contenido

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Página única con las secciones: perfil, habilidades, experiencia, formación y apps. |
| `note-plus/privacidad/index.html` | Política de privacidad de Note Plus. Dirección obligatoria para Google Play. |
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

La eliminación de datos no necesita una dirección propia: Play solo la pide cuando la app
permite crear una cuenta, y Note Plus no tiene cuentas. Está explicada dentro de la política
de privacidad, en el apartado «Eliminación de datos».

## Ver en local

Como las páginas internas usan rutas absolutas (`/assets/...`), conviene servirlo en lugar de
abrir los archivos directamente:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

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
documentos legales. Los documentos remiten al correo de soporte que figure en la ficha de
Google Play, para no publicar la dirección directamente en el sitio.
