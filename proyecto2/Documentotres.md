# PROYECTO 2 - Documento 3<h1>
# Tópicos especiales en telemática <h2>

### 1. Miembros del equipo
* Daniel Morales Londoño    - Rendimiento
* Juan David Nariño Tapias  - Disponibilidad

### 2. Diseño de arquitectura de la Aplicación y Sistema
	* Vista de desarrollo
	* Vista de despliegue

### 3. Implementación y Pruebas por Atributo de Calidad
	* Implementación
	* Esquemas de pruebas para comprobar el Atributo de Calidad

### 4. Marco-referencia-v3:

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
