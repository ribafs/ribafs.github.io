# ribafs.github.io

## RibaFS Portal

Este era o site https://ribafs.org que usava o CMS Joomla.

Foi exportado do Joomla para site estático usando o wget com as opções abaixo:

```bash
wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --restrict-file-names=windows \
     --no-parent \
         $1
```

Agora, estando hospedado aqui no GitHub, pode ser baixado completamente e funciona em qualquer pasta do disco. Basta fazer o download deste repositório:

https://github.com/ribafs/ribafs.github.io

