# Инструкция по пушу на GitHub

## Текущая ситуация
- Репозиторий настроен: `https://Abobusmogus@github.com/Abobusmogus/osint4us.git`
- Ветка: `main`
- Рабочая директория чистая

## Проблема
GitHub требует аутентификацию через Personal Access Token (PAT) или SSH ключ.

## Решение 1: Использование Personal Access Token (PAT) - Рекомендуется

### Шаг 1: Создайте Personal Access Token
1. Перейдите на https://github.com/settings/tokens
2. Нажмите "Generate new token" → "Generate new token (classic)"
3. Назовите токен (например, "osint4us-site")
4. Выберите срок действия (рекомендуется: 90 дней или "No expiration")
5. Отметьте права доступа:
   - ✅ `repo` (полный доступ к репозиториям)
6. Нажмите "Generate token"
7. **ВАЖНО**: Скопируйте токен сразу (он больше не будет показан!)

### Шаг 2: Настройте Git для использования токена

Выполните в PowerShell (замените `YOUR_TOKEN` на ваш токен):

```powershell
cd c:\Users\qwilu\osint4us-site

# Измените URL репозитория на формат с токеном
git remote set-url origin https://YOUR_TOKEN@github.com/Abobusmogus/osint4us.git

# Или используйте имя пользователя + токен
git remote set-url origin https://Abobusmogus:YOUR_TOKEN@github.com/Abobusmogus/osint4us.git
```

### Шаг 3: Запушьте код

```powershell
# Проверьте статус
git status

# Если есть изменения, добавьте их
git add .

# Создайте коммит (если нужно)
git commit -m "Update site"

# Запушьте на GitHub
git push origin main
```

## Решение 2: Использование SSH ключа

### Шаг 1: Создайте SSH ключ

Выполните в PowerShell:

```powershell
# Создайте директорию .ssh если её нет
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.ssh"

# Создайте SSH ключ
ssh-keygen -t ed25519 -C "your_email@example.com" -f "$env:USERPROFILE\.ssh\id_ed25519"

# Нажмите Enter для пустого пароля (или введите пароль)
```

### Шаг 2: Добавьте ключ в GitHub

1. Скопируйте публичный ключ:
```powershell
Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub" | Set-Clipboard
```

2. Перейдите на https://github.com/settings/keys
3. Нажмите "New SSH key"
4. Вставьте ключ и сохраните

### Шаг 3: Измените URL репозитория на SSH

```powershell
cd c:\Users\qwilu\osint4us-site
git remote set-url origin git@github.com:Abobusmogus/osint4us.git
```

### Шаг 4: Запушьте код

```powershell
git push origin main
```

## Решение 3: Использование GitHub Desktop или VS Code

Если у вас установлен GitHub Desktop или VS Code с расширением Git:
- Они автоматически обрабатывают аутентификацию
- Просто используйте их интерфейс для пуша

## Быстрая проверка

После настройки проверьте:

```powershell
cd c:\Users\qwilu\osint4us-site

# Проверьте URL
git remote -v

# Попробуйте получить данные с GitHub
git fetch origin

# Если fetch работает, можете пушить
git push origin main
```

## Если что-то пошло не так

### Ошибка: "Authentication failed"
- Проверьте правильность токена или SSH ключа
- Убедитесь, что токен имеет права `repo`

### Ошибка: "Permission denied"
- Проверьте, что у вас есть права на запись в репозиторий
- Убедитесь, что используете правильное имя пользователя

### Ошибка: "Repository not found"
- Проверьте правильность URL репозитория
- Убедитесь, что репозиторий существует на GitHub

## Дополнительные команды

```powershell
# Посмотреть текущий статус
git status

# Посмотреть историю коммитов
git log --oneline -10

# Посмотреть настройки удаленного репозитория
git remote show origin

# Изменить URL репозитория
git remote set-url origin <новый_url>
```
