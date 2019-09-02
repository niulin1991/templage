@echo off
setlocal EnableDelayedExpansion

REM 获取当前版本信心
for /F %%i in ('node -pe "require('./package.json').version"') do ( set v=%%i)
echo current version: %v%

set /p version=please input release version:
set ctr=0

for /f "delims= tokens=* eol=" %%i in (package.json) do (
  set var=%%i
  set /a ctr=ctr+1
  REM 确保是version字段被修改，而不会影响到其他的版本号
  if !ctr!==3 (
    REM 替换版本号
    set var=!var:%v%=%version%!
  )
  echo !var!>>package.json.tmp
)

move package.json.tmp package.json >nul

echo current version: %v%, new version: %version%, sure?
choice  /c YN /m "please select, Y: release; N: cancel"

if %errorlevel%==1 goto publish
if %errorlevel%==2 goto cancel

:publish
git add package.json

git commit -m "chore: release v%version% "

git push

git tag v%version%

git push origin v%version%

npm publish

:cancel
echo cencel
