# 🚀 Guía para Subir el Proyecto a GitHub

## ✅ Pasos Completados

- ✅ Repositorio Git inicializado
- ✅ Usuario configurado: **Darwinini** (darwninoe@gmail.com)
- ✅ Archivos agregados al staging area
- ✅ Commit inicial creado

## 📋 Próximos Pasos

### Opción 1: Crear Repositorio Nuevo en GitHub (Recomendado)

#### 1. Crear el Repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Configura el repositorio:
   - **Repository name**: `ecommerce-presentation`
   - **Description**: "Presentación interactiva sobre la historia del comercio electrónico - React + Vite + Tailwind"
   - **Visibility**: Public o Private (tu elección)
   - ⚠️ **NO marques** "Add a README file" (ya tenemos uno)
   - ⚠️ **NO marques** "Add .gitignore" (ya tenemos uno)
5. Haz clic en **"Create repository"**

#### 2. Conectar tu Repositorio Local con GitHub

Después de crear el repositorio, GitHub te mostrará comandos. Usa estos:

```bash
# En la terminal del proyecto
cd c:\Users\user\Desktop\PROYECTOS-VS\Tics\ecommerce-presentation

# Agregar el remote (reemplaza TU_USUARIO con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/ecommerce-presentation.git

# Cambiar el nombre de la rama a main (si es necesario)
git branch -M main

# Subir el código
git push -u origin main
```

### Opción 2: Usar GitHub Desktop (Más Fácil)

Si prefieres una interfaz gráfica:

1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Instala y abre GitHub Desktop
3. Ve a **File → Add Local Repository**
4. Selecciona la carpeta: `c:\Users\user\Desktop\PROYECTOS-VS\Tics\ecommerce-presentation`
5. Haz clic en **"Publish repository"**
6. Configura el nombre y descripción
7. Haz clic en **"Publish Repository"**

### Opción 3: Usar VS Code (Si tienes la extensión de Git)

1. Abre el proyecto en VS Code
2. Ve a la pestaña de **Source Control** (Ctrl+Shift+G)
3. Haz clic en **"Publish to GitHub"**
4. Sigue las instrucciones en pantalla

## 🔑 Autenticación

Si es tu primera vez subiendo a GitHub desde la terminal, necesitarás autenticarte:

### Método 1: Personal Access Token (Recomendado)

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Genera un nuevo token con permisos de `repo`
3. Copia el token
4. Cuando Git te pida contraseña, usa el token en lugar de tu contraseña

### Método 2: GitHub CLI

```bash
# Instalar GitHub CLI
winget install --id GitHub.cli

# Autenticarte
gh auth login

# Luego crear y subir el repo
gh repo create ecommerce-presentation --public --source=. --push
```

## 📝 Comandos Git Útiles

```bash
# Ver el estado del repositorio
git status

# Ver el historial de commits
git log --oneline

# Ver los remotes configurados
git remote -v

# Hacer cambios futuros
git add .
git commit -m "Descripción del cambio"
git push

# Crear una nueva rama
git checkout -b feature/nueva-funcionalidad

# Cambiar entre ramas
git checkout main
```

## 🌟 Después de Subir

### 1. Agregar Badges al README

Edita el README.md y agrega al inicio:

```markdown
![GitHub stars](https://img.shields.io/github/stars/TU_USUARIO/ecommerce-presentation)
![GitHub forks](https://img.shields.io/github/forks/TU_USUARIO/ecommerce-presentation)
![GitHub issues](https://img.shields.io/github/issues/TU_USUARIO/ecommerce-presentation)
```

### 2. Configurar GitHub Pages (Opcional)

Para publicar la app online:

1. Ve a Settings → Pages
2. Source: Deploy from a branch
3. Branch: main → /dist (después de hacer build)
4. O usa Vercel/Netlify para deploy automático

### 3. Agregar Topics

En la página del repositorio:
- Haz clic en el ⚙️ junto a "About"
- Agrega topics: `react`, `vite`, `tailwindcss`, `presentation`, `ecommerce`, `framer-motion`

## 🔄 Workflow Recomendado

```bash
# 1. Hacer cambios en el código
# 2. Ver qué cambió
git status

# 3. Agregar cambios
git add .

# 4. Hacer commit
git commit -m "feat: descripción del cambio"

# 5. Subir a GitHub
git push
```

### Convenciones de Commits

- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato
- `refactor:` - Refactorización de código
- `test:` - Agregar tests
- `chore:` - Tareas de mantenimiento

## 🚨 Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/ecommerce-presentation.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push origin main
```

### Error de autenticación
```bash
# Usar GitHub CLI
gh auth login
```

## 📦 Archivos Importantes

Estos archivos ya están en el repositorio:

- ✅ `.gitignore` - Ignora node_modules, dist, etc.
- ✅ `README.md` - Documentación principal
- ✅ `COMPONENTS.md` - Documentación técnica
- ✅ `package.json` - Dependencias del proyecto

## 🎯 Siguiente Paso

**Ejecuta estos comandos en tu terminal:**

```bash
# 1. Ir al directorio del proyecto
cd c:\Users\user\Desktop\PROYECTOS-VS\Tics\ecommerce-presentation

# 2. Agregar el remote (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/ecommerce-presentation.git

# 3. Verificar que se agregó correctamente
git remote -v

# 4. Subir el código
git push -u origin main
```

---

**¿Necesitas ayuda?** Avísame en qué paso estás y te ayudo a continuar.
