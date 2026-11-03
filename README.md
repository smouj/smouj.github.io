# smouj.github.io

Página única con todos mis enlaces: redes, código, comunidad y apoyo.

- **En vivo:** https://smouj.github.io
- **Stack:** HTML, CSS y JavaScript sin dependencias ni build.
- **Accesibilidad:** navegación por teclado, foco visible, contraste y `prefers-reduced-motion`.
- **SEO:** Open Graph, Twitter Card y JSON-LD `Person` con `sameAs`.

## Estructura

```
index.html            página principal
404.html              página de error
assets/styles.css     tema oscuro/claro con variables CSS
assets/app.js         cambio de tema y botón compartir
assets/icons/*.svg    iconos de marca (Simple Icons, CC0)
assets/og.png         imagen para redes (1200x630)
site.webmanifest      metadatos de instalación
```

## Editar

Todo el contenido está en `index.html`. Para añadir una red, copia una tarjeta `<li>`,
cambia `href`, `data-brand`, `--icon`, el nombre y el handle. El color de marca se define
en `styles.css`.

## Licencia

MIT salvo los iconos de marca (Simple Icons, CC0) y el avatar, propiedad del autor.
