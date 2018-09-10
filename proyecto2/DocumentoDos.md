# PROYECTO 2 - Documento 2<h1>
# Tópicos especiales en telemática <h2>

### Atributos de calidad seleccionados:
__Miembros del equipo y asignación de QA’s:__
* Daniel Morales Londoño    - Rendimiento
* Juan David Nariño Tapias  - Disponibilidad

### 1. Análisis:

__Escenario de Rendimiento__
* __Fuente de estímulo:__ Aplicación WEB.
* __Estímulo:__ El servidor precenta un fallo o tarda demaciado en responder.
* __Ambiente:__ Se está ejecutando con una sobre carga de tráfico.
* __Artefacto:__ El estímulo ocurre sobre el servidor.
* __Respuesta:__ El servidor no puede afrencer una respuesta o tarda demaciado
* __Medida de respuesta:__ Por este fallo el tiempo de respuesta a usuarios cae un 20%.

__Escenario de Disponiblidad__





### 2. Diseño:
* __Vistas de arquitectura:__
	* __Vista lógica:__
	* ![vista](http://img.fenixzone.net/i/PgY6S3J.png)
	* __Vista de desarrollo:__
	* ![vista](http://img.fenixzone.net/i/YyP3lX4.png)
	* __Vista física:__
	* ![vista](http://img.fenixzone.net/i/2Ff1qYN.png)


* __Patrón de arquitectura:__


* __Buenas Prácticas:__
	* __Garantizar una recuperación de desastres:__ Debe tener una réplica de espejo del código y los datos desde el sitio primario. Esto sirve como una copia de seguridad en caso de fallo total del sitio primario.
	* __DRY(Don’t repeat yourself):__ No repetir código, el código duplicado es propenso a generar errores y es difícil de mantener.
	* __KISS(Keep It Simple Stupid):__ Evitar la complejidad y hacer el diseño del programa sencillo.

* __Tácticas:__
Para mantener nuestra aplicacion con alta disponibilidad y rendimiento, usaremos tácticas enfocadas a la tolerancia de fallos. Nos enfocaremos en detección de fallos, recuperación de fallos y prevención de fallos.

* __Herramientas:__
Para verificar el buen funcionamiento de los QA’s de nuestra aplicación WEB usaremos:

	* __Google PageSpeed ​​Insights:__ Es un servicio que analiza el contenido de una página web y genera sugerencias para que sus páginas se carguen más rápido. La reducción de los tiempos de carga de la página reduce las tasas de rebote y aumenta las tasas de conversión.
	* __JMeter:__ Se usa para probar el rendimiento en recursos estáticos y dinámicos (archivos, servlets, scripts Perl, objetos Java, bases de datos y consultas, servidores FTP y más). También puede usarlo para simular una carga pesada en un servidor, red u objeto para probar su fortaleza o analizar el rendimiento general bajo diferentes tipos de carga.
	* __Locust.io:__ Es una gran herramienta para entender el rendimiento en el lado del servidor.
	* gtmetrix:__ Es una gran herramienta para entender el rendimiento en el lado del servidor.


### 3. Marco-referencia-v2:

### Disponibilidad

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