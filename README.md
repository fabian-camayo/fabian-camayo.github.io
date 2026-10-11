# fabian-camayo.github.io

Sitio personal de **Fabian Camayo**, desarrollador fullstack independiente.
Es el repositorio especial de usuario de GitHub Pages: al llamarse
`fabian-camayo.github.io`, se publica directamente en
<https://fabian-camayo.github.io/>.

## Contenido

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Página única con todas las secciones (perfil, habilidades, experiencia, formación, apps y checklist de Google Play). |
| `assets/css/styles.css` | Todo el diseño. Tema oscuro, glassmorphism, responsive y `prefers-reduced-motion`. |
| `assets/js/main.js` | Interacciones sin dependencias: menú móvil, revelados, barras de habilidades, contador y acordeón. |
| `assets/img/favicon.svg` | Icono del sitio. |
| `404.html` | Página de error. |
| `robots.txt`, `sitemap.xml` | Para buscadores. |
| `.nojekyll` | Evita que GitHub Pages procese el sitio con Jekyll. |

No hay build, ni `npm install`, ni dependencias. HTML, CSS y JavaScript puros.

## Ver en local

Como usa rutas relativas, basta con abrir `index.html` en el navegador. Si
prefieres servirlo:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Publicar en GitHub Pages

1. Crea el repositorio en GitHub con el nombre exacto **`fabian-camayo.github.io`**
   (en una cuenta personal, el repositorio del sitio de usuario debe llamarse así).
2. Conéctalo y sube el contenido:

   ```bash
   cd /run/media/devapps/Datos/UBUNTU/PROYECTOS/fabian-camayo.github.io
   git add -A
   git commit -m "Sitio de desarrollador independiente"
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)`**.
4. En 1–2 minutos estará en <https://fabian-camayo.github.io/>.

## Nota sobre privacidad

El sitio **no publica datos de contacto personales** (ni correo, ni teléfono,
ni dirección). Solo muestra habilidades, empresas por nombre, formación y las
aplicaciones propias. Si algún día quieres añadir un canal de contacto,
conviene usar un formulario o un correo público, no datos personales.
