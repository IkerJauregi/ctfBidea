---
id: intro
title: "OWASP Juice Shop - Introducción"
sidebar_position: 1
---

## 🧃 OWASP Juice Shop

**OWASP Juice Shop** es una aplicación web intencionadamente vulnerable, utilizada para aprender sobre **seguridad web ofensiva**. Contiene retos prácticos basados en vulnerabilidades reales clasificadas por OWASP, y es ideal tanto para principiantes como para pentesters experimentados.

---

### 🎯 Objetivo de esta sección

En esta serie de ejercicios abordaremos los distintos vectores de ataque disponibles en Juice Shop, explicando:

- Cómo identificar cada vulnerabilidad
- Cómo explotarla paso a paso

---

### 📚 Categorías que exploraremos

- Autenticación y control de acceso
- Inyecciones (SQL, NoSQL)
- XSS (reflejado, persistente, DOM-based)
- CSRF
- Subida de archivos maliciosos
- Seguridad en sesiones y cookies
- Información sensible expuesta

---

### 🧪 ¿Cómo practicar?

Puedes practicar localmente o en línea:

- **Instalación local:**

```bash
docker pull bkimminich/juice-shop
docker run -d -p 3000:3000 bkimminich/juice-shop
