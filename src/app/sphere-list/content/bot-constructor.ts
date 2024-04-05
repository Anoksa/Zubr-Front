import { Sphere } from '../interface/sphere'
import beDictionary from '../../../assets/i18n/be.json'
import ruDictionary from '../../../assets/i18n/ru.json'
import enDictionary from '../../../assets/i18n/en.json'

export class BOT_CONSTRUCTOR {
  private static nameSphere: string = 'bot-constructor'

  private static viewNameRU: string =
    ruDictionary.SPHERE['bot-constructor'].viewName
  private static viewNameBE: string =
    beDictionary.SPHERE['bot-constructor'].viewName
  private static viewNameEN: string =
    enDictionary.SPHERE['bot-constructor'].viewName


  private static descriptionRU: string =
    ruDictionary.SPHERE['bot-constructor'].description
  private static descriptionBE: string =
    beDictionary.SPHERE['bot-constructor'].description
  private static descriptionEN: string =
    enDictionary.SPHERE['bot-constructor'].description


  private static contentRU: string = `
        <ol>
            <li>ОБЩИЕ ПОЛОЖЕНИЯ</li>
        </ol>
        <p>Бот &mdash; это автоматизированный многофункциональный помощник, который может показывать информацию подписчикам и
            собирать информацию по запросу согласно заранее подготовленным сценариям.</p>
        <p>Telegram &minus; кроссплатформенная система мгновенного обмена сообщениями (мессенджер) с функциями VoIP,
            позволяющая
            обмениваться текстовыми, голосовыми и видеосообщениями, стикерами и фотографиями, файлами многих форматов.</p>
        <ol start="2">
            <li>О СОРЕВНОВАНИИ</li>
        </ol>
        <p>Соревнования состоит из одного задания.</p>
        <p>Чат-бот должен быть написан на любом языке программрования. Использование кострукторов запрещено.</p>
        <p>Файловая структура может разделятся на несколько файлов или весь код будет в одном файле.</p>
        <p>Для написания бота должден быть аккаунт в мессенджере Telegram.</p>
        <ol class="two-level-list">
            <li>
                Регистрация бота:
                <ul>
                    <li>Введите в поле поиска <a href="https://t.me/BotFather">@BotFather</a> и выберите бот.</li>
                    <li>Нажмите &laquo;Запустить&raquo; для активации бота BotFather.</li>
                    <li>В ответ вы получите список команд по управлению ботом.</li>
                    <li>Выберите или напечатайте и отправьте команду /newbot.</li>
                    <li>Дайте имя боту &mdash; клиенты увидят это имя при общении с ботом. И никнейм бота &mdash; по нему можно будет
                        найти бота в Telegram. Никнейм должен быть уникальным, не повторять существующие в базе и заканчиваться на
                        слово
                        &laquo;bot&raquo;.</li>
                    <li>
                        После того как вы выберите подходящее имя бот будет создан. Вы получите сообщение со ссылкой на бота
                        t.me/&lt;никнейм_бота&gt;, рекомендации по настройке аватарки, описание бота и список команд для его настройки.
                    </li>
                </ul>
            </li>
            <li>
                Получение токена:
                <ul>
                    <li>Перейдите к боту <a href="https://t.me/BotFather">@BotFather</a> и введите команду /token.</li>
                    <li>Вы увидите кнопки с созданными ботами.</li>
                    <li>Выберите бот, который нужно подключить.</li>
                    <li>Скопируйте значение токена и втсавьте его переменную в файл проекта.</li>
                </ul>
            </li>
            <li>Запуск бота через командную строку.</li>
        </ol>
        <ol start="3">
            <li>КОНКУРСНОЕ ЗАДАНИЕ</li>
        </ol>
        <p>Участнику необходимо создать бота в мессенджере Telegram на заданную тематику.</p>
        <table>
            <tbody>
                <tr>
                    <td>
                        <p>Максимальное количество баллов</p>
                    </td>
                    <td>
                        <p>100</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Из них:</p>
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        <p>регистрация бота</p>
                    </td>
                    <td>
                        <p>10</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>единый стиль написания кода</p>
                    </td>
                    <td>
                        <p>25</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>соответствие требованиям задания</p>
                    </td>
                    <td>
                        <p>15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>использование LayoutButtons</p>
                    </td>
                    <td>
                        <p>15</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>работоспособность бота (только при ненулевой работоспособности)</p>
                    </td>
                    <td>
                        <p>35</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>Задание считается полностью выполненным, если участник может предоставить полностью рабочего бота.</p>
        <ol start="4">
            <li>ПОРЯДОК ПРОВЕДЕНИЯ СОРЕВНОВАНИЙ</li>
        </ol>
        <p>Во время проведения конкурса участник должен знать и строго соблюдать правила безопасного поведения учащихся на
            конкурсной площадке</p>
        <p>За грубые нарушения правила безопасного поведения учащихся, которые привели к порче оборудования, инструмента, травме или созданию аварийной ситуации, участник отстраняется от дальнейшего участия в конкурсе. Решение об отстранении принимает главный судья.</p>
        <ol start="5">
            <li>ПРАВИЛА ОПРЕДЕЛЕНИЯ ПОБЕДИТЕЛЯ</li>
        </ol>
        <p>Участник, набравший наибольшее количество баллов за выполнение одного конкурсного задания, считается победителем.
        </p>
        <p>В случае набора участниками одинакового количества баллов, победителем конкурса считается участник, набравший
            наибольшее количество баллов и выполнивший конкурсные задания за наименьшее время.</p>
        <p>В случае разногласий окончательное решение оценки конкурса принимает главный судья.</p>
    `
  private static contentBE: string = `<ol>
<li>
<p>АГУЛЬНЫЯ ПАЛАЖЭННІ</p>
</li>
</ol>
<p>Бот - гэта аўтаматызаваны шматфункцыянальны памочнік, які можа паказваць інфармацыю падпісчыкам і збіраць інфармацыю па запыце згодна з загадзя падрыхтаваным сцэнарыем.</p>
<p>Telegram &ndash; кросплатформавая сістэма імгненнага абмену паведамленнямі (месенджар) з функцыямі VoIP, якая дазваляе абменьвацца тэкставымі, галасавымі і відэапаведамленнямі, стыкерамі і фатаграфіямі, файламі шматлікіх фарматаў.</p>
<ol start="2">
<li>АБ СПАБОРНІЦТВЕ</li>
</ol>
<p>Спаборніцтва складаецца з аднаго задання.</p>
<p>Чат-бот павінен быць напісаны на любой мове праграміравання. Выкарыстанне канструктараў забаронена.</p>
<p>Файлавая структура можа падзяляцца на некалькі файлаў, ці ўвесь код будзе ў адным файле.</p>
<p>Для напісання робата павінен быць акаўнт у мэсэнджары Telegram.</p>
<ol class="two-level-list">
<li>
<p>Рэгістрацыя бота:</p>
<ul>
<li>Увядзіце ў поле пошуку&nbsp;<a href="https://t.me/BotFather">@BotFather</a> і абярыце бот.</li>
<li>Націсніце "Запусціць" для актывацыі бота BotFather.</li>
<li>У адказ вы атрымаеце спіс каманд па кіраванні ботам.</li>
<li>Абярыце або надрукуйце і адпраўце каманду /newbot.</li>
<li>Дайце імя робату - кліенты ўбачаць гэтае імя пры зносінах з робатам. І нікнэйм робата &ndash; па ім можна будзе знайсці робата ў Telegram. Нікнэйм павінен быць унікальным, не паўтараць існуючыя ў базе і заканчвацца на слова &laquo;bot&raquo;.</li>
<li>Пасля таго як вы выберыце прыдатнае імя, бот будзе створаны. Вы атрымаеце паведамленне са спасылкай на робата t.me/&lt;нікнэйм_бота&gt;, рэкамендацыі па наладзе аватаркі, апісанне робата і спіс каманд для яго налады.</li>
</ul>
</li>
<li>Атрыманне токена:
<ul>
<li>Перайдзіце да бота&nbsp;<a href="https://t.me/BotFather">@BotFather</a> і ўвядзіце каманду /token.</li>
<li>Вы ўбачыце кнопкі са створанымі ботамі.</li>
<li>Выберыце бот, які трэба падключыць.</li>
<li>Скапіруйце значэнне токена і ўстаўце яго зменную ў файл праекта.</li>
</ul>
</li>
<li>Запуск бота праз камандны радок.</li>
</ol>
<ol start="3">
<li>КОНКУРСНАЕ ЗАДАННЕ</li>
</ol>
<p>Удзельніку неабходна стварыць робата ў мэсэнджары Telegram на зададзеную тэматыку.</p>
<table style="width: 498px; height: 299px;">
<tbody>
<tr>
<td style="width: 459.9px;">
<p>Максімальная колькасць балаў</p>
</td>
<td style="width: 24.5px;">
<p>100</p>
</td>
</tr>
<tr>
<td style="width: 459.9px;">
<p>З іх:</p>
</td>
<td style="width: 24.5px;">&nbsp;</td>
</tr>
<tr>
<td style="width: 459.9px;">
<p>рэгістрацыя бота</p>
</td>
<td style="width: 24.5px;">
<p>10</p>
</td>
</tr>
<tr>
<td style="width: 459.9px;">
<p>адзіны стыль напісання кода</p>
</td>
<td style="width: 24.5px;">
<p>25</p>
</td>
</tr>
<tr>
<td style="width: 459.9px;">
<p>адпаведнасць патрабаванням задання</p>
</td>
<td style="width: 24.5px;">
<p>15</p>
</td>
</tr>
<tr>
<td style="width: 459.9px;">
<p>выкарыстанне LayoutButtons</p>
</td>
<td style="width: 24.5px;">
<p>15</p>
</td>
</tr>
<tr>
<td style="width: 459.9px;">
<p>працаздольнасць робата (толькі пры ненулявой працаздольнасці)</p>
</td>
<td style="width: 24.5px;">
<p>35</p>
</td>
</tr>
</tbody>
</table>
<p>Заданне лічыцца цалкам выкананым, калі ўдзельнік можа даць поўнасцю рабочага бота.</p>
<ol start="4">
<li>ПАРАДАК ПРАВЯДЗЕННЯ СПАБОРНІЦТВАЎ</li>
</ol>
<p>У час правядзення конкурсу ўдзельнік павінен ведаць і строга выконваць правілы бяспечных паводзін вучняў на конкурснай пляцоўцы.</p>
<p>За грубыя парушэнні правіл бяспечных паводзін навучэнцаў, якія прывялі да псавання абсталявання, інструмента, траўмы або стварэння аварыйнай сітуацыі, удзельнік адхіляецца ад далейшага ўдзелу ў конкурсе. Рашэнне аб адхіленні прымае галоўны суддзя.</p>
<ol start="5">
<li>ПРАВІЛЫ ВЫЗНАЧЭННЯ ПЕРАМОЖЦЫ</li>
</ol>
<p>Удзельнік, які набраў найбольшую колькасць балаў за выкананне аднаго конкурснага задання, лічыцца пераможцам.</p>
<p>У выпадку набору ўдзельнікамі аднолькавай колькасці балаў пераможцам конкурсу лічыцца ўдзельнік, які набраў найбольшую колькасць балаў і выканаў конкурсныя заданні за найменшы час.</p>
<p>У выпадку рознагалоссяў канчатковае рашэнне адзнакі конкурсу прымае галоўны суддзя.</p>`
  private static contentEN: string =
    'Information is temporarily unavailable. You can view details in Russian or Belarusian languages'

