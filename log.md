# Registro de trabajo — log.md

Este documento recoge cronológicamente las sesiones del proyecto. Cada nueva sesión debe añadirse al principio o al final manteniendo el historial, sin borrar entradas anteriores.

## 4 de noviembre de 2026 — Preparación del sistema de trabajo

### Objetivo
Establecer una documentación base y un protocolo para mantener la continuidad del Proyecto Web de Elisava entre sesiones.

### Trabajo realizado
- Se revisó la estructura inicial del repositorio.
- Se comprobó que la web parte de una plantilla básica con `index.html`, `style.css` y `script.js`.
- Se definió la función de los documentos de personalidad, contexto, criterios y registro.
- Se preparó el skill `.github/skills/project-workflow/SKILL.md`.

### Archivos incorporados
- `personalidad.md`: primera estructura de identidad verbal y visual; aspectos aún por definir.
- `contexto.md`: síntesis del proyecto sobre Strava, la dimensión social de los datos deportivos y la experiencia subjetiva.
- `criterio.md`: criterios iniciales narrativos, de datos, visuales, de interacción y técnicos.
- `log.md`: registro de sesiones.
- `.github/skills/project-workflow/SKILL.md`: protocolo de inicio, desarrollo y cierre de sesiones.

### Decisiones y acuerdos
- Antes de cada sesión se deben leer los cuatro documentos de referencia.
- Al finalizar cada sesión se debe actualizar este registro con avances, decisiones, dudas y próximos pasos.
- Los documentos `personalidad.md`, `contexto.md` y `criterio.md` no se modificarán sin acordarlo previamente.
- La línea temporal y la estética experimental/manual se mantienen como vías de exploración, no como decisiones definitivas.

### Ideas descartadas
- Ninguna en esta sesión.

### Dudas y tareas pendientes
- Revisar y validar el contenido inicial de los tres documentos de definición.
- Concretar la personalidad e identidad visual del producto.
- Definir la estructura narrativa y la interacción del producto digital.
- Continuar el desarrollo de la web a partir de la plantilla inicial.

### Punto de continuación
En la próxima sesión, leer los documentos de definición y este registro; después, decidir qué aspecto del producto digital se trabajará a continuación. No se ha modificado todavía el código de la web.

## 23 de noviembre de 2026 — Personalidad de la web

- Se actualizó `personalidad.md` con la dirección confirmada por Xènia: una web que refleje su identidad, presente los entrenamientos con naturalidad y deje espacio para explorar los datos sin convertirlos en una competición.
- La elección de los recursos gráficos concretos sigue abierta.
- Próximo paso: revisar `contexto.md` con Xènia cuando quiera continuar con el siguiente documento.

## 23 de noviembre de 2026 — Referente visual

Se precisó en `personalidad.md` qué interesa de *Dear Data*: la clasificación mediante formas y colores y la lectura de los diagramas con una leyenda. La tipografía y el acabado siguen abiertos. El siguiente documento por revisar es `contexto.md`.

## 23 de noviembre de 2026 — Contexto de la investigación

Se actualizó `contexto.md` con la pregunta aprobada sobre cómo influye la mirada ajena al mostrar los resultados, el periodo de abril a octubre y las dos lecturas de cada salida. La línea temporal sigue siendo una posibilidad. El próximo documento por revisar con Xènia es `criterio.md`.

## 23 de noviembre de 2026 — Criterios de datos y alcance

Se actualizó `criterio.md` por indicación de Xènia. La web y sus prototipos usarán exclusivamente sus registros reales de entrenamiento. Las instrucciones del proyecto se aplicarán solo a las consultas sobre esta web.

## 23 de noviembre de 2026 — Fidelidad a los registros originales

Conservar y mostrar íntegra toda la información de cada registro de entrenamiento, sin resumir, recortar, reformular ni corregir. Reproducir literalmente cada nota, por larga que sea, con sus palabras, emojis, repeticiones, erratas, mayúsculas, signos de puntuación, espacios y saltos de línea originales. Este acuerdo se incorporó a los criterios de datos del proyecto web.

