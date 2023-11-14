# Как решать ошибки циклической зависимости

## Первое правило

В файле, где **определена экспортируемая константа**, все импорты должны указывать напрямую на файл-источник. То есть нельзя импортировать с указанием на индексный файл.  
Таким образом, из списка проблем вы исключите практически неотлавливаемые ошибки "чужих" циклических зависимостей.

## Второе правило

Если при соблюдении первого правила возникает ошибка циклической зависимости, то это означает, что для анализа у вас будут следующие входящие:

- файл с конкретной константой
- файл возникновения ошибки

Ошибка будет связана с тем, что константа еще не определена, а в файле возникновения ошибки javascript пытается выполнить код с участием этой константы.

---

Пакет, который установлен из npm является гарантированно корректным, т.к. файлы такого пакета могут ссылаться только на файлы внутри этого пакета.  
**Скорее всего ошибочное утверждение!** Проверить.

Некорректный пакет:

1) Два файла пакета ссылаются друг на друга И **один из файлов импортирует константу** из другого
2) Какой-то из файлов пакета импортирует из вне пакета. Таким образом возникает вероятность, что этот импорт из вне где-нибудь в иерархии попадет на некорректный пакет

Пути решения:

1) **Пакет не должен импортировать из-вне**  
   Если это невозможно достичь, то удалить index

2) **Файл не должен импортировать некорректные пакеты** (пакеты, в которых есть импорт из вне)  
   Если это невозможно достичь, тогда импорт внутрь файла надо делать, указав прямую ссылку до файла в пакете

3) **Надо удалить все индексы**  
   Если и останутся зацикливания, то только прямые - между двумя файлами.

Как искать:

по фразе  
`export const`  
проверить, а если функция создана через конст, тоже возникнет проблема?  






