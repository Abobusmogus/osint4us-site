# Скрипт для пуша на GitHub
# Использование: .\push-to-github.ps1

Write-Host "=== Пуш на GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Переходим в директорию проекта
Set-Location $PSScriptRoot

# Проверяем статус
Write-Host "Проверка статуса репозитория..." -ForegroundColor Yellow
git status

Write-Host ""
Write-Host "Проверка удаленного репозитория..." -ForegroundColor Yellow
git remote -v

Write-Host ""
$hasChanges = git status --porcelain
if ($hasChanges) {
    Write-Host "Обнаружены изменения. Добавить и закоммитить? (Y/N)" -ForegroundColor Yellow
    $response = Read-Host
    if ($response -eq "Y" -or $response -eq "y") {
        Write-Host "Добавление файлов..." -ForegroundColor Yellow
        git add .
        
        Write-Host "Введите сообщение коммита:" -ForegroundColor Yellow
        $commitMessage = Read-Host
        if ([string]::IsNullOrWhiteSpace($commitMessage)) {
            $commitMessage = "Update site"
        }
        
        git commit -m $commitMessage
        Write-Host "Коммит создан!" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Попытка пуша на GitHub..." -ForegroundColor Yellow
Write-Host "Если появится запрос на аутентификацию:" -ForegroundColor Cyan
Write-Host "1. Для HTTPS: используйте Personal Access Token (не пароль!)" -ForegroundColor Cyan
Write-Host "2. Для SSH: убедитесь, что SSH ключ добавлен в GitHub" -ForegroundColor Cyan
Write-Host ""

try {
    git push origin main
    Write-Host ""
    Write-Host "✅ Успешно запушено на GitHub!" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "❌ Ошибка при пуше:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "См. инструкции в файле GITHUB_PUSH.md" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Нажмите любую клавишу для выхода..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