## 23 de noviembre de 2026 — Revisión de archivos iniciales

Se actualizó la presentación del proyecto en el README y se vinculó el protocolo con los criterios vigentes de alcance y fidelidad. La rama principal contiene una plantilla web y existe una versión distinta en la carpeta local. Queda por identificar qué versión quiere continuar Xènia antes de sustituir la plantilla.

## 23 de noviembre de 2026 — Lo que no cuenta Strava

Xènia eligió la versión con el archivo emocional y el muro de testigos. Se adaptó a los tres archivos de la web. El experimento utiliza tres salidas de abril. De los 45 registros, doce incluyen notas cotejadas con la hoja en PDF. Las restantes quedan pendientes del archivo editable para comprobar caracteres y saltos de línea. El muro funciona en modo local.

## 23 de noviembre de 2026 — Cotejo con la tabla de estadísticas

El PDF de estadísticas contiene 46 registros. Se recuperaron las notas por celdas y se corrigió la comparación de junio y septiembre. La web muestra las 45 actividades incluidas en la investigación. El CSV conserva también la actividad del 16 de septiembre. Los emojis dibujados en el PDF se transcribieron a Unicode a partir de su aspecto.

## 23 de noviembre de 2026 — Memoria, audiencia y archivo de datos

Se incorporó el CSV de 46 registros y se revisaron el README, el contexto y los criterios a partir de la memoria de Figma y del prototipo actual. Quedan documentados el público, la interpretación personal de la mirada ajena y las interacciones disponibles. La selección de la web sigue excluyendo el 16 de septiembre.

## Lectura directa del CSV

El experimento, la comparación, el archivo y las estadísticas leen la misma tabla al cargar la página. Se comprobó que los 45 registros conservan sus notas, cifras y categorías actuales y que una nota editada con comillas, un salto de línea y un emoji aparece completa. El inicio local permite seleccionar el CSV.

## 23 de noviembre de 2026 — Ubicación del protocolo

Se trasladó el protocolo de trabajo a [SKILL.md](SKILL.md) en la raíz del repositorio y se actualizó su enlace a los criterios del proyecto.

## 23 de noviembre de 2026 · Entrega 2 · Una vuelta completa del loop

### Scroll 1 · ¿Qué te dicen 5,53 kilómetros?

**Intención.** Quiero que quien visite la web se forme una primera impresión de mi salida del 12 de abril al ver la distancia, el ritmo y los kudos. Después podrá releer esas cifras junto a lo que escribí ese día.

**Primera versión.** La tarjeta permanece fija al bajar. El scroll revela poco a poco la nota original, que se carga desde el CSV.

**Prueba y observación.** Se ejecutó la lógica de la interacción con los registros reales y se simularon tres posiciones del scroll. En la posición intermedia, la primera versión ocultaba la mitad superior de la nota. Eso hacía aparecer el final del comentario antes que el principio.

**Cambio.** Se invirtió el sentido del recorte. Ahora se descubre primero el encabezado de la nota y después el texto en su orden de lectura.

**Nueva prueba y decisión.** Con alturas simuladas de 640 y 800 píxeles, se recorrió la secuencia en ambas direcciones. Al bajar se pasó de nota oculta a media nota y a nota completa. Al subir se recuperaron los estados anteriores. El comentario coincidió con la celda del CSV. Se conserva esta segunda versión para la V1.

### Scroll 2 · Siete meses, salida a salida

**Intención.** Hacer visible la constancia a través de los días en los que salí a correr y de los espacios que quedan entre ellos.

**Implementación y prueba.** Cada punto ocupa el día y el mes de una actividad. Al bajar se incorpora un mes y permanecen visibles los anteriores. Se comprobó que el contador y los puntos visibles coincidían en abril (3), julio (18) y octubre (45). Al retroceder se recuperaron los 18 puntos de julio y los 3 de abril.

**Alcance de las pruebas.** Las comprobaciones fueron técnicas, con posiciones de scroll simuladas. Queda pendiente observar cómo una persona interpreta los dos recorridos en un navegador.
