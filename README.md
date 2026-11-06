# smouj.github.io

Página única con los enlaces de SMOUJ, sus redes y proyectos destacados.

- **En vivo:** https://smouj.github.io
- **Stack:** HTML, CSS y JavaScript sin dependencias ni build.
- **Accesibilidad:** navegación por teclado, foco visible, contraste y `prefers-reduced-motion`.
- **SEO:** Open Graph, Twitter Card y JSON-LD `Person` con `sameAs`.

## Estructura

```text
index.html            página principal
404.html              página de error
assets/styles.css     tema oscuro/claro y estilos de proyectos
assets/app.js         tema, compartir y galerías independientes
assets/icons/*.svg    iconos de marca (Simple Icons, CC0)
assets/projects/      identidad y capturas de proyectos
assets/og.png         imagen para redes (1200x630)
site.webmanifest      metadatos de instalación
```

## Editar

Todo el contenido está en `index.html`. Para añadir una red, copia una tarjeta `<li>` y
actualiza `href`, `data-brand`, el nombre y el handle. Los colores de marca están en
`assets/styles.css`. Para añadir un proyecto, copia una sección `.project` y conserva los
atributos `data-gallery` para que funcionen los controles independientes de la galería.

## Proyectos destacados

Project Infest muestra su logotipo y capturas de desarrollo. DBZ LSW muestra el icono de la
aplicación de su repositorio y cuatro capturas históricas del 31 de agosto de 2026. El propio
proyecto aclara que esas imágenes no representan la interfaz actual; por eso están marcadas
como referencia en la página. Su tarjeta enlaza al repositorio del fangame, a
`r/DBZ_LSW_FANGAME` y al canal X `@dbz_lsw`.

Los iconos sociales proceden de Simple Icons (CC0). El avatar y los recursos de Project
Infest pertenecen a sus respectivos autores. Dragon Ball Z, sus personajes y las imágenes
relacionadas pertenecen a sus titulares; DBZ LSW es un fangame no oficial y no distribuye
la ROM original.

## Licencia

MIT para el código, salvo los iconos de marca (Simple Icons, CC0) y los recursos visuales
del avatar y proyectos, propiedad de sus respectivos autores o titulares.
