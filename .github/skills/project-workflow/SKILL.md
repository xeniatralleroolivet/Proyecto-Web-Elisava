---
name: project-workflow
description: Protocolo para iniciar, desarrollar y cerrar sesiones de trabajo del Proyecto Web de Elisava manteniendo continuidad mediante los archivos de definición y el registro log.md.
---

# Project Workflow

## Objetivo
Mantener la continuidad del proyecto entre sesiones, respetando su contexto, personalidad y criterios acordados. Este skill es el protocolo de trabajo del repositorio.

## Antes de cada sesión
1. Leer completos y en su versión más reciente:
   - `personalidad.md`
   - `contexto.md`
   - `criterio.md`
   - `log.md`
2. Revisar el estado actual del repositorio y los archivos directamente relacionados con la tarea.
3. Consultar en `log.md` el último punto de continuación, las decisiones recientes y las tareas pendientes.
4. Si falta alguno de los documentos, señalarlo y no inventar su contenido.
5. Resumir brevemente qué se entiende del estado del proyecto antes de proponer cambios relevantes.

## Durante la sesión
- Usar los documentos de definición como referencia prioritaria.
- Mantener coherencia con las decisiones ya tomadas.
- Diferenciar hechos, hipótesis, propuestas y decisiones confirmadas.
- Cuestionar constructivamente las ideas cuando haya contradicciones o alternativas mejores; explicar los motivos.
- No modificar `personalidad.md`, `contexto.md` ni `criterio.md` sin hablarlo antes con la persona usuaria y obtener su aprobación explícita.
- No presentar una propuesta como una decisión acordada.
- Antes de editar código, revisar el estado actual y modificar solo lo necesario. Evitar sobrescribir trabajo existente sin comprobarlo.
- Respetar el carácter académico y experimental del proyecto y explicar los cambios técnicos de forma comprensible.

## Al cerrar cada sesión
Actualizar `log.md` con una nueva entrada fechada que incluya:
- **Objetivo y temas trabajados.**
- **Avances y archivos modificados**, indicando qué cambió.
- **Decisiones confirmadas**, diferenciándolas de las propuestas.
- **Ideas descartadas y motivos**, si las hubo.
- **Dudas o aspectos por resolver.**
- **Tareas pendientes y siguiente paso concreto.**
- **Punto exacto de continuación** para la próxima sesión.

No inventar trabajo, decisiones ni resultados. Si no se ha podido actualizar GitHub, indicarlo claramente y proporcionar el contenido preparado para incorporar al registro.

## Reglas de integridad
- No borrar ni reemplazar contenido de los documentos de definición por iniciativa propia.
- No dar por hecho que una sesión está registrada hasta confirmar que el cambio en GitHub se ha guardado correctamente.
- Comprobar los cambios y sus resultados antes de comunicarlos como completados.
- Mantener el registro cronológico; añadir entradas nuevas sin eliminar las anteriores.

## Estructura de referencia
```text
/
├── personalidad.md
├── contexto.md
├── criterio.md
├── log.md
└── .github/
    └── skills/
        └── project-workflow/
            └── SKILL.md
```

## Activación
Cuando la persona usuaria diga «empezamos sesión», «activa el workflow», «continuamos el proyecto» o solicite trabajo en este repositorio, aplicar este protocolo. Si el entorno no carga skills automáticamente, abrir este archivo y seguir sus instrucciones explícitamente.
