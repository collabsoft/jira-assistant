cd build
del static\media\*.svg
del static\js\*.txt
md source_map
move static\js\*.map source_map\
echo Copiying package to individual folders
xcopy assets\* chrome\assets /S /I /Y
xcopy static\* chrome\static /S /I /Y
copy * chrome /Y
xcopy assets\* edge\assets /S /I /Y
xcopy static\* edge\static /S /I /Y
copy * edge /Y
move *.* firefox
move assets firefox
move static firefox
pause