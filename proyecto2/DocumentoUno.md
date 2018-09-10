# PROYECTO 2 - Documento 1<h1>
# Tópicos especiales en telemática <h2>

### Definición del equipo, proyecto y aplicación:
__Miembros del equipo y asignación de QA’s:__
* Juan David Nariño Tapias  - Disponibilidad
* Daniel Morales Londoño    - Rendimiento

__Selección de la aplicación basada en Proyecto1:__
La aplicación seleccionada por el equipo de desarrollo gue la del compañero Juan David Nariño Tapias, debido a que se considerá la aplicación más completa: https://github.com/jnarino/trackerapp

__Descripción de la aplicación:__


Consiste en una aplicación WEB en tiempo real, que registra la ubicación del usuario cada 5 segundos y muestra la visualización de esta en un mapa de google. Esta aplicación estará optimizada y totalmente disponible.

__Requisitos Funcionales:__

* __RF001 - Gestión de la ubicación:__ El sistema permitirá al usuario crear y consultar ubicaciones, tanto manualmente como automáticamente cada 5 segundos.
* __RF002 - Validación de usuarios:__ El sistema validará el registro del usuario, para permitir el ingreso y salida del sistema por medio de sesiones.
* __RF003 - Gestión de usuarios:__ El sistema permitirá a los usuarios registrarse para poder gestionar la información de su ubicación.
* __RF004 - Visualización de ubicaciones:__ El sistema permitirá al usuario visualizar sus ubicaciones en un mapa de google por medio de marcadores, para que pueda conocer qué ruta a realizado. 

### Detalles técnicos

#### Diseño del sistema:
![diseño](http://img.fenixzone.net/i/DUFbwSM.png)

#### Implementación:

Para el desarrollo de este proyecto se utilizará el lenguaje de programación <tt>Nodejs</tt>, para el back-end y para el front-end se utilizaron templates propios del lenguaje en este caso para las vistas se utilizó <tt>html.erb</tt> y para la base de datos, en el desarrollo se usó <tt>mongodb</tt>

__Disponibilidad:__ El intervalo de tiempo que el sistema estará disponible será 99.99%.

__Rendimiento:__ Se usarán estategias para aglizar las respuestas de la máquina

### Data Center Académico:
* Juan David Nariño Tapias  - 10.131.137.224:3000 
* Daniel Morales Londoño    - 10.131.137.207:3000

### Marco-referencia-v1:

### Rendimiento

La optimización de un sistema se caracteriza por aspectos como:
* __Latencia:__ Es el tiempo necesario para la primera respuesta del servidor.
* __Rendimiento:__ Es el número total de transacciones que el sistema puede procesar en un intervalo de tiempo dado.


#### Cómo se mide

La capacidad de un sistema se mide por medio de la ley de Little (L = A x W), donde:
* __L:__ Promedio de requerimientos en un sistema estable
* __A:__ Promedio de llegadas
* __W:__ Tiempo de atención por servicio

##### Ejemplo
* 100 solicitudes web por segundo
* 0.5 s para atender cada solicitud
* L = 100 * 0.5 = 50 solicitud concurrentemente

#### Patrones y buenas prácticas

* Llamadas por lotes a la interfaz de origen
* Establecer SLA de rendimiento claro para todos los niveles superiores y sistemas de integración aguas abajo
* Usar formatos de intercambio de datos ligeros y rápidos como JSON en comparación con XML
* Use una alternativa de servicio ligera como REST a diferencia de a otras opciones pesadas como SOAP
* Use llamadas asíncronas para evitar el bloqueo
* Minimizar el número de llamadas a la interfaz de origen
* Simular y probar a fondo todos los posibles escenarios de excepción como escenario de indisponibilidad de servicio, escenario lento de red, y escenario de alto volumen de tráfico
* Integrar y probar temprano y a menudo
* Hacer pruebas multidispositivas y multiusuario
* Exponer el componente de integración como un lado conectable del cliente componente como widget o un portlet
* Establecer mensajes e íconos intuitivos para indicar en progreso actas
* Adoptar arquitectura orientada a servicios (SOA) para todas las interfaces servicios de apoyo
* Almacenar en caché los resultados de los servicios de uso frecuente
* Usar conceptos de diseño receptivos para lograr optimizados rendimiento en todos los canales
* Establecer tiempos de espera aceptables para el negocio con interfaces en caso de condiciones de excepción
* Pruebe el comportamiento de respuesta de la interfaz en caso de excepción. El código de error y la descripción del error deberían proporcionar un amplia indicación de la causa raíz de la excepción
