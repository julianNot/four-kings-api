# four-kings-api

API desarrollada en Node.js 16 con Express para gestionar usuarios, autenticación y operaciones relacionadas con tablas específicas (TablaA, TablaB, TablaC).

## Configuración
Para comenzar, clona el repositorio e instala las dependencias:
```
git clone https://github.com/julianNot/four-kings-api.git
cd four-kings-api
npm install
```

Crea un archivo .env en la raíz del proyecto y configura las siguientes variables:
```
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASS=tu_contraseña
DB_NAME=fourkings_db
DB_PORT=db_puerto
SECRET_KEY=your_secret_key
```

## Uso
Ejecutar el servidor:
```
npm run dev
```
### Autenticación
```
POST https://four-kings-api-vkd3cyhhnq-uc.a.run.app/api/auth
{
  "nickname": "ejemplo",
  "password": "tu_contraseña"
}
```

### Crear Usuario
```
POST https://four-kings-api-vkd3cyhhnq-uc.a.run.app/api/user
{
  "name": "Ejemplo",
  "lastName": "Apellido",
  "nickname": "ejemplo",
  "password": "tu_contraseña"
}
```

### Consultar Usuarios
```
GET https://four-kings-api-vkd3cyhhnq-uc.a.run.app/api/all
```

### Insertar Datos
```
POST https://four-kings-api-vkd3cyhhnq-uc.a.run.app/api/tables
{
  "Tabla": "A"
}
Authorization: TOKEN_LOGIN

```