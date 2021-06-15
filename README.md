# Hybrid ZeroDS 
[Repositorio en Bitbucket](https://bitbucket.org/baturamobile/zero-ds-hybrid/src/master/)

**Zero Design System** *by Batura Mobile* for Ionic/Angular hybrid apps.

Librería Zero DS para proyectos Angular o Ionic/Angular.

*Para la completa integración en el proyecto (paleta de color, tipografía, etc.) es recomendanle usarla en proyectos Ionic > v5.0.0.
Esto se puede comprobar ejecutando `ionic info` dentro del proyecto Ionic y refiriendose a la versión de **Ionic Framework**
```bash
Ionic:

   Ionic CLI                     : 6.16.3 (/Users/aingeru/.nvm/versions/node/v14.15.1/lib/node_modules/@ionic/cli)  // Versión de Ionic CLI
   Ionic Framework               : @ionic/angular 5.6.8                                                             // Versión de Ionic
   @angular-devkit/build-angular : 12.0.3
   @angular-devkit/schematics    : 12.0.3
   @angular/cli                  : 12.0.3                                                                           // Versión de Angular
   @ionic/angular-toolkit        : 4.0.0
```

## Índice

  * [Crear un workspace Multi-App](#crear-un-workspace-multi-app)
  * [Crear app híbrida Ionic (ionic app)](#crear-app-h-brida-ionic--ionic-app-)
    + [Crear nuevo componente](#crear-nuevo-componente)
  * [Crear librería Angular (ng lib)](#crear-librer-a-angular--ng-lib-)
  * [Crear web-app Angular (ng app)](#crear-web-app-angular--ng-app-)
  * [Probar la librería en una app](#probar-la-librer-a-en-una-app)
    + [Importar la librería en la app](#importar-la-librer-a-en-la-app)
  * [Bibliografía](#bibliograf-a)

## Crear un workspace Multi-App
https://ionicframework.com/docs/cli/configuration#multi-app-projects

0. Crear workspace para la libería con `ng new zero-ds --createApplication=false (--prefix=zero-ds)`
1. Crear manualmente la carpeta `/projects` en la raíz para albergar todas las apps y librerías 
    
    **Los nuevos proyectos angular crean la carpeta automáticamente, pero los de Ionic no*
2. Crear archivo de configuración para gestionar el workspace multi-app Ionic con `ionic init`. Esto creará el archivo **ionic.config.json** en la raíz, donde se listaran todas las apps y libs del proyecto
   ```json
   {
     "projects": {}
   }
   ```

## Crear app híbrida Ionic (ionic app)

Crear proyecto acoplado a la librería para poder usarlo como demo e importar la librería en local para la fase de desarrollo y pruebas.

1. (Desde el directorio /projects) **Crear app ionic** con `ionic start` y rellenar los datos que pide el cli (project-name, ionic template, capacitor integration, ionic account, ...)
2. Para lanzar esa u otra app, añadir la opción `--project` trás el comando (e.g. `ionic serve --project=ionic-zero-ds`). 
También se puede especificar un proyecto por defecto en el archivo **ionic.config.json** de la raíz 
```json
   {
      "defaultProject": "ionic-zero-ds",    // <- proyecto por defecto del workspace: es el que se ejecutará en caso de omisión
      "projects": {
        "ionic-zero-ds": {
          "name": "ionic-zero-ds",          // <- nombre del proyecto
          "integrations": {
            "capacitor": {}
          },
          "type": "angular",
          "root": "projects/ionic-zero-ds"  // <- raíz del proyecto
        }
      }
  }
```
**!TROUBLESHOOTING** 

Para solventar el `[ERROR] ng has unexpectedly closed (exit code 127).` al lanzar la app con `ionic serve (--project=ionic-zero-ds)`:

  4.1.1 Ir al archivo **angular.json** de ese proyecto (projects/ionic-zero-ds/angular.json) y las referencias de "app" por el nombre del proyecto en cada app/lib:
  * "defaultProject": "app" --> "defaultProject": "ionic-zero-ds"
  * (bajo "projects") "app" --> "ionic-zero-ds"
  * todas las ocurrencias (12) de "app:" --> "ionic-zero-ds:"

### TODO: Crear nuevo componente

Crear nuevo componente modular, que se pueda importar de manera independiente mediante su propia ruta de importación (sub-entry).
Para este proceso, se ha instalado el paquete [ng-samurai](https://github.com/kreuzerk/ng-samurai) que crea cada módulo con su propia entrada o acceso secundario (al global) de la misma manera para todos, ya que cada módulo de la librería debería tener la propia

1. (Dentro de la librería -> `cd projects/zero-ds/hybrid`) Ejecutar `ng g ng-samurai:generate-subentry <path-del-modulo/nombre-modulo> --gm true --gc true`
   1. Flasg: `--gm` para indicar si debe crear un módulo. `--gc` para indicar si debe crear un componente.

  ```bash
    ng g ng-samurai:generate-subentry lib/zero-component --gm true --gc true
  ```
   
   Además de la generación opcional de los anteriores, crear una carpeta con los archivos:
   * **index.ts** sirve como enlace entre el módulo y el índice global de la librería.
   * **public-api.ts** archivo en el que se listan los módulos, componentes, clases, interfaces, etc. que se podrán importar desde fuera.
   * **package.json** archivo de configuración propia del módulo (entre otras cosas, sirve para versionar individualmente el componente del módulo).
2. En el arhivo global **src/public-api.ts** se crea una referencia a la entrada del módulo:
  ```ts
  /** Zero Avatar Group */
  export * from './lib/zero-avatar-group';
  ```
  De esta manera, cuando se importe algún componente de este módulo desde fuera, quedarás así:
  ```ts
    /** Importar Zero Avatar Group */
    import { ZeroAvatarGroupModule } from "@zero-ds/hybrid/src/lib/zero-avatar-group";
   ```

## Crear librería Angular (ng lib)

1. (Desde el directorio /projects) **Crear librería angular** con `ng generate library --prefix=zero` (la opción de `--prefix=zero` es para denominar los componentes creados en la librería con ese prefijo, sustituyendo el prefijo "app" que trae por defecto).
2. Compilar la librería con `ng build @zero-ds/hybrid` que la generará en la carpeta **/dist** en la raíz del workspace.
   * En desarrollo, para auto-compilar los cambios -> añadir el flag `-watch`. Es muy útil si estás utilizando paralelamente la librería en una app, ya que la app detecta los cambios y actualiza la librería con la nueva compilación.
3. Añadir Ionic (u otras dependencias) en la librería -> entrando dentro de la carpeta de la lib en **projects/zero-ds/hybrid**, instalar con `npm i @ionic/angular` y asegurarse que en el **package.json** de la librería, se ha añadido en el objeto de `peerDependencies`, que son las que se instalarán en la app que importe la librería.

## Crear web-app Angular (ng app)

1. (En el caso de proyectos angular generados con angular-cli, se pueden crear desde la raíz y los metera automáticamente en /projects) Crear web angular con `ng generate application angular-zero-ds`.
2. Servir la web con `ng serve --project=angular-zero-ds`

## Probar la librería en una app

Se puede probar/importar la librería en una app de varias formas dependiendo de la localización de cada una, pero en cualquier caso se debe generar una compilación de la última versión ejecutando `ng build @zero-ds/hybrid`.

**a) App y lib en el mismo repo (Multi-App | Monorepo)**

Basta con tener compilada la versión que se quiere probar en la carpeta **/dist** de la raíz. En fase de desarrollo, añadir opción `--watch` para que auto-genere una recompilación incremental al detectar cambios.

**b) App y lib en en local pero en diferentes proyectos**

Una vez generada la versión que se quiere probar en **/dist**, situarse en la lib compilada `cd dist/zero-ds/hybrid` y ejecutar `npm link`. Esto crea un enlace simbólico (symLink) en los node_modules locales del usuario.

Después, en la app en la que se quiere probar la lib, se deben seguir estos pasos:
* Ejecutar `npm link @zero-ds/hybrid` -> se añadirá la lib en los node_modules del proyecto.
* En el archivo **angular.json** -> añadir la propiedad `"preserveSymlinks": true` dentro de projects.app.architect.build.options.

**c) Otros casos**

Como en las opciones anteriores, después de generar la versión que se quiere probar en /dist, dirigirse a esa carpeta `cd dist/zero-ds/hybrid` y ejecutar `npm pack`. Este comando comprimiar la librería en un paquete que se podrá instalar en cualquier proyecto con el comando `npm install <localizacion_del_paquete>` (e.g. se puede enviar por correo a un@ compañer@, descargarlo en el escritorio y referenciar ese path para instalarla).

### Importar la librería en la app


1. Importar el módulo de la librería (**ZeroHybidModule** <- /projects/zero-ds/hybrid/src/lib/zero-hybrid.module.ts) en un módulo de la app (**AppModule** <- /projects/ionic-zero-ds/src/app/app.module.ts)
   ```ts
   import { ZeroHybridModule } from '@zero-ds/hybrid'
   ...
   imports: [
     ...
     ZeroHybridModule
   ]
   ```
   1. Error al importar la librería en el módulo de la App -> `error TS2307: Cannot find module '@zero-ds/hybrid' or its corresponding type declarations`
      
      Para solventar el error y que la app sea capaz de encontrar la referencia a nuestra librería, hay que dirigirse al archivo tsconfig.json de la app en la que estamos improtando la librería y añadir (o incluir en el la lista existente) la propiedad "paths":
      ```json
      "paths": {
        "@zero-ds/hybrid": [
          "../../dist/zero-ds/hybrid/zero-ds-hybrid",
          "../../dist/zero-ds/hybrid"
        ],
        "@zero-ds/hybrid/*": [
          "../../dist/zero-ds/hybrid/zero-ds-hybrid/*",
          "../../dist/zero-ds/hybrid/*"
        ],
        "@angular/*": [
          "./node_modules/@angular/*"
        ],
        "@ionic/*": [
          "./node_modules/@ionic/*"
        ],
      },
      ```
      Del mismo modo, aprovechamos para añadir el path del paquete de Angular y de Ionic al que se tiene que referenciar (el propio de la app, no del workspace).

2. Probar a mostrar un componente del módulo de la librería importado en la vista:
```html
<!-- Componente en vista -->
<zero-component [prop]="data" (event)="function($event)"></zero-component>
```
o un servicio desde el controlador:
```ts
import { ZeroService } from '@zero-ds/hybrid';

constructor(private zeroService: ZeroService) {
  this.zeroService.method();
}
```


## Bibliografía

* [How to Build an Ionic 4 Multi App Project with Shared Angular Library](https://medium.com/angular-in-depth/building-an-ionic-multi-app-project-with-shared-angular-library-c9fa0383fd71): 
  * video: https://www.youtube.com/watch?v=mlCdfAvny6o
* [How to Create & Publish an Angular Library with Ionic 4 Components](https://devdactic.com/angular-ionic-library/): 
  * video: https://www.youtube.com/watch?v=eR3bp1xcp70