  static getItem(currentLang: string): Sphere {
    let competence

    if (currentLang == 'ru') {
      competence = this.ruTranslate
    } else if (currentLang == 'be') {
      competence = this.beTranslate
    } else {
      competence = this.enTranslate
    }

    return competence
  }

  private static ruTranslate: Sphere = {
    name: this.nameSphere,
    viewName: this.viewNameRU,
    description: this.descriptionRU,
    content: this.contentRU,
  }

  private static beTranslate: Sphere = {
    name: this.nameSphere,
    viewName: this.viewNameBE,
    description: this.descriptionBE,
    content: this.contentBE,
  }

  private static enTranslate: Sphere = {
    name: this.nameSphere,
    viewName: this.viewNameEN,
    description: this.descriptionEN,
    content: this.contentEN,
  }
}

//export const BOT_CONSTRUCTOR: Sphere = {
//    name: 'bot-constructor',
//    viewName: `bot-конструктор 9 класс`,
//    description: `Бот — это автоматизированный многофункциональный помощник, который может показывать информацию подписчикам и собирать информацию по запросу согласно заранее подготовленным сценариям. Telegram − кроссплатформенная система мгновенного обмена сообщениями (мессенджер) с функциями VoIP, позволяющая обмениваться текстовыми, голосовыми и видеосообщениями, стикерами и фотографиями, файлами многих форматов.`,
//    content: /*html*/ `
//        <ol>
//            <li>ОБЩИЕ ПОЛОЖЕНИЯ</li>
//        </ol>
//        <p>Бот &mdash; это автоматизированный многофункциональный помощник, который может показывать информацию подписчикам и
//            собирать информацию по запросу согласно заранее подготовленным сценариям.</p>
//        <p>Telegram &minus; кроссплатформенная система мгновенного обмена сообщениями (мессенджер) с функциями VoIP,
//            позволяющая
//            обмениваться текстовыми, голосовыми и видеосообщениями, стикерами и фотографиями, файлами многих форматов.</p>
//        <ol start="2">
//            <li>О СОРЕВНОВАНИИ</li>
//        </ol>
//        <p>Соревнования состоит из одного задания.</p>
//        <p>Чат-бот должен быть написан на любом языке программрования. Использование кострукторов запрещено.</p>
//        <p>Файловая структура может разделятся на несколько файлов или весь код будет в одном файле.</p>
//        <p>Для написания бота должден быть аккаунт в мессенджере Telegram.</p>
//        <ol class="two-level-list">
//            <li>
//                Регистрация бота:
//                <ul>
//                    <li>Введите в поле поиска <a href="https://t.me/BotFather">@BotFather</a> и выберите бот.</li>
//                    <li>Нажмите &laquo;Запустить&raquo; для активации бота BotFather.</li>
//                    <li>В ответ вы получите список команд по управлению ботом.</li>
//                    <li>Выберите или напечатайте и отправьте команду /newbot.</li>
//                    <li>Дайте имя боту &mdash; клиенты увидят это имя при общении с ботом. И никнейм бота &mdash; по нему можно будет
//                        найти бота в Telegram. Никнейм должен быть уникальным, не повторять существующие в базе и заканчиваться на
//                        слово
//                        &laquo;bot&raquo;.</li>
//                    <li>
//                        После того как вы выберите подходящее имя бот будет создан. Вы получите сообщение со ссылкой на бота
//                        t.me/&lt;никнейм_бота&gt;, рекомендации по настройке аватарки, описание бота и список команд для его настройки.
//                    </li>
//                </ul>
//            </li>
//            <li>
//                Получение токена:
//                <ul>
//                    <li>Перейдите к боту <a href="https://t.me/BotFather">@BotFather</a> и введите команду /token.</li>
//                    <li>Вы увидите кнопки с созданными ботами.</li>
//                    <li>Выберите бот, который нужно подключить.</li>
//                    <li>Скопируйте значение токена и втсавьте его переменную в файл проекта.</li>
//                </ul>
//            </li>
//            <li>Запуск бота через командную строку.</li>
//        </ol>
//        <ol start="3">
//            <li>КОНКУРСНОЕ ЗАДАНИЕ</li>
//        </ol>
//        <p>Участнику необходимо создать бота в мессенджере Telegram на заданную тематику.</p>
//        <table>
//            <tbody>
//                <tr>
//                    <td>
//                        <p>Максимальное количество баллов</p>
//                    </td>
//                    <td>
//                        <p>100</p>
//                    </td>
//                </tr>
//                <tr>
//                    <td>
//                        <p>Из них:</p>
//                    </td>
//                    <td>&nbsp;</td>
//                </tr>
//                <tr>
//                    <td>
//                        <p>регистрация бота</p>
//                    </td>
//                    <td>
//                        <p>10</p>
//                    </td>
//                </tr>
//                <tr>
//                    <td>
//                        <p>единый стиль написания кода</p>
//                    </td>
//                    <td>
//                        <p>25</p>
//                    </td>
//                </tr>
//                <tr>
//                    <td>
//                        <p>соответствие требованиям задания</p>
//                    </td>
//                    <td>
//                        <p>15</p>
//                    </td>
//                </tr>
//                <tr>
//                    <td>
//                        <p>использование LayoutButtons</p>
//                    </td>
//                    <td>
//                        <p>15</p>
//                    </td>
//                </tr>
//                <tr>
//                    <td>
//                        <p>работоспособность бота (только при ненулевой работоспособности)</p>
//                    </td>
//                    <td>
//                        <p>35</p>
//                    </td>
//                </tr>
//            </tbody>
//        </table>
//        <p>Задание считается полностью выполненным, если участник может предоставить полностью рабочего бота.</p>
//        <ol start="4">
//            <li>ПОРЯДОК ПРОВЕДЕНИЯ СОРЕВНОВАНИЙ</li>
//        </ol>
//        <p>Во время проведения конкурса участник должен знать и строго соблюдать правила безопасного поведения учащихся на
//            конкурсной площадке</p>
//        <p>За грубые нарушения правила безопасного поведения учащихся, которые привели к порче оборудования, инструмента, травме или созданию аварийной ситуации, участник отстраняется от дальнейшего участия в конкурсе. Решение об отстранении принимает главный судья.</p>
//        <ol start="5">
//            <li>ПРАВИЛА ОПРЕДЕЛЕНИЯ ПОБЕДИТЕЛЯ</li>
//        </ol>
//        <p>Участник, набравший наибольшее количество баллов за выполнение одного конкурсного задания, считается победителем.
//        </p>
//        <p>В случае набора участниками одинакового количества баллов, победителем конкурса считается участник, набравший
//            наибольшее количество баллов и выполнивший конкурсные задания за наименьшее время.</p>
//        <p>В случае разногласий окончательное решение оценки конкурса принимает главный судья.</p>
//    `,
//};
